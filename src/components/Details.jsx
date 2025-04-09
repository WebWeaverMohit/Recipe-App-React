// src/pages/Details.jsx
import React, { useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { RecipeContext } from '../Contexts/RecipeContext';

const Details = () => {
  const { id } = useParams();
  const [recipes, setRecipes] = useContext(RecipeContext);
  const navigate = useNavigate();

  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="text-white text-center py-20 text-2xl">
        Recipe not found.
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      const updated = recipes.filter((r) => r.id !== id);
      setRecipes(updated);
      navigate('/recipes');
    }
  };

  return (
    <div className='text-white w-full h-screen overflow-hidden flex px-10 py-4'>
      <div className="w-1/2 px-8 py-4">
        <div className='h-[22vw] w-full'>
          <img className='h-full w-full object-cover object-center rounded-lg' src={recipe.image} alt={recipe.name} />
        </div>
        <div className='text-center mt-7'>
          <h1 className='text-2xl mb-4 font-semibold'>{recipe.name}</h1>
          <p className='text-lg font-medium'>{recipe.description}</p>
        </div>
        <div className='flex mt-10 justify-between items-center px-4 py-2'>
          <Link to={`/update/${recipe.id}`}>
            <button className='px-4 py-2 bg-white text-blue-500 text-md font-medium rounded'>Update</button>
          </Link>
          <button
            onClick={handleDelete}
            className='px-4 py-2 bg-white text-red-500 text-md font-medium rounded'
          >
            Delete
          </button>
        </div>
      </div>

      <div className="w-1/2 px-8 py-4">
        <h2 className='text-2xl font-semibold mb-5'>Ingredients</h2>
        <ul className='list-disc pl-5 text-lg font-medium space-y-2'>
          {recipe.ingredients.split(',').map((ing, index) => (
            <li key={index}>{ing.trim()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
