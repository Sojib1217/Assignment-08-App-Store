import React, { useEffect, useState, } from 'react';
import { useLoaderData } from 'react-router';
import { getAppFromLocalStore, removeApp } from '../AddToDb';
import InstalledApp from '../InstalledApp/InstalledApp';

import { ToastContainer, toast } from 'react-toastify';

const InstallPage = () => {
    const [installApp, setInstallApp] = useState([])
    const [sort,setSort]=useState('')
    const data = useLoaderData()
    useEffect(() => {
        const appId = getAppFromLocalStore()
        const convertedId = appId.map(app => parseInt(app))
        const filteredApp = data.filter(app => convertedId.includes(app.id))
        setInstallApp(filteredApp)

    }, [data])


    const handleRemove=(id)=>{
    toast('App Uninstall Successfully')
    const remainingApp=installApp.filter(app=>app.id !==id)
    setInstallApp(remainingApp)
    removeApp(id)
}

    const handleSort=(type)=>{
    setSort(type)
    if(type ==='High-Low'){
        const sortHtoL=[...installApp].sort((a,b)=>b.size - a.size)
        setInstallApp(sortHtoL)
    }
    if(type ==='Low-High'){
        const sortLtoH=[...installApp].sort((a,b)=>a.size - b.size)
        setInstallApp(sortLtoH)
        sort

    }
    }

    return (
        <div className='bg-[#d2d2d254]'>
            <div className='text-center pt-20'>
                <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
                <p className='text-xl opacity-60 mt-3 '>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between items-center mt-10 md:px-24'>
                <h1 className='text-2xl font-bold '>{installApp.length} App Found</h1>

                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By Size ⬇️</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={()=>handleSort('High-Low')}>High-Low</a></li>
                        <li><a onClick={()=>handleSort('Low-High')}>Low-High</a></li>
                    </ul>
                </div>
            </div>
            <div className='mt-6 md:px-24 pb-10'>
                {
                    installApp.map(app => <InstalledApp key={app.id} handleRemove={handleRemove} app={app}></InstalledApp>)
                }
            </div>
            <ToastContainer/>
        </div>
    );
};

export default InstallPage;