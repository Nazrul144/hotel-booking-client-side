import React from 'react';
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar';
const Root = () => {
    return (
        <div>
            <div className='w-10/12 container mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;