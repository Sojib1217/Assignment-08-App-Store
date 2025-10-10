import React from 'react';
import TopApp from '../../pages/TopApp/TopApp';
import { Link } from 'react-router';

const TopApps = ({topApps}) => {
    return (
        <div className='mt-10  mx-10 '>
            <h1 className='text-4xl text-center font-bold'>Trending Apps</h1>
            <p className='opacity-70 mt-4 text-center'>Explore All Trending Apps on the Market developed by us</p>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                {
                    topApps.slice(0,8).map(app=><TopApp key={app.id} app={app}></TopApp>)
                }
              </div>
              <div className='text-center'>
                <Link to={'/apps'}><button className='btn px-8 mt-10 mb-10 bg-gradient-to-r from-purple-800 to-purple-600 text-white hover:scale-110 transition'>Show All</button> </Link>
              </div>
        </div>
    );
};

export default TopApps;