import React from 'react';
import UseUsers from '../../hooks/UseUsers';
import Review from '../../Review/Review';

const Reviews = () => {
    const [users] = UseUsers([]);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-4'>
            {
                users.map(user => <Review
                    key={user.id}
                    user = {user}
                />)
            }
        </div>
    );
};

export default Reviews;