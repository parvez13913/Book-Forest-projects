import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-green-300 p-4 flex justify-between'>
            <div>
                <Link to = '/home' className='text-gray-500 font-bold text-lg md:text-3xl font-serif hover:text-orange-300'>BooK Forest</Link>
            </div>
            <nav className='navigation md: text-lg font-semibold'>
                <Link className='hover:text-orange-300' to = '/home'>Home</Link>
                <Link className='hover:text-orange-300' to = '/review'>Reviews</Link>
                <Link className='hover:text-orange-300' to = '/dashboard'>Dashboard</Link>
            </nav>
        </div>
    );
};

export default Header;