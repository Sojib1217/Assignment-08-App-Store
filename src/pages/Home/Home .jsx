import React from 'react';
import Banner from '../../components/Banner/Banner';
import TopApps from '../../components/TopApps/TopApps';
import { useLoaderData } from 'react-router';

const Home  = () => {
    const topApps=useLoaderData()
    
    return (
        <div className='bg-[#d2d2d254]'> 
            <Banner></Banner>
            <TopApps topApps={topApps}></TopApps>
        </div>
    );
};

export default Home ;