import React from 'react';
import NavBar from '../Components/NavBar';
import Home from './Home';
import Footer from '../Components/Footer';
import { NavLink } from 'react-router';

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
                <Home></Home>
            </main>
            <footer>
                <Footer></Footer>
            </footer>


        </div>
    );
};

export default Root;