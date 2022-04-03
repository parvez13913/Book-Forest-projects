import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-slate-300 p-4 flex justify-between'>
            <div>
                <Link to = '/home' className='text-gray-500 font-bold text-lg md:text-3xl font-serif hover:text-slate-900'>BooK Forest</Link>
            </div>
            <nav className='navigation md: text-lg font-semibold'>
                <Link className='text-gray-600 hover:text-slate-900' to = '/home'>Home</Link>
                <Link className='text-gray-600 hover:text-slate-900' to = '/review'>Reviews</Link>
                <Link className='text-gray-600 hover:text-slate-900' to = '/dashboard'>Dashboard</Link>
            </nav>
        </div>
    );
};

export default Header;