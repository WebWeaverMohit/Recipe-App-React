// src/Contexts/RecipeContext.js
import React, { createContext, useState, useEffect } from 'react';

export const RecipeContext = createContext(null);

const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(() => {
    const stored = localStorage.getItem("recipes");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  return (
    <RecipeContext.Provider value={[recipes, setRecipes]}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
