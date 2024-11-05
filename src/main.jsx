import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root';
import Home from './Pages/HomeElements/Home/Home';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import About from './Pages/HomeElements/About/About';
import Client from './Pages/HomeElements/Client/Client';
import Testimonial from './Pages/HomeElements/Testimonial/Testimonial';
import Slider from './Pages/HomeElements/Slider/Slider';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/clients',
        element: <Client></Client>
      },
      {
        path: "/contract",
        element: <Testimonial></Testimonial>
      },
      {
        path: '/portfolio',
        element: <Slider></Slider>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
