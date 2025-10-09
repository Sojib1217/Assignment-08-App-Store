import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { CiSearch } from "react-icons/ci";
import AllApps from '../AllApps/AllApps';
import LoaderSpinner from '../LoaderSpinner';
const Apps = () => {

    const appsData = useLoaderData()
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)
    const [filteredApp, setFilteredApp] = useState(appsData)
    useEffect(() => {
        setLoading(true);
        const timeOut = setTimeout(() => {
            if (search.trim === '') {
                setFilteredApp(appsData)
            }
            else {
                const result = appsData.filter(app => app.title.toLowerCase().includes(search.toLowerCase()));
                setFilteredApp(result);
            }
            setLoading(false)
        }, 400);
        return () => clearTimeout(timeOut)
    }, [search, appsData])




    return (
        <div className='pt-10 bg-[#d2d2d254] pb-10'>
            <h1 className='text-3xl font-bold text-center'>Our All Applications</h1>
            <p className='mt-4 text-lg opacity-60 text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between mx-20 mt-10'>
                <h1 className='text-2xl font-bold'>({appsData.length}) Apps Found</h1>
                <div className='relative w-[350px]'>
                    <CiSearch className='absolute top-4 left-3' />
                    <input className='px-8 py-3 w-full border rounded-xl' value={search} onChange={(e) => setSearch(e.target.value)} type="search" name="" placeholder='search Apps' />

                </div>
            </div>
            {loading ? (<LoaderSpinner />) :
                filteredApp.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-20">
                        {filteredApp.map(app => <AllApps key={app.id} app={app}></AllApps>)}
                    </div>
                ) : (
                    <div className='text-center my-32'>
                        <p className="text-center text-5xl text-gray-500 ">No apps found</p>
                        <button onClick={() => setSearch('')} className='btn px-8 mt-10 mb-10 bg-gradient-to-r from-purple-800 to-purple-600 text-white '>Show All</button>
                    </div>

                )}

        </div>
    );
};

export default Apps;

