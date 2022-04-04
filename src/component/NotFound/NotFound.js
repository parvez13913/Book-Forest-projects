import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div className='md:mt-16 lg:mt-64 flex justify-center'>
                <div className='mx-auto'>
                    <h1 className='text-5xl text-red-400 font-serif mb-16'>404 Page Not Found</h1>
                    <Link to= '/home' className='text-lg bg-stone-400 px-16 py-4 rounded-lg hover:bg-orange-400 text-white'><button className='font-semibold'>Back Home</button></Link>
                </div>
            </div>

            <div className='flex justify-center mt-3'>
                <img src="images/not-found-page.jpg" alt="" />
            </div>
        </div>
    );
};

export default NotFound;