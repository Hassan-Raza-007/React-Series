import React from 'react'
import { createBrowserRouter, RouterProvider, Route, Link, createRoutesFromElements, } from "react-router-dom";
import Layout from '../components/Layout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Users from '../pages/Users/Users';
import Github from '../pages/Github/Github';


const Router_app = () => {

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<Layout />}>

            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact'  element={<Contact />} />
            <Route path='users'  element={<Users />} />
            <Route path='users/:id' element={<Users />} />
            <Route path='github' element={<Github />} />

        </Route>
    ))
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default Router_app