import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-slate-300 p-4 flex justify-between'>
            <div>
                <Link to = '/home' className='text-gray-500 font-bold text-lg md:text-3xl font-serif hover:text-slate-900'>BooK Forest</Link>
            </div>
            <nav className='navigation md: text-lg font-semibold flex'>
                <CustomLink className='text-gray-600 hover:text-slate-900' to = '/home'>Home</CustomLink>
                <CustomLink className='text-gray-600 hover:text-slate-900' to = '/review'>Reviews</CustomLink>
                <CustomLink className='text-gray-600 hover:text-slate-900' to = '/dashboard'>Dashboard</CustomLink>
            </nav>
        </div>
    );
};

export default Header;