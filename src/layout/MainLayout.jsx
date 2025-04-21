import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <div className='min-h-[calc(100vh-116px)]'>
                <div className=''> <Outlet>
                </Outlet>
                </div>
           </div>
           
            
            <Footer></Footer>
        </>
    );
};

export default MainLayout;