import React, { useEffect, useState } from 'react';
import { Recipe } from '../../models/Recipe';
import api from '../../services/api';

const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState<Array<Recipe>>([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    await api
      .get('/recipes')
      .then((response) => {
        const data = response.data.map((recipe: Recipe) => ({
          ...recipe,
          createdAt: new Date(recipe.createdAt),
          updatedAt: new Date(recipe.updatedAt),
        }));

        setRecipes(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Recipes</h1>

      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <p>{recipe.description}</p>
          <p>{recipe.createdAt.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
