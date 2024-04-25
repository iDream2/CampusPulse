import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Navbar from './pages/Navbar'

import NotFound from './pages/NotFound'

import Login from './pages/Login'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from "./pages/Contact"

import Register from "./pages/Register"
import Post from './pages/Post'
const router = createBrowserRouter(
  [
    {path : "/",
     element : <Navbar />,
     errorElement : <NotFound />,
     children : [
        
                    { path : "/Login",
                      element : <Login/>,
                      errorElement : <NotFound/>
                      
                    },
                    {
                      path : "/AboutUs",
                      element : <AboutUs />,
                      
                    },
                    {
                      path : "/Home",
                      element : <Home/>,
                      
                    },
                    {
                      path: "/Contact",
                      element : <Contact/>
                      
                    },
                    { 
                      path : "/Login/Register",
                      element : <Register />

                    },
                     {
                       path: "/Login/Post",
                       element: <Post />
                     },
                     {
                      path : "/Register/Post",
                      element: <Post />
                     }
                    
                ]
    },

    
    
    // 

  ]
)


//First component that will be static through out the webpage would be Navbar. All other components will be dynamic, so other all other components need to be added to the children part.



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router = {router} /> 
    {/* <Helloworld /> */}
  </React.StrictMode>,
)
