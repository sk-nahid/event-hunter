import React, { use, useEffect, useState } from 'react';
import { ApiContext } from '../Context/Context';
import { useParams } from 'react-router';
import Loading from './Loading';

const EventDetails = () => {

    const [success,setSuccess]= useState(false)
    const { eventData, loading, setLoading } = use(ApiContext);
    const { id } = useParams()
    console.log(eventData, id)
    const singleData = eventData.find(data => data.id == id);
    if (loading) {
        return <Loading></Loading>
    }

    const { name, thumbnail, category, date, location, entry_fee, description } = singleData

    const handleReserve = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(name, email)
        if (name && email) {
            setSuccess(true)
        }

    }
    useEffect(() => {
       document.title = `${id} || event` ;
    },[])
console.log(success)
    return (
        <div className='lg:w-10/12 mx-auto md:grid grid-cols-12 gap-4 mt-8'>
            <div className='p-4 bg-yellow-100 col-span-8'>
                <div>
                    <img className='w-full h-[500px] object-cover' src={thumbnail} alt="" />
                </div>
                <div>
                    <h2 className='md:text-2xl text-xl font-bold my-4'>{name}</h2>
                    <p className='text-accent my-2'>{description}</p>
                    <p className='text-lg font-semibold'>Date: {date}</p>
                    <p className='text-lg font-semibold'>Location: {location}</p>
                    <p className='text-lg font-semibold'>Event On: {category}</p>
                    <p className='text-lg font-semibold text-secondary '>Reservation Fee: {entry_fee}</p>

                </div>

            </div>

            <div className="card bg-blue-100 w-full shrink-0 shadow-2xl col-span-4 ">
                <div className='md:w-full md:h-screen md:flex justify-center items-center'>

                
                    <div className="card-body  ">
                        <h1 className='text-2xl  p-4 rounded-2xl'>Resarve your seat for <span className='text-secondary'> {name}</span> event on <span className='text-secondary'>{ date}</span></h1>
                    <form onSubmit={handleReserve} className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Name" required />
                        <label className="label">Email</label>
                        <input type="email" className="input w-full" placeholder="Email" name='email' required/>
                
                            <button className="btn btn-primary mt-4">Confirm</button>
                            
                            <p className='text-green-600 text-lg font-semibold'>{ success&& "Your Reservation successful! we will contact for further information"}</p>
                    </form>
                </div>
                </div>
                </div>

        </div>
    );
};

export default EventDetails;