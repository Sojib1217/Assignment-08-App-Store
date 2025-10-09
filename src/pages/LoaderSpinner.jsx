import React from "react";
import loadingImg from '../assets/logo.png'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
const LoaderSpinner = () => {
  return (
    <div>
     
      <div className="fixed inset-0 flex items-center justify-center gap-5 bg-white bg-opacity-70 z-50">
      <div className=" w-[150px] border-t-transparent rounded-full animate-spin">
        <img src={loadingImg} alt="" />
        </div>
        <span className="text-5xl font-bold">Loading...</span>
    </div>
    
    </div>
  );
};

export default LoaderSpinner;
