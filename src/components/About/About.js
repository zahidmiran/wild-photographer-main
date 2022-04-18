import React from 'react';
import './About.css'

const About = () => {
    return (
        <section className='px-4 py-32 mx-auto max-w-7xl'>
            <h2 className="title">About me</h2>
            <p className='text-center'>
                        I am <span className='name'>Jahid Miran</span> and I'm a
                    </p>

            <div className='containe about-parent'>

                <div>
                    <div className='personal-photo  bg-gray-200 rounded-lg'>
                        <img
                            src='about.jpg'
                            alt=''
                        />
                    </div>
                </div>

                <div>
                    
                    <h1 className='text-center'>
                    wildlife photographers                     </h1>
                    <p className='mb-5 text-base text-left text-gray-800 md:text-xl'>
                        <p>Ever wonder about those wildlife photographers who risk life and limb to get the perfect shot? That’s me. I’ve spent 25 years with National Geographic—and I’ve got the stories and scars to prove it. These days my focus is on the Photo Ark, the world’s largest collection of animal studio portraits. My goal is simple: to get the public to care and save species from extinction.</p>
                    </p>

                </div>
            </div>
        </section>
    );
};

export default About;