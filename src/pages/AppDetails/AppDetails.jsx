import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import iconRating from '../../assets/icon-ratings.png'
import iconDownld from '../../assets/icon-downloads.png'
import reviewImg from '../../assets/icon-review.png'
import { Bar, CartesianGrid, ComposedChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ToastContainer, toast } from 'react-toastify';
import { setAppDataToLocal } from '../AddToDb';



const AppDetails = () => {
    
    const [disabled,setDisabled]=useState(false)
    


    

    const { id } = useParams()
    const convertedId = parseInt(id);
    const appData = useLoaderData();
    const singleAppData = appData.find(app => app.id === convertedId)
    const {image, title, description, size, companyName, downloads, ratingAvg, reviews, ratings } = singleAppData

 const handleInstalled=(id)=>{
        setDisabled(true)
        toast(`Congress !! ${title} Installed Successfully`)
        setAppDataToLocal(id)
        
    }
    return (
        <div className='pt-10 bg-[#d2d2d254] px-6 md:px-20'>
            <div className='flex flex-col items-center md:flex-row md:items-center  md:gap-10'>
                <img src={image} className="md:w-[350px] md:h-[290px] rounded-lg shadow-md" />
                <div className='w-full'>
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <p className="mt-2">{description}
                    </p>
                    <p className='mt-2'> Developed By : <span className='text-purple-600'>{companyName}</span></p>
                    <hr className='opacity-10 mt-4' />
                    <div className='flex items-center justify-center gap-4 md:gap-10 md:justify-start mt-4 '>
                        <div>
                            <img src={iconDownld} alt="" />
                            <p>Downloads</p>
                            <p className='text-3xl font-bold'>{downloads}</p>
                        </div>
                        <div>
                            <img src={iconRating} alt="" />
                            <p>Average Ratings</p>
                            <p className='text-3xl font-bold'>{ratingAvg}</p>
                        </div>
                        <div>
                            <img src={reviewImg} alt="" />
                            <p>Total Reviews</p>
                            <p className='text-3xl font-bold'>{reviews}</p>
                        </div>
                    </div>
                    <button disabled={disabled} onClick={()=>handleInstalled(singleAppData.id) }
                     className={`btn bg-[#00d390] text-white text-xl px-6 py-6 mt-4`}>{disabled?'installed':`Install Now (${size} MB`}</button><ToastContainer/>
                </div>


            </div>
            <hr className='opacity-10 pb-10' />
            <div className='mt-10 mx-auto'>
                <h1 className='text-2xl font-semibold text-center'>Ratings</h1>

                <div>
                  
                    <ComposedChart
                        layout="vertical"
                        width={1400}
                        height={400}
                        data={ratings}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis type="count" />
                        <YAxis dataKey="name" type="category" scale="band" />
                        <Tooltip />
                        <Legend />

                        <Bar className='w-[350px] md:w-[1400px] ' dataKey="count" fill="#ff8811" />

                    </ComposedChart>
                    


                </div>
            </div>
            <h1 className='text-2xl font-bold'>Description</h1>
            <p className='mt-4 opacity-65 pb-10'>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest. <br /><br />

A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere. <br /> <br />

For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>





        </div>
    );
};

export default AppDetails;