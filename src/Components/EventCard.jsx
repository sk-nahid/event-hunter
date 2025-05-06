import React from 'react';
import { Link } from 'react-router';

const EventCard = ({ event }) => {
    
    const {id,name,thumbnail,category,date,location,entry_fee}=event
    return (
        <div className='md:p-8 p-2 bg-blue-100 rounded-md'>
            <div>
                <img className='w-full h-[200px] object-cover rounded-t-md' src={thumbnail} alt="" />
            </div>
            <div className='flex flex-col-reverse md:flex-row justify-between mt-1 gap-2 '>
                <p className='btn btn-primary btn-sm  text-white md:rounded-r-4xl'>Date: {date}</p>
                <p className=' btn btn-secondary btn-sm text-white md:rounded-l-4xl'>{ category}</p>
            </div>
            <div className='my-4'>
                <h3 className='md:text-2xl text-xl font-bold'>{name}</h3>
                <p className='text-lg font-semibold my-2'>Location: {location}</p>
                <p className='text-lg'>Entry Fee: <span className='text-secondary font-semibold'>{ entry_fee} Taka only</span> </p>
            </div>
            <div>
                <Link to={`/event-details/${id}`} className='btn btn-secondary w-full'>View More</Link >
            </div>
        </div>
    );
};

export default EventCard;