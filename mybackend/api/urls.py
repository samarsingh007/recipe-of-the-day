from django.urls import path
from .views import get_random_recipe, get_recipe_details, add_to_favorites, get_favorites

urlpatterns = [
    path('random-recipe/', get_random_recipe, name='random-recipe'),
    path('recipe/<int:recipe_id>/', get_recipe_details, name='recipe-details'),
    path('recipe/<int:recipe_id>/favorite/', add_to_favorites, name='add-to-favorites'),
    path('favorites/', get_favorites, name='get-favorites'),
]
