import React, { use, useEffect } from 'react';
import { ApiContext } from '../Context/Context';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';

const AboutUsPage = () => {

    const { userData,loading } = use(ApiContext);

    const location = useLocation()
    if (loading) {
    return <Loading></Loading>
}
    if (!userData) {
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }
    useEffect(() => {
        document.title= "About US || event hunter bd"
    },[])

    return (
        <div className='lg:w-10/12 md:px-12 px-4 mx-auto '>
            <div className='my-12'>
                <h1 className='md:text-4xl text-2xl font-bold text-center my-2'>About Us</h1>
                <p className='text-center text-lg mb-4'>We are working for a skilled generation </p>
            </div>
            <section className="grid  items-center gap-6 p-6 bg-gray-100 rounded-xl">
                <img src={'https://i.ibb.co.com/PGh3JbKB/photo-1582213782179-e0d53f98f2ca.jpg'} alt="About us" className="w-full rounded-lg h-[500px] object-cover" />
                <div>
                    <p className="text-gray-700 mb-4">
                        Welcome to our community! We are a passionate group of creators, thinkers, and organizers committed to bringing people together through meaningful events and experiences. Our mission is to create a platform where individuals from diverse backgrounds can connect, learn, and grow — whether through local gatherings, educational workshops, or creative festivals. At the heart of everything we do is a belief in the power of shared experience and human connection.

                        What began as a small group of volunteers with a vision for impactful events has grown into a thriving initiative that hosts multiple programs throughout the year. We specialize in organizing cultural celebrations, career development events, community meetups, and skill-building sessions that cater to a wide range of audiences. Whether you're here to find inspiration, build your network, or simply enjoy a fun and engaging event, we are here to make it memorable and rewarding.

                        We believe in inclusivity, creativity, and continuous learning. That’s why every event we plan is designed with the participant in mind. From our seamless registration experience to the warm, welcoming atmosphere you’ll find at every session, we go the extra mile to make sure you feel like part of something special. Our team consists of experienced event managers, designers, volunteers, and tech enthusiasts who work behind the scenes to bring each idea to life. We pay close attention to every detail — from the content and flow of sessions to the comfort and safety of all attendees.


                    </p>

                </div>
            </section>
            <div className='md:grid grid-cols-2  gap-4 p-8'>
                <img src={"https://i.ibb.co.com/jPpVZJXS/alex-shute-e-Vh-Vt7-Yc-Mf-M-unsplash.jpg"} alt="" />

                <div>
                    <h4 className='text-2xl font-semibold my-2'>Our mission</h4>
                    <p className='text-lg'>Our mission is to create meaningful, lasting connections by organizing events and building platforms that inspire engagement, growth, and collaboration. We believe that every person deserves a place where their voice is heard, their story is valued, and their potential is nurtured. In an increasingly digital and disconnected world, we aim to be the bridge — bringing individuals, communities, and organizations together through shared experiences and purposeful interactions. Whether it’s an educational workshop, a cultural celebration, or a professional conference, our events are designed to ignite curiosity, build confidence, and strengthen communities. We also strive to use technology and innovation not just to reach people, but to empower them — giving them tools, spaces, and opportunities to connect meaningfully. Our mission is not just about hosting events, but about creating moments that matter, stories that stay with you, and communities that grow stronger over time.</p>
                </div>

            </div>
            <div className='md:grid grid-cols-2   gap-4 p-8'>
                <img className='md:order-2' src={"https://i.ibb.co.com/WWjYhwG7/paul-skorupskas-7-KLa-x-Lb-SXA-unsplash.jpg"} alt="" />

                <div className=''>
                    <h4 className='text-2xl font-semibold my-2'>Our Vision</h4>
                    <p className='text-lg'>We envision a future where communities across the globe are connected, empowered, and thriving through shared experiences and inclusive platforms. Our vision is to build a world where distance, background, and status are no longer barriers to collaboration, innovation, and collective growth. We want to create environments where people feel seen, supported, and inspired — spaces where ideas turn into actions, and actions into lasting impact. In this future, technology serves as a unifier, not a divider; diversity is celebrated, not tolerated; and opportunity is distributed widely, not reserved for a few. We aim to be a catalyst for this transformation by being more than just a service provider — we want to be a trusted partner in every stage of your journey, whether you are starting a new project, joining a community, or seeking inspiration. Our vision is grounded in hope, driven by purpose, and powered by the belief that we are stronger together.</p>
                </div>
            </div>
            <div className='md:grid grid-cols-2   gap-4 p-8'>
                <img src={"https://i.ibb.co.com/sdkXh41X/braden-collum-9-HI8-UJMSd-ZA-unsplash.jpg"} alt="" />
                <div className=''>
                    <h4 className='text-2xl font-semibold my-2'>Our Journey</h4>
                    <p className='text-lg'>Our journey began not with a grand vision, but with a simple idea — to create space for people to come together, learn from each other, and grow. What started as a small gathering of friends and local creatives quickly evolved into a movement that crossed neighborhoods, cities, and digital boundaries. In the early days, we organized community meetups in borrowed spaces, worked late nights, and poured our hearts into building something meaningful. We faced challenges — from limited resources to moments of uncertainty — but every obstacle only strengthened our resolve. Over time, with the support of our growing community, we expanded our reach, refined our mission, and embraced innovation. We learned that people aren’t just looking for events; they’re looking for purpose, connection, and a sense of belonging. Today, as we reflect on how far we've come, we remain deeply rooted in our beginnings while continuing to dream big. Our journey is still unfolding — and you are a part of it.</p>
                </div>
            </div>

        </div>
    );
};

export default AboutUsPage;