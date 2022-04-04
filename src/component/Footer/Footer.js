import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='text-center bg-slate-900 p-12 mb-3 mt-8 grid grid-cols-1 md:mt-3 lg:mt-2'>
            <h1 className='text-4xl text-slate-300 font-serif'>Foolish Developer</h1>
            <div className='footer flex justify-center'>
                  <img src="images/Developer-photo.jpg" alt="developerPhoto" />
            </div>
            <h1 className='text-xl text-slate-300 font-serif font-medium mt-4'>Contuct Us: parvezz13913@gmail.com</h1>
        </div>
    );
};

export default Footer;