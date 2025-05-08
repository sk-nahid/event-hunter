import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { ApiContext } from '../Context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { loginUser, setUserData, googleSingUp } = use(ApiContext);
    const [clicked, setClicked] = useState(false)
    const [email, setEmail]= useState('')

    const location = useLocation();
    const navigate = useNavigate();
    
    const handleRegisterPage = () => {
        navigate("/register",{state:location.state})
    }
    const handleResetNavigate = () => {
        navigate(`/reset?email=${email}`)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        setEmail(email)
        const password = e.target.password.value;
        

        loginUser(email, password)
            .then(res => {
                
                setUserData(res.user)
                toast.success('Login Successful')
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch(error => {
                toast.error(error.message)
                
            })



    }
    const handleGoogleLogin = () => {

        googleSingUp()
            .then(res => {
                
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch(error => {
                toast.error(error.message)
                console.log(error)
            })
        

    }
    const handleClicked = () => {
        setClicked(!clicked)
    }
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label text-lg">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label text-lg">Password</label>
                        <div className='relative'>
                            <input type={clicked?"text":"password"} name='password' className="input z-0" placeholder="Password" />
                            
                            <p>{ clicked?<FaEyeSlash className='absolute top-2 right-6' size={20} onClick={handleClicked}></FaEyeSlash>: <FaEye className='absolute z-10 top-2 right-6' size={20} onClick={handleClicked}></FaEye>}</p>
                        </div>


                        <button className="btn btn-primary mt-4">Login</button>

                    </form>

                    <button onClick={handleGoogleLogin} className="btn text-white border-[#e5e5e5] btn-secondary shadow-md ">
                        <FaGoogle></FaGoogle>
                        Login with Google
                    </button>
                    <div><p className="text-lg">Forget your password? <a onClick={handleResetNavigate} className='text-secondary link'>Reset Password</a></p></div>
                    <div><p className="text-lg">Don't have account! <button onClick={handleRegisterPage} className='text-secondary link'>register</button></p></div>

                </div>
            </div>
            
        </div>
    );
};

export default Login;