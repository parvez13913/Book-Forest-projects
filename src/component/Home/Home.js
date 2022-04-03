import React from 'react';
import { Link } from 'react-router-dom';
import UseUsers from '../../hooks/UseUsers';
import HomeUser from '../HomeUser/HomeUser';
import './Home.css';
const Home = () => {
    const [users] = UseUsers([]);
    const homeUsers = users.slice(0,3)
    return (
        <div>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
                <div className='lg:mt-64 mt-6 home-info order-2 md:order-1'>
                    <h1 className='text-4xl font-semibold mb-3 text-gray-600'>THe Miracle Morning</h1>
                    <p>Hal Elrod is a genius and his book The Miracle Morning has been magical in my life. What Hal has done is taken the
                     'best practices'-developed over centuries of human consciousness development-and condensed the 'best of the best; into a daily morning ritual. A ritual that is now part of my day.</p>
                    <div className='mt-8'>
                       <Link className='bg-slate-700 rounded-lg px-6 py-4 hover:bg-orange-400 font-semibold text-white' to= '/review'>
                         <button>Reviews</button>
                       </Link>
                    </div>
                </div>
                <div className='banner-container order-1 md:order-2 flex justify-center'>
                   <img src="images/the miracle morning.jpg" alt="bookPhoto" />
                </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-4'>
                    {
                        homeUsers.map(homeUser => <HomeUser
                            key={homeUser.id}
                            homeUser={homeUser}
                        />)
                    }
                </div>
                <div className='flex justify-center'>
                    <Link className='px-32 py-3 bg-slate-700 font-semibold text-white hover:bg-orange-400 mb-4 rounded-lg' to = '/review'><button>See All Reviews</button></Link>
                </div>
        </div>
    );
};

export default Home;