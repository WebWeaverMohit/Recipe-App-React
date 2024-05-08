import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (

        <div>
            <nav className='flex justify-between items-center w-full'>
                <img className='h-24 w-24 object-cover object-center' src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01105727/8_big33.png" alt="" />
                <div className=' flex justify-center items-center gap-8 mr-10'>
                    <Link className='text-lg text-white' to="/">Home</Link>
                    <Link className='text-lg text-white' to="/Recipes">Recipes</Link>
                    <Link className='text-lg text-white' to="/About">About</Link>
                    <Link className='text-lg text-white' to="/Contact">Contact</Link>
                </div>
            </nav>
        </div>
    )
}

export default Nav