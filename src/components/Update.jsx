import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RecipeContext } from '../Contexts/RecipeContext';
import { toast } from 'react-toastify';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipes, setRecipes] = useContext(RecipeContext);

  const recipeToEdit = recipes.find((r) => r.id === id);

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');

  useEffect(() => {
    if (recipeToEdit) {
      setImage(recipeToEdit.image);
      setName(recipeToEdit.name);
      setDescription(recipeToEdit.description);
      setIngredients(recipeToEdit.ingredients);
    }
  }, [recipeToEdit]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedRecipe = {
      id,
      image,
      name,
      description,
      ingredients
    };

    const updatedRecipes = recipes.map((r) => (r.id === id ? updatedRecipe : r));
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

    toast.success("Recipe updated successfully!");
    navigate('/recipes'); // or navigate(`/recipes/${id}`) if you want to go back to details
  };

  if (!recipeToEdit) {
    return <div className='text-white text-center py-20 text-2xl'>Recipe not found.</div>;
  }

  return (
    <div className='px-10 py-5 w-full'>
      <h1 className='text-3xl text-blue-500 text-center font-semibold'>Update Existing Recipe</h1>
      <form onSubmit={handleUpdate} className='mt-7'>
        <label className='mb-1 ml-2 font-medium text-white block'>IMAGE-URL</label>
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className='px-5 py-3 mb-3 w-[50vw]'
          type="url"
          placeholder='Recipe Image URL'
        /><br />

        <label className='mb-1 ml-2 font-medium text-white block'>RECIPE NAME</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='px-5 py-3 mb-3 w-[50vw]'
          type="text"
          placeholder='Recipe Name'
        /><br />

        <label className='mb-1 ml-2 font-medium text-white block'>RECIPE DESCRIPTION</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='px-5 py-3 mb-3 h-20 w-[50vw]'
          placeholder='Description'
        ></textarea><br />

        <label className='mb-1 ml-2 font-medium text-white block'>RECIPE INGREDIENTS</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className='px-5 py-3 mb-3 h-32 w-[50vw]'
          placeholder='Ingredients (comma separated)'
        ></textarea><br />

        <input
          className='px-4 py-2 bg-blue-500 ml-2 rounded text-white font-medium'
          type="submit"
          value="Update Recipe"
        />
      </form>
    </div>
  );
};

export default Update;
