import React, { use } from 'react';
import NavBar from '../Components/NavBar';
import Home from './Home';
import Footer from '../Components/Footer';
import { NavLink, Outlet } from 'react-router';
import { ApiContext } from '../Context/Context';

const Root = () => {
    const { userData } = use(ApiContext);

    const navLinks = <>
        <NavLink to="/" className="text-lg font-semibold mx-2"><li>Home</li></NavLink>
        <NavLink to="/profile" className="text-lg font-semibold mx-2"><li>Profile</li></NavLink>
    {userData&&<NavLink to="/about" className="text-lg font-semibold mx-2"><li>About us</li></NavLink>}
        
    </>

    return (
        <div>
            <header>
                <NavBar navLinks={navLinks}></NavBar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer navLinks={navLinks}></Footer>
            </footer>


        </div>
    );
};

export default Root;