import { createBrowserRouter } from 'react-router'
import Root from '../pages/Root/Root'
import Home from '../pages/Home/Home '
import Apps from '../pages/Apps/Apps'

export const router=createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
        {
            path:'/',
            Component:Home
        },
        {
            path:'/apps',
            Component:Apps
        }
    ]
  }
])