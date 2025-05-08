import React, { use } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import { ApiContext } from '../Context/Context';
import { Navigate, useSearchParams } from 'react-router';

const ResetPassword = () => {
    const { resetPassword } = use(ApiContext)
    const [searchParams] = useSearchParams();
    const email = searchParams.get("email")
    
    const handleReset = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        resetPassword(email)
            .then(() => {
                toast.success('Reset Email sent!! please check your mail')
                window.open("https://mail.google.com/", "_blank");


            })
            .catch(error => console.log(error))
    }
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-2xl font-semibold text-center'>Reset your password</h1>
                    <form onSubmit={handleReset} className="fieldset">
                        <label className="label text-lg">Email</label>
                        <input type="email" name='email' value={email} className="input" placeholder="Email" />
                        
                        


                        <button className="btn btn-primary mt-4">reset</button>

                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ResetPassword;