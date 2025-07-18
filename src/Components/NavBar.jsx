import React, { use } from 'react';
import { Link, Links } from 'react-router';
import { ApiContext } from '../Context/Context';

const NavBar = ({ navLinks }) => {
    const { userData, logOutUser } = use(ApiContext)

    const handleLogOut = () => {
        logOutUser()
            .then((res) => {
                
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar lg:w-10/12 md:px-12 px-4 mx-auto ">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className="link w-[180px]"><img src="https://i.ibb.co.com/ZpXn2gTb/logobig.png" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    
                    
                    {
                        userData?.photoURL&&<div className="tooltip tooltip-left" data-tip={userData.displayName}><img className="md:w-[80px] w-[50px] md:h-[80px] h-[50px] object-cover object-center rounded-full mx-4" src={`${userData.photoURL}`} alt="" /> </div>
                    }
                    {
                        userData ? <Link onClick={handleLogOut} className="btn btn-primary">Logout</Link> : <Link to="/login" className="btn btn-primary">login</Link>
                    }

                </div>
            </div>
        </div>

    );
};

export default NavBar;