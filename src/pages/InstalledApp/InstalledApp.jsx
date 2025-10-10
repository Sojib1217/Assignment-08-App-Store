import React from 'react';
import iconRating from '../../assets/icon-ratings.png'
import iconDownld from '../../assets/icon-downloads.png'





const InstalledApp = ({app,handleRemove}) => {

    const {title,image,ratingAvg,downloads,size,id}=app
    return (
        <div className='flex justify-between items-center bg-white mt-6 p-4 rounded-2xl'>
           <div className='flex gap-4 items-center'>
             <img className='w-20 h-20' src={image} alt="" />
             <div>
                <h1 className='text-xl font-bold'>{title}</h1>
                <div className='flex items-center gap-4 mt-2'>
                    <p className='text-[#00d390] flex items-center'><img className='w-4 h-4 mr-1' src={iconDownld} alt="" /> {downloads}</p>
                    <p className='text-[#ff8811] flex items-center'><img className='w-4 h-4 mr-1' src={iconRating} alt="" /> {ratingAvg}</p>
                    <p className='opacity-70'>{size} MB</p> 
                </div>

             </div>
           </div>
           <button onClick={()=>handleRemove(id)} className='btn bg-[#00d390] text-white font-semibold'>Uninstall</button>

        </div>
    );
};

export default InstalledApp;