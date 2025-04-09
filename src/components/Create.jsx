import { nanoid } from 'nanoid';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ import useNavigate
import { RecipeContext } from '../Contexts/RecipeContext';
import { toast } from 'react-toastify';

const Create = () => {
  const [recipes, setrecipes] = useContext(RecipeContext);
  const navigate = useNavigate(); // ✅ initialize navigate

  const [image, setimage] = useState("");
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [ingredients, setingredients] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // Basic validation (optional)
    if (!image || !name || !description || !ingredients) {
      toast.error("Please fill all fields");
      return;
    }

    const newRecipe = { id: nanoid(), image, name, description, ingredients };

    setrecipes([...recipes, newRecipe]);
    toast.success("Recipe Created Successfully");

    // Redirect after a short delay for toast to be seen (optional)
    setTimeout(() => {
      navigate('/recipes');
    }, 500);

    // Clear form
    setimage("");
    setname("");
    setdescription("");
    setingredients("");
  };

  return (
    <div className='px-10 py-5 w-full'>
      <h1 className='text-3xl text-white text-center font-semibold'>Create New Recipe</h1>
      <form onSubmit={submitHandler} className='mt-7'>

        <label className='mb-1 ml-2 font-medium text-white block'>IMAGE-URL</label>
        <input
          onChange={(e) => setimage(e.target.value)}
          value={image}
          className='px-5 py-3 mb-3 w-[50vw]'
          type="url"
          placeholder='Recipe Image URL'
        /><br />

        <label className='mb-1 ml-2 font-medium text-white block'>RECIPE NAME</label>
        <input
          onChange={(e) => setname(e.target.value)}
          value={name}
          className='px-5 py-3 mb-3 w-[50vw]'
          type="text"
          placeholder='Recipe Name'
        /><br />

        <label className='mb-1 ml-2 font-medium text-white block'>RECIPE DESCRIPTION</label>
        <textarea
          onChange={(e) => setdescription(e.target.value)}
          value={description}
          className='px-5 py-3 mb-3 h-20 w-[50vw]'
          placeholder='Description'
        ></textarea><br />

        <label className='mb-1 ml-2 font-medium text-white block'>RECIPE INGREDIENTS</label>
        <textarea
          onChange={(e) => setingredients(e.target.value)}
          value={ingredients}
          className='px-5 py-3 mb-3 h-32 w-[50vw]'
          placeholder='Ingredients'
        ></textarea><br />

        <input
          className='px-4 py-2 bg-blue-500 ml-2 rounded text-white font-medium cursor-pointer'
          type="submit"
          value="Create Recipe"
        />
      </form>
    </div>
  );
};

export default Create;
