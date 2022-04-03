import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-green-300 p-4 flex justify-around'>
            <div>
                <Link to = '/home' className='text-gray-500 font-bold text-lg md:text-3xl font-serif'>BooK Forest</Link>
            </div>
            <nav className='navigation font-thin md: text-lg font-semibold'>
                <Link to = '/home'>Home</Link>
                <Link to = '/review'>Reviews</Link>
                <Link to = '/dashboard'>Dashboard</Link>
            </nav>
        </div>
    );
};

export default Header;