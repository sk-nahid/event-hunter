import React, { use, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router';
import { ApiContext } from '../Context/Context';

const Register = () => {

    const { createUser,userData, setUserData } = use(ApiContext);

    //states
    

    const [error, setError]= useState('')
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        //password validation
        const validPassword = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$/;
        setError('')
        if (!validPassword.test(password)) {
            setError('use Upercase lowar case and a digit for validation')
            return
        }

        //register user
        createUser(email, password)
            .then(res => {
                console.log(res.user)
                setUserData(res.user)
            })
        .catch(error=> console.log(error))
        
            
        
        

        

        console.log(name, photo, email, password)
        
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleRegister} className="fieldset">
                                <label className="label text-lg">Name</label>
                                <input type="text" name='name' className="input" placeholder="Name" />
                                <label className="label text-lg">Photo URL</label>
                                <input type="text" name='photo' className="input" placeholder="photourl" />
                                <label className="label text-lg">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label text-lg">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
        
                                <button className="btn btn-primary mt-4">Sing Up</button>
                                <button className="btn text-white border-[#e5e5e5] btn-secondary shadow-md ">
                                    <FaGoogle></FaGoogle>
                                    Sing Up with Google
                                </button>
                        <div><p className="text-lg">Already have account <Link to="/register" className='text-secondary'>Login</Link></p></div>
                        <p className='text-lg text-red-500'>{ error&& `error: ${error}` }</p>
                            </form>
                        </div>
                    </div>
                </div>
    );
};

export default Register;