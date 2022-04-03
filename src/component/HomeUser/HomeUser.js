import React from 'react';

const HomeUser = ({homeUser}) => {
    const {name,picture,email,reviews,ratings} = homeUser;
    return (
        <div className='m-4 border-2 rounded-xl shadow-2xl  p-3'>
            <div className='user-image flex justify-center'>
                <img src={picture} alt="UserPhoto" />
            </div>
            <div className='text-center'>
                <h1 className='text-3xl font-serif font-semibold'>{name}</h1>
                <p>Email: {email}</p>
                <p>{reviews}</p>
                <h6 className='text-lg font-medium'>Ratings: {ratings}</h6>
            </div>
        </div>
    );
};

export default HomeUser;