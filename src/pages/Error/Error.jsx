import React, { useEffect } from 'react';
import errorImg from '../../assets/error-404.png'
import { Link } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Error = () => {
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", "light");
      }, []);
    return (
       <div>
        <Navbar></Navbar>
         <div className='flex flex-col justify-center items-center pt-10 bg-[#d2d2d254] md:px-20'>
            <img src={errorImg} alt="" />
            <h1 className='text-5xl font-bold'>Oops, page not found!</h1>
            <p className='text-lg opacity-70 mt-5'>The page you are looking for is not available.</p>
            <Link to={'/'}><button className='btn px-8 mt-10 mb-10 bg-gradient-to-r from-purple-800 to-purple-600 text-white '>Go Back</button> </Link>
        </div>
        <Footer></Footer>
       </div>
    );
};

export default Error;