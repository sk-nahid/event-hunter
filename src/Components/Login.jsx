import React, { use } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { ApiContext } from '../Context/Context';

const Login = () => {

    const { loginUser, setUserData,googleSingUp } = use(ApiContext)

    const location = useLocation();
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        loginUser(email, password)
            .then(res => {
                console.log(res.user)
                setUserData(res.user)
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch(error => console.log(error))



    }
    const handleGoogleLogin = () => {

        googleSingUp()
            .then(res => {
                console.log(res.user)
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch(error => console.log(error))
        console.log(auth, provider)

    }
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label text-lg">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label text-lg">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />

                        <button className="btn btn-primary mt-4">Login</button>

                    </form>
                    <button onClick={handleGoogleLogin} className="btn text-white border-[#e5e5e5] btn-secondary shadow-md ">
                        <FaGoogle></FaGoogle>
                        Login with Google
                    </button>
                    <div><p className="text-lg">Don't have account! <Link to="/register" className='text-secondary'>register</Link></p></div>
                </div>
            </div>
        </div>
    );
};

export default Login;