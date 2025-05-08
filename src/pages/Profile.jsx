import React, { use, useEffect } from 'react';
import { ApiContext } from '../Context/Context';
import Loading from '../Components/Loading';
import { Link, Navigate, useLocation } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const Profile = () => {
    const { userData, loading, updateUser, setUserData } = use(ApiContext);
    
    const location= useLocation()
    

    if (loading) {
        return <Loading></Loading>
    }
    if (!userData) {
       return <Navigate state={location.pathname} to="/login"></Navigate>
    }

    const handleUpdate = (e) => {
        // e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        updateUser({ displayName: name, photoURL: photo })
            .then(() => {
                
                
            })
            .catch(error => {
                console.log(error)
                toast.error(error.message)
                
            })


    }
    useEffect(() => {
           document.title = `${userData.displayName}'s profile` ;
        },[])

    return (
        <div className='w-10/12 mx-auto md:grid grid-cols-2'>
            <div className='text-center my-8 border-b-2 pb-4 md:border-b-0 md:border-r-2'>
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
                            <input type="text" name='name' className="input" placeholder="Name" required />
                            <label className="label text-lg">Photo URL</label>
                            <input type="text" name='photo' className="input" placeholder="photourl" required />
                            <button className="btn btn-primary mt-4">Update</button>
                        </form>



                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default Profile;