import React from 'react'
import foodImage from '../images/homeimage.avif'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='h-[75%] mt-10 relative w-full bg-red-500 '>
            <img className='object-cover object-fit h-full w-full' src={foodImage} alt="" />
            <div className='absolute top-[8vw] left-12'>
                <h1 className='text-[#546401] text-7xl font-bold'>SIMPLE AND TASTY <br /> RECIPES</h1>
                <p className='mt-7 text-[black] text-xl font-medium mb-10'>Lorem sit amet consectetur adipisicing elit. Voluptas dolores <br /> aueriores suscipit! Nihil, dicta corrupti.</p>
                <Link to="/recipes" className="bg-[#546401] text-white font-medium py-3 px-5 rounded">Get Started</Link>
            </div>
        </div>
    )
}

export default Home