import React from 'react';
import Headline from '../heading/Headline';


const Contact = () => {
    return (
        <div id='page3'>
            <Headline heading={"Contact Me"}></Headline>
            <div className=" flex justify-center items-center w-full">
            <div className='bg-orange-100 p-10 rounded-lg w-3/4'>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="text-lg">
                        Name:
                    </label>
                    <input type="text" id="name" className="border p-2 w-1/2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="text-lg">
                        Email:
                    </label>
                    <input type="email" id="email" className="border p-2 w-1/2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="text-lg">
                        Message:
                    </label>
                    <textarea id="message" className="border p-2 w-1/2" rows="5"></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </form>
            </div>
        </div>
        </div>
    );
};

export default Contact;