import React, { use, useEffect } from 'react';
import Slider from '../Components/Slider';
import Event from '../Components/Event';
import Feedback from '../Components/Feedback';
import AboutUs from '../Components/AboutUs';
import { ApiContext } from '../Context/Context';
import Loading from '../Components/Loading';

const Home = () => {
    const { loading } = use(ApiContext)
    


    useEffect(() => {
       document.title= "Home || Event Hunter BD" 
    }, [])
    
    if (loading) {
        return <Loading></Loading>
    }
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