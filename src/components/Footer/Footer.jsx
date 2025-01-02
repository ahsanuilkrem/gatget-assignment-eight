import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {

  const location = useLocation().pathname
  const isActive = (path) => location.pathname === path;
    return (
        
        <div className={isActive ('/') ? "mt-10" : 'mt-60'}>

          <h2 className='text-center text-3xl font-bold'>Gadget Heaven</h2>
          <p className='text-center text-base font-medium'>Leading the way in cutting-edge technology and innovation.</p>
              <footer className="flex justify-around   p-10">
  <div className=''>
    <h6 className=" text-lg font-bold">Services</h6>
    <p className="link link-hover text-slate-400"> Product Support</p>
    <p className="link link-hover text-slate-400">Order Tracking</p>
    <p className="link link-hover text-slate-400" > Shipping & Delivery</p>
    <p className="link link-hover text-slate-400">Returns</p>
   



  </div>
  <nav>
    <h6 className="text-lg font-bold">Company</h6>
    <p className=" text-slate-400">About us</p>
    <p className="link link-hover text-slate-400">Contact</p>
    <p className="link link-hover text-slate-400">Careers</p>

  </nav>
  <nav>
    <h6 className="text-lg font-bold">Legal</h6>
    <p className="link link-hover text-slate-400">Terms of Service</p>
    <p className="link link-hover text-slate-400">Privacy policy</p>
    <p className="link link-hover text-slate-400">Cookie policy</p>

  </nav>
</footer>  
        </div>
    );
};

export default Footer;