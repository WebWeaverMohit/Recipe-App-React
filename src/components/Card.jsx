import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  return (
    <Link to={`/recipes/${data.id}`}>
      <div className='px-2 py-2 h-[22vw] w-[20vw] text-center relative overflow-hidden bg-white/10 rounded-xl shadow-lg backdrop-blur-md'>
        <div className='h-[15vw] w-full'>
          <img
            className='h-full w-full object-cover object-center rounded-md'
            src={data.image}
            alt={data.name}
          />
        </div>
        <h1 className='mt-5 text-xl font-semibold text-white'>{data.name}</h1>
        <p className='text-base mt-2 font-medium text-white/80 line-clamp-2'>{data.description}</p>
      </div>
    </Link>
  );
};

export default Card;
