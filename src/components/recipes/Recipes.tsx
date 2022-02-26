import React, { useEffect, useState } from 'react';
import { IRecipe } from '../../models/IRecipe';
import api from '../../services/api';
import Recipe from './Recipe';

const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState<Array<IRecipe>>([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    await api
      .get('/recipes')
      .then((response) => {
        const data = response.data.map((recipe: IRecipe) => ({
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
        <Recipe recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
};

export default Recipes;
