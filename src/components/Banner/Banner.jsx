import React from 'react';
import gImg from '../../assets/google-play.png'
import appImg from '../../assets/app-store.png'
import bannerImg from '../../assets/hero.png'


const Banner = () => {
    return (
        <div className='text-center pt-20'>
            <h1 className='text-6xl font-bold'>We Build <br />
                <span className='bg-gradient-to-r from-purple-700 to-purple-500 inline-block text-transparent bg-clip-text'>Productive</span> Apps</h1>
            <p className='text-lg p-4 w-full md:w-2/3 mx-auto mt-4 opacity-60'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex gap-6 justify-center items-center mt-4'>
              <a href="https://play.google.com/store/games?device=windows">  <button className='btn font-bold'><img className='w-5' src={gImg} alt="" /> Google Play</button></a>
                <a href='https://www.apple.com/app-store/'><button className='btn font-bold '><img className='w-5' src={appImg} alt="" /> App Store</button></a>
            </div>

            <div className='mt-10 '>
                < img className='md:w-[600px] mx-auto' src={bannerImg} alt="" />
                <div className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white '>
                    <h1 className='text-4xl font-bold pt-20'>Trusted by Millions, Built for You</h1>
                    <div className='flex flex-col gap-8 md:flex-row justify-center md:gap-[200px] pb-20 mt-10'>
                        <div>
                            <p>Total Downloads</p>
                            <h1 className='text-5xl font-bold mt-4 mb-4'>29.6M</h1>
                            <p>21% more than last month</p>
                        </div>
                        <div>
                            <p>Total Reviews</p>
                            <h1 className='text-5xl font-bold mt-4 mb-4'>906K</h1>
                            <p>46% more than last month</p>
                        </div>
                        <div>
                            <p>Active Apps</p>
                            <h1 className='text-5xl font-bold mt-4 mb-4'>132+</h1>
                            <p>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;