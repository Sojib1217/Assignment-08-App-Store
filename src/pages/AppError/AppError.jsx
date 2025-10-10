import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router';
import appErrorImg from '../../assets/App-Error.png'

const AppError = () => {
    useEffect(() => {
            document.documentElement.setAttribute("data-theme", "light");
          }, []);
    return (
        <div>
        <Navbar></Navbar>
         <div className='flex flex-col justify-center items-center pt-10 bg-[#d2d2d254] md:px-20'>
            <img src={appErrorImg} alt="" />
            <h1 className='text-5xl font-bold'>OPPS!! APP NOT FOUND</h1>
            <p className='text-lg opacity-70 mt-5'>The App you are requesting is not found on our system.  please try another apps</p>
            <Link to={'/'}><button className='btn px-8 mt-10 mb-10 bg-gradient-to-r from-purple-800 to-purple-600 text-white '>Go Back</button> </Link>
        </div>
        <Footer></Footer>
       </div>)
};

export default AppError;