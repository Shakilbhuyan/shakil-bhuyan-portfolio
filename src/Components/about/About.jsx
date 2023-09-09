import React from 'react';
import Headline from '../heading/Headline';

const About = () => {
    return (
        <div id='test1'>
            <Headline heading={"About Me"} subHeading={"Code Craftsmanship meets Marketing Mastery"}></Headline>
            <div className='w-3/4 mx-auto rounded-3xl bg-orange-50 p-10'>
                <div>Hi, I'm <span className='font-bold text-fuchsia-600'>Shakil Bhuyan</span>, a MERN stack developer with a passion for marketing. Currently, I'm studying marketing to enhance my skills and broaden my perspective in the digital landscape. <br />

                    With a strong technical foundation in MongoDB, Express.js, React, and Node.js, I've built dynamic web applications and contributed to various projects. My experience includes developing responsive user interfaces, implementing RESTful APIs, and working with databases to create seamless user experiences. <br />

                    Beyond my professional pursuits, I enjoy staying up-to-date with the latest industry trends and exploring innovative marketing approaches. I believe that a well-rounded perspective and a continuous learning mindset are essential for thriving in the ever-evolving digital landscape. <br />

                    I am excited to bring my unique blend of technical expertise and marketing knowledge to projects that require a holistic approach. Let's collaborate and create exceptional digital experiences that make a lasting impact.
                    <br />
                    Feel free to reach out to me through the contact details provided. I look forward to connecting with you! <br />

                    <span className='font-bold mt-2'>Shakil Bhuyan</span><br />
                    <span className='font-bold'>sbhuiyan2956@gmail.com</span>
                </div>
                    <div className="card  shadow-xl bg-orange-100 lg:w-1/2 mx-auto my-4">
                        <div className="card-body">
                            <h2 className="card-title">University of Chittagong</h2>
                            <p>Bachelors of Business Administration <br />In Marketing <br /> 2021 - Present</p>
                        </div>
                    </div>
                
            </div>
        </div>
    );
};

export default About;