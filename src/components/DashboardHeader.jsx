import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardHeader = () => {
    return (
        <div className='text-center space-y-7   mt-7 text-white'>
            <h2 className='text-white text-3xl font-bold'>Dashboard</h2>
            <p className='text-base font-normal'>Explore the latest gadgets that will take your experience to the next level.
                From smart devices to the coolest accessories, we have it all!</p>
            <div className='flex justify-center items-center  gap-5'>
                <NavLink to='carts'>
                    <button className=' btn rounded-full px-16  text-lg font-bold'>Cart</button>
                </NavLink>
                <NavLink to='wishlist'>
                    <button className=' btn rounded-full px-16 text-lg font-semibold'>Wishlist</button>
                </NavLink>


            </div>
            </div>
            );
};

            export default DashboardHeader;