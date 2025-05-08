import React, { createContext, use, useEffect, useState } from 'react';
import { data } from 'react-router';
import EventCard from './EventCard';
import { ApiContext } from '../Context/Context';



const Event = () => {
    
    const {eventData}= use(ApiContext)

    
    return (
        <div className='lg:w-10/12 md:px-12 px-4 mx-auto my-8'>
            <div className='my-12'>
            <h1 className='md:text-4xl text-2xl font-bold text-center my-2'>Our Up Coming Event</h1>
            <p className='text-center text-lg mb-4'>These event can change your life</p>
            </div>
            
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 gap-12'>
                {
                    eventData.map(event => <EventCard key={event.id} event={event}></EventCard>)
                }
            </div>
        </div>
    );
};

export default Event;