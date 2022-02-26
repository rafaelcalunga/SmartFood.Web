import { formatDistance } from 'date-fns';
import React from 'react';
import { IRecipe } from '../../models/IRecipe';

interface IProps {
  recipe: IRecipe;
}

const Recipe: React.FC<IProps> = ({ recipe }: IProps) => {
  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <p>{formatDistance(recipe.createdAt, new Date(), { addSuffix: true })}</p>
    </div>
  );
};

export default Recipe;
