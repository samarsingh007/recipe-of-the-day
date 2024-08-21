from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from .models import Recipe
import random

@api_view(['GET'])
def get_random_recipe(request):
    recipes = Recipe.objects.all()
    if recipes.exists():
        recipe = random.choice(recipes)
        return Response({
            'id': recipe.id,
            'title': recipe.title,
            'description': recipe.description
        })
    else:
        return Response({'error': 'No recipes available'}, status=404)

@api_view(['GET'])
def get_recipe_details(request, recipe_id):
    recipe = Recipe.objects.get(id=recipe_id)
    return Response({
        'title': recipe.title,
        'description': recipe.description,
        'ingredients': recipe.ingredients,
        'instructions': recipe.instructions
    })

@api_view(['POST'])
def add_to_favorites(request, recipe_id):
    try:
        recipe = Recipe.objects.get(id=recipe_id)
        recipe.favorite_count += 1
        recipe.save()
        return Response({'message': 'Recipe added to favorites', 'favorite_count': recipe.favorite_count})
    except Recipe.DoesNotExist:
        return Response({'error': 'Recipe not found'}, status=404)

@api_view(['GET'])
def get_favorites(request):
    favorites = Recipe.objects.filter(favorite_count__gt=0).order_by('-favorite_count')
    favorite_recipes = [{"id": recipe.id, "title": recipe.title, "description": recipe.description, "favorite_count": recipe.favorite_count} for recipe in favorites]
    return Response(favorite_recipes)
