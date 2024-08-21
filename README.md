::: WordSection1
**Recipe of the Day Application**

**Introduction**

The **Recipe of the Day** application is a web-based platform that
displays a randomly selected recipe each day. Built with a **React.js**
frontend and a **Django** backend, the application allows users to view
detailed recipe instructions, add recipes to their favorites, and
explore a list of their favorite recipes.

**Setup and Installation**

**Clone the Repository**

Clone the repository using git clone
https://github.com/yourusername/recipe-of-the-day.git and navigate into
the project directory with cd recipe-of-the-day.

**Backend Setup (Django)**

1.  A sample database is already attached to this repository
    (db.sqlite3).
2.  Install the required Python packages by running pip install -r
    requirements.txt.
3.  Start the Django development server with python manage.py
    [runserver]{.SpellE}.

**Frontend Setup (React)**

1.  Navigate to the frontend directory with cd frontend. Adjust this if
    your React app is located elsewhere.
2.  Install the required Node.js packages by running [npm]{.SpellE}
    install.
3.  Start the React development server with [npm]{.SpellE} start.

**Access the Application**

-   The Django backend will be running at:
    [http://127.0.0.1:8000/](http://127.0.0.1:8000/){target="_new"}.
-   The React frontend will be running at:
    [http://localhost:3000/](http://localhost:3000/){target="_new"}.

Enjoy exploring the \"Recipe of the Day\" application!

**API Endpoints**

The application backend provides several REST API endpoints implemented
using Django and Django REST Framework. These endpoints are responsible
for handling requests related to recipes and user interactions.

**Get Random Recipe**

-   **Endpoint**: /[api]{.SpellE}/[random-recipe]{.GramE}/
-   **Method**: GET
-   **Description**: Returns a random recipe from the database. This
    endpoint is called when the homepage loads to display the \"Recipe
    of the Day.\"

**Get Recipe Details**

-   **Endpoint**: /[api]{.SpellE}/recipe/\<[recipe_id]{.SpellE}\>/
-   **Method**: GET
-   **Description**: Returns detailed information about a specific
    recipe, including ingredients and instructions. This is used when a
    user selects a recipe to view more details.

**Add to Favorites**

-   **Endpoint**:
    /[api]{.SpellE}/recipe/\<[recipe_id]{.SpellE}\>/favorite/
-   **Method**: POST
-   **Description**: Marks a recipe as a favorite. This increments the
    favorite count for the recipe and adds it to the user\'s list of
    favorite recipes.

**Get Favorites**

-   **Endpoint**: /[api]{.SpellE}/favorites/
-   **Method**: GET
-   **Description**: Retrieves a list of all recipes that have been
    marked as favorite, sorted by the number of times they\'ve been
    favorited.

**Frontend Implementation**

The frontend of the application is built using **React.js**. The key
components and their functionalities are as follows:

-   [**HomePage**]{.SpellE}: Displays the random recipe of the day and
    includes a button to view the user\'s favorite recipes.
-   [**RandomRecipe**]{.SpellE} **Component**: Fetches and displays a
    random recipe using the /[api]{.SpellE}/[random-recipe]{.GramE}/
    endpoint.
-   [**RecipeDetails**]{.SpellE} **Component**: Fetches and displays
    detailed information about a selected recipe using the
    /[api]{.SpellE}/recipe/\<[recipe_id]{.SpellE}\>/ endpoint. It also
    includes a button to add the recipe to favorites.
-   [**FavoritesPage**]{.SpellE}: Displays a list of all favorite
    recipes by fetching data from the /[api]{.SpellE}/favorites/
    endpoint.

**Backend Implementation**

The backend is implemented using **Django** and **Django REST
Framework**, with the following key features:

-   **Models**: The Recipe model includes fields for the title,
    description, ingredients, instructions, and a favorite count.
-   **Views**: The views handle the business logic for the API
    endpoints, including fetching random recipes, retrieving recipe
    details, and managing favorites.
-   **Database**: The application uses a relational database to store
    recipe data, including details and user favorites.

 
:::
