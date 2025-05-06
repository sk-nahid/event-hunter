import React from 'react';
import NavBar from '../Components/NavBar';
import Home from './Home';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div>
            <header>
                <NavBar></NavBar>
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