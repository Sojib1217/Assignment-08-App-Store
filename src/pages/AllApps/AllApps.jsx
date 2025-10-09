import React from 'react';
import iconRating from '../../assets/icon-ratings.png'
import iconDownld from '../../assets/icon-downloads.png'
import { Link } from 'react-router';

const AllApps = ({app}) => {
    const {id,title,description,image,downloads,ratingAvg}=app
    return (
       <Link to={`/details/${id}`}>
        <div className='bg-white mt-10 shadow p-4 rounded-xl  hover:scale-103 transition'>
                   <div className='flex flex-col justify-center items-center'>
                       <img className='w-[320px] h-[320px] rounded-2xl' src={image} alt="" />
                   <h4 className='text-xl font-semibold mt-2'>{title}</h4>
                   <p className='text-center mt-2'>{description}</p>
                   </div>
                   <div className='flex justify-between items-center mt-2'>
                       <button className='btn text-green-600'><img className='w-4' src={iconDownld} alt="" /> {downloads}</button>
                        <button className='btn text-amber-600'><img className='w-4' src={iconRating} alt="" /> {ratingAvg}</button>
                   </div>
                   
               </div></Link>
    );
};

export default AllApps;