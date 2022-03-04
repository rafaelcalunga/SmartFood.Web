import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { IRecipe } from '../../models/IRecipe';
import api from '../../services/api';
import Recipe from './Recipe';
import RecipeForm from './RecipeForm';

const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState<Array<IRecipe>>([]);
  const [showForm, setShowForm] = useState(false);

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

  const addRecipe = (recipe: IRecipe) => {
    setRecipes([...recipes, recipe]);
    setShowForm(false);
  };

  return (
    <>
      <h1>Recipes</h1>

      <div>
        <button onClick={() => setShowForm(true)}>Add Recipe</button>
      </div>

      <Row>
        {recipes.map((recipe) => (
          <Col xs={12} md={3} key={recipe.id}>
            <Recipe recipe={recipe} />
          </Col>
        ))}
      </Row>

      {showForm && (
        <RecipeForm
          show={showForm}
          onClose={() => setShowForm(false)}
          onAdd={(recipe) => addRecipe(recipe)}
        />
      )}
    </>
  );
};

export default Recipes;
