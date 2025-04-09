import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Card from './Card';
import { RecipeContext } from '../Contexts/RecipeContext'; // ✅ named import: context

const Recipes = () => {
  const [recipes, setRecipes] = useContext(RecipeContext); // ✅ correct usage

  const { pathname } = useLocation();
  console.log(recipes);

  return (
    <div className='relative text-white py-4 px-10'>
      <Link
        className='px-4 py-2 bg-white text-black font-medium rounded text-xl'
        to='/Create'
      >
        Create New Recipe
      </Link>

      <div className='h-[34vw] w-full overflow-y-scroll mt-10 py-4 px-7 relative flex flex-wrap gap-8 no-scrollbar'>
        {recipes.map((recipe) => (
          <Card key={recipe.id} data={recipe} />
        ))}

      </div>
    </div>
  );
};

export default Recipes;
