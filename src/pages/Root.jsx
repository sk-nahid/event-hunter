import React from 'react';
import NavBar from '../Components/NavBar';
import Home from './Home';
import Footer from '../Components/Footer';
import { NavLink, Outlet } from 'react-router';

const Root = () => {

    const navLinks = <>
    <NavLink to="/" className="text-lg font-semibold mx-2"><li>Home</li></NavLink>
    <NavLink to="/profile" className="text-lg font-semibold mx-2"><li>Profile</li></NavLink>
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