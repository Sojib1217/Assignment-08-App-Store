import { createBrowserRouter } from 'react-router'
import Root from '../pages/Root/Root'
import Home from '../pages/Home/Home '
import Apps from '../pages/Apps/Apps'
import Banner from '../components/Banner/Banner'
import AppDetails from '../pages/AppDetails/AppDetails'
import Error from '../pages/Error/Error'
import InstallPage from '../pages/InstallPage/InstallPage'

export const router=createBrowserRouter([
  {
    path:'/',
    errorElement:<Error></Error>,
    Component:Root,
    children:[
        {
            path:'/',
            
            loader:()=>fetch('/apps.json'),
            Component:Home
        },
       
        {
            path:'/apps',
            
            loader:()=>fetch('/apps.json'),
            Component:Apps
        },
        {
          path:'/details/:id',
          loader:()=>fetch('/apps.json'),
          Component:AppDetails
        },
        {
          path:'/installation',
          loader:()=>fetch('/apps.json'),
          Component:InstallPage
        }
    ]
  }
])