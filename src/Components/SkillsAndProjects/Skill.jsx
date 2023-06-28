import React from 'react';
import Headline from '../heading/Headline';
import Image from 'next/image';
import reacticon from '../../../public/react.png'
import nodeicon from '../../../public/nodejs.png'
import expressicon from '../../../public/express-js.png'
import mongoicon from '../../../public/mongo.png'
import Project from './Project';

const Skill = () => {
    return (
        <div id='page2'>
            <Headline heading={"Skills"} subHeading={"Where Creativity Meets Code"}></Headline>
            <div className='lg:flex justify-center gap-4 p-4'>
                <div className="card w-96 bg-orange-50 shadow-xl">
                    <Image src={reacticon} alt='this picture'></Image>
                    <div className="card-body">
                        <h2 className="card-title">React</h2>
                        <p>React is an open-source JavaScript library for building user interfaces. It was developed by Facebook and has gained significant popularity in the web development community. React allows developers to build reusable UI components and create dynamic, interactive web applications.</p>
                    </div>
                </div>
                <div className="card w-96 bg-orange-50 shadow-xl">
                    <Image src={nodeicon} alt='this picture'></Image>
                    <div className="card-body">
                        <h2 className="card-title">Node Js</h2>
                        <p>Node.js is an open-source, server-side JavaScript runtime environment that allows you to execute JavaScript code on the server. It was built on the Chrome V8 JavaScript engine and provides an event-driven, non-blocking I/O model, making it lightweight and efficient for building scalable network application</p>
                    </div>
                </div>
                <div className="card w-96 bg-orange-50 shadow-xl">
                    <Image src={expressicon} width={44} height={44} alt='this picture'></Image>
                    <div className="card-body">
                        <h2 className="card-title">Express Js</h2>
                        <p>Express.js is a minimal and flexible web application framework for Node.js. It provides a set of features and utilities that make it easier to build web applications and APIs. Express.js is built on top of Node.js and leverages its non-blocking I/O model and event-driven architecture.</p>
                    </div>
                </div>
                <div className="card w-96 bg-orange-50 shadow-xl">
                    <Image src={mongoicon} alt='this picture'></Image>
                    <div className="card-body">
                        <h2 className="card-title">MongoDB</h2>
                        <p>MongoDB is a popular, open-source, NoSQL database that provides high performance, scalability, and flexibility for storing and retrieving data. It falls under the category of document-oriented databases, where data is stored in flexible, JSON-like documents instead of traditional table-based structures.</p>
                    </div>
                </div>
            </div>
            <Project></Project>
        </div>
    );
};

export default Skill;