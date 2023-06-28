import React from 'react';
import Headline from '../heading/Headline';
import school from '../../../public/school.jpg'
import Image from 'next/image';
import chef from '../../../public/recipe.jpg'
import toy from '../../../public/warrior.jpg'

const Project = () => {
    return (
        <div>
            <Headline heading={"Projects"} subHeading={"Building Digital Solutions that Captivate and Convert"}></Headline>
            <div className='p-10 lg:flex gap-4 justify-center'>
                <div className="card w-96 bg-orange-100 shadow-xl ">
                   <Image src={school} height={500} width={500} alt='image'></Image>
                    <div className="card-body">
                        <h2 className="card-title">LanguageLightHouse </h2>
                        <p>React | Tailwind | DaisyUI | Firebase | Express.js | MongoDB | JWT | Axios   Secure | Stripe  Payment System.</p>
                        <ul>
                            <li>Responsive Design</li>
                            <li>User Authentication and Authorization(Admin. , Instructor, Students)</li>
                            <li>Database Integration</li>
                        </ul>
                        <div className="card-actions justify-end text-red-500">
                            <div className="badge badge-outline"><a href="https://github.com/Shakilbhuyan/summer-camp-full-stack-client">Client Side</a></div>
                            <div className="badge badge-outline"><a href="https://github.com/Shakilbhuyan/summer-camp-full-stack-server">Server Side</a></div>
                            <div className="badge badge-outline"><a href=" https://summer-camp-school-f8578.web.app/">Live Site</a></div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-orange-100 shadow-xl">
                   <Image src={chef} height={500} width={500} alt='image'></Image>
                    <div className="card-body">
                        <h2 className="card-title">SavourChef </h2>
                        <p>React | Tailwind | DaisyUI | Firebase | Express.js | MongoDB </p>
                        <ul>
                            <li>RESTful APIs</li>
                            <li>Logging and Error Handling</li>
                            <li>CRUD Operations</li>
                        </ul>
                        <div className="card-actions justify-end text-red-500">
                            <div className="badge badge-outline"><a href="https://github.com/Shakilbhuyan/chef-recipe-hunter-client">Client Side</a></div>
                            <div className="badge badge-outline"><a href="https://github.com/Shakilbhuyan/chef-recipe-hunter-server">Server Side</a></div>
                            <div className="badge badge-outline"><a href=" https://chef-hunter-401ac.web.app">Live Site</a></div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-orange-100 shadow-xl">
                   <Image src={toy} height={500} width={500} alt='image'></Image>
                    <div className="card-body">
                        <h2 className="card-title"> Star Warriors  </h2>
                        <p>React | Tailwind | DaisyUI | Firebase | Express.js | MongoDB </p>
                        <ul>
                            <li>RESTful APIs</li>
                            <li>Logging and Error Handling</li>
                            <li>CRUD Operations</li>
                        </ul>
                        <div className="card-actions justify-end text-red-500">
                            <div className="badge badge-outline"><a href="https://github.com/Shakilbhuyan/toy-market-client">Client Side</a></div>
                            <div className="badge badge-outline"><a href="https://github.com/Shakilbhuyan/toy-market-server">Server Side</a></div>
                            <div className="badge badge-outline"><a href="https://toy-market-f8086.web.app/">Live Site</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;