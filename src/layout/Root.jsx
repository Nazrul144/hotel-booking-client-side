import React from 'react';
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Root = () => {
    return (
        <div>
            <div className='w-10/12 container mx-auto bg-sky-100'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;