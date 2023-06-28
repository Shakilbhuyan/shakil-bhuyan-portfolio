
import React from 'react';
import logo from '../../../public/porfolioLogo.jpg';
import Image from 'next/image';
import { FaFacebook, FaGithub, FaLinkedinIn} from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="bg-blue-950 text-yellow-50 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-center">
                    <div className="w-full md:w-1/4 lg:w-1/6">
                        <Image
                            src={logo}
                            width={50}
                            height={50}
                            alt="Picture of the author"
                            className='rounded-full'
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-2/3 text-center mt-4 md:mt-0">
                        <p className="text-4xl">Shakil Bhuyan</p>
                    </div>
                    <div className="w-full md:w-1/4 lg:w-1/6 text-center mt-4 md:mt-0">
                        <p className="text-white text-sm">&copy; 2023 Copy Right</p>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center mt-4">
                    <a href="https://web.facebook.com/profile.php?id=100078262682056" className="text-blue-400 hover:text-white mx-2">
                    <FaFacebook></FaFacebook>
                    </a>
                    <a href="https://www.linkedin.com/in/shakil-bhuiyan-323949256/" className="text-yellow-50 hover:text-white mx-2">
                    <FaLinkedinIn></FaLinkedinIn>
                    </a>
                    <a href="https://github.com/Shakilbhuyan" className="text-yellow-50 hover:text-white mx-2">
                       <FaGithub></FaGithub>
                    </a>

                </div>
                <div className="mt-4 text-center">
                    <p className="text-gray-400 text-sm"> sbhuiyan2956@gmail.com <br />+8801629242376</p>
                    <p className="text-gray-400 text-sm">Chattogram, Bangladesh</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;