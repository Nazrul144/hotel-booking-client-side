import React from 'react';
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Root = () => {
    return (
        <div>
            <div className='w-10/12 container mx-auto bg-gradient-to-r from-indigo-200 cyan-500 via-purple-200 to-pink-200'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;