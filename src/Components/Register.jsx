import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { ApiContext } from '../Context/Context';
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [clicked, setClicked] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)

    const { createUser, setUserData, updateUser, googleSingUp } = use(ApiContext);

    const provider = new GoogleAuthProvider()

    //states


    const [error, setError] = useState('')
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
            toast.error("Password error: please use minimum a uppercase , lowercase, and a digit for password validation")
            return
        }

        //register user
        createUser(email, password)
            .then(res => {
                
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        console.log(res)
                        
                        setUserData({ ...res.user, displayName: name, photoURL: photo })
                    })
                    .catch(error => {
                        console.log(error)
                        toast.error(error.message)
                        setUserData(res.user)
                    })
                navigate(`${location.state ? location.state : "/"}`)
                console.log(res.user)
                setUserData(res.user)
            })
            .catch(error => {
                toast.error(error.message)
                console.log(error)
            })
        console.log(name, photo, email, password)

    }
    const handleGoogleSingUp = () => {
        googleSingUp()
            .then(res => {
                navigate(`${location.state ? location.state : "/"}`)
                console.log(res.user)
            })
            .catch(error => {
                toast.error(error.message)
                console.log(error)
            })
        console.log(auth, provider)
    }
    const handleClicked = () => {
        setClicked(!clicked)
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
                        <div className='relative'>
                            <input type={clicked ? "text" : "password"} name='password' className="input z-0" placeholder="Password" />

                            <p>{clicked ? <FaEyeSlash className='absolute top-2 right-6' size={20} onClick={handleClicked}></FaEyeSlash> : <FaEye className='absolute z-10 top-2 right-6' size={20} onClick={handleClicked}></FaEye>}</p>
                        </div>

                        <button className="btn btn-primary mt-4">Sing Up</button>
                    </form>
                    <button onClick={handleGoogleSingUp} className="btn text-white border-[#e5e5e5] btn-secondary shadow-md ">
                        <FaGoogle></FaGoogle>
                        Sing Up with Google
                    </button>
                    <div><p className="text-lg">Already have account <Link to="/login" className='text-secondary'>Login</Link></p></div>
                    <p className='text-lg text-red-500'>{error && `error: ${error}`}</p>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;