import React, { useEffect, useState } from 'react';
import { Category } from '../../models/Category';
import api from '../../services/api';

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<Array<Category>>([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    await api
      .get('/categories')
      .then((response) => setCategories(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Categories</h1>

      {categories.map((category: Category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <p>{category.id}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
