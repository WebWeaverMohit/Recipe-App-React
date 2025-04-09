import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const linkStyle = (path) =>
    `text-lg pb-1 ${
      currentPath === path
        ? 'text-green-400 font-semibold border-b-2 border-green-400'
        : 'text-white'
    } transition duration-200`;

  return (
    <div>
      <nav className='flex justify-between items-center w-full px-6 py-4'>
        <img
          className='h-20 w-20 object-cover object-center'
          src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01105727/8_big33.png"
          alt="Logo"
        />
        <div className='flex justify-center items-center gap-8'>
          <Link className={linkStyle('/')} to="/">Home</Link>
          <Link className={linkStyle('/Recipes')} to="/Recipes">Recipes</Link>
          <Link className={linkStyle('/About')} to="/About">About</Link>
          <Link className={linkStyle('/Contact')} to="/Contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
