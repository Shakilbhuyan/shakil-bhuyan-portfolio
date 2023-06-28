'use client'
import Image from 'next/image';
import shakil from '../../../public/Image .jpeg'
import './banner.css';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import Typewriter from 'typewriter-effect';




const Banner = () => {

    return (
        <div className="hero min-h-screen bg-image p-7">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <Image src={shakil}
                    width={400}
                    height={400}
                    alt="Picture of the author"
                    className='rounded-full'></Image>
                <div className='lg:flex-grow'>


                    <Typewriter
                        options={{
                            strings: ['HI THERE,'],
                            autoStart: true,
                            loop: true,
                        }}
                    />

                    <h1 className="text-5xl font-bold uppercase">I Am  <span className='text-fuchsia-600'>shakil</span> bhuyan</h1>
                    <div className="py-3 font-bold">
                        <Typewriter
                            options={{
                                strings: ['MERN Stack Web Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <div className='flex mb-2'>
                        <a href="https://web.facebook.com/profile.php?id=100078262682056" className="text-blue-600 hover:text-white mx-2">
                            <FaFacebook></FaFacebook>
                        </a>
                        <a href="https://www.linkedin.com/in/shakil-bhuiyan-323949256/" className="text-blue-600  hover:text-white mx-2">
                            <FaLinkedinIn></FaLinkedinIn>
                        </a>
                        <a href="https://github.com/Shakilbhuyan" className="text-gray-400 hover:text-white mx-2">
                            <FaGithub></FaGithub>
                        </a>
                    </div>
                    <button className="btn bg-[#FF6133]" > <a href="https://drive.google.com/uc?export=download&id=1AuSxZTvsnsOBYV7V-Dr4E_heJbEAEIFD" >Download Resume</a></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;

// https://drive.google.com/uc?export=download&id=18gUkV6RdkPdgVlFVKjt6TUoeVJ1F4Ycy
// 1AuSxZTvsnsOBYV7V-Dr4E_heJbEAEIFD