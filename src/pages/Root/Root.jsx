import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/Footer/Footer';
import LoaderSpinner from '../LoaderSpinner';

const Root = () => {
useEffect(()=>{
    document.documentElement.setAttribute('data-theme','light')
},[])
const navigation=useNavigation()

    return (
        <div>
           <Navbar></Navbar>
                 {navigation.state === "loading" && <LoaderSpinner />}

           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;