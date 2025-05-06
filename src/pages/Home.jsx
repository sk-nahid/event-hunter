import React from 'react';
import Slider from '../Components/Slider';
import Event from '../Components/Event';
import Feedback from '../Components/Feedback';
import AboutUs from '../Components/AboutUs';

const Home = () => {
    return (
        <div>
            <section>
            <Slider></Slider>
            </section>
            <section className=''>
                <Event></Event>
            </section>
            <section>
                <AboutUs></AboutUs>
            </section>
            <section>
                <Feedback></Feedback>
            </section>

        </div>
    );
};

export default Home;