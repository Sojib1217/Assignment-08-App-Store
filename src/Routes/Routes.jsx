import { createBrowserRouter } from 'react-router'
import Root from '../pages/Root/Root'
import Home from '../pages/Home/Home '
import Apps from '../pages/Apps/Apps'
import Banner from '../components/Banner/Banner'

export const router=createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
        {
            path:'/',
            loader:()=>fetch('/apps.json'),
            Component:Home
        },
       
        {
            path:'/apps',
            Component:Apps
        }
    ]
  }
])