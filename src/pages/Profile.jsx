import React, { use } from 'react';
import { ApiContext } from '../Context/Context';
import Loading from '../Components/Loading';
import { Link } from 'react-router';

const Profile = () => {
    const { userData, loading } = use(ApiContext);

    if (loading) {
        return <Loading></Loading>
    }

    const handleUpdate = () => {
        
    }

    return (
        <div className='w-10/12 mx-auto grid grid-cols-2'>
            <div className='text-center my-8 border-r-2'>
                <div className='my-12 '>
                    <h1 className='md:text-4xl text-2xl font-bold text-center my-2'>My Profile</h1>

                </div >

                <img className='w-[200px] mx-auto' src={`${userData.photoURL}`} alt="" />
                <h1 className='text-3xl font-bold mt-4'>Name: <span className='text-secondary'>{userData.displayName}</span></h1>
                <h1 className='text-3xl font-bold '>Email: <span className='text-secondary'>{userData.email}</span></h1>
            </div>
            <div>
                <div className='my-12 '>
                    <h1 className='md:text-4xl text-2xl font-bold text-center my-2'>Update Profile</h1>

                </div >
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <div className="card-body">
                    <form onSubmit={handleUpdate} className="fieldset">
                        <label className="label text-lg">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" />
                        <label className="label text-lg">Photo URL</label>
                        <input type="text" name='photo' className="input" placeholder="photourl" />
                        <button className="btn btn-primary mt-4">Update</button>
                    </form>
                    
                   
                    
                </div>
            </div>

            </div>
        </div>
    );
};

export default Profile;