import React from 'react';

const AboutUsPage = () => {
    return (
        <div className='lg:w-10/12 md:px-12 px-4 mx-auto '>
            <div className='my-12'>
                <h1 className='md:text-4xl text-2xl font-bold text-center my-2'>About Us</h1>
                <p className='text-center text-lg mb-4'>We are working for a skilled generation </p>
            </div>
            <section className="grid  items-center gap-6 p-6 bg-gray-100 rounded-xl">
                <img  src={'https://i.ibb.co.com/PGh3JbKB/photo-1582213782179-e0d53f98f2ca.jpg'} alt="About us" className="w-full rounded-lg h-[500px] object-cover" />
                <div>
                    <p className="text-gray-700 mb-4">
                        Welcome to our community! We are a passionate group of creators, thinkers, and organizers committed to bringing people together through meaningful events and experiences. Our mission is to create a platform where individuals from diverse backgrounds can connect, learn, and grow — whether through local gatherings, educational workshops, or creative festivals. At the heart of everything we do is a belief in the power of shared experience and human connection.

                        What began as a small group of volunteers with a vision for impactful events has grown into a thriving initiative that hosts multiple programs throughout the year. We specialize in organizing cultural celebrations, career development events, community meetups, and skill-building sessions that cater to a wide range of audiences. Whether you're here to find inspiration, build your network, or simply enjoy a fun and engaging event, we are here to make it memorable and rewarding.

                        We believe in inclusivity, creativity, and continuous learning. That’s why every event we plan is designed with the participant in mind. From our seamless registration experience to the warm, welcoming atmosphere you’ll find at every session, we go the extra mile to make sure you feel like part of something special. Our team consists of experienced event managers, designers, volunteers, and tech enthusiasts who work behind the scenes to bring each idea to life. We pay close attention to every detail — from the content and flow of sessions to the comfort and safety of all attendees.


                    </p>
                    
                </div>
            </section>
            <div>
                <img src="" alt="" />
            </div>
        </div>
    );
};

export default AboutUsPage;