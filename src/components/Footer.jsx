import React from 'react'
import { FaGithub, FaTwitter, FaEnvelope, FaLinkedinIn } from 'react-icons/fa'

function Footer() {
    return (
        <div className="py-5 border-t-3/2">
            <div className="flex justify-center mt-4">
                <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800  hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300' href="https://github.com/husam98kareem">
                    <FaGithub />

                    <span className='sr-only'>Github</span>
                </a>
                <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500  hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300' href="https://twitter.com/husam98kareem">
                    <FaTwitter />

                    <span className='sr-only'>Twitter</span>
                </a>
                <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-green-400  hover:bg-green-400 rounded-full hover:text-white transition-colors duration-300' href="https://github.com/husam98kareem">
                    <FaEnvelope />

                    <span className='sr-only'>Email</span>
                </a>
                <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-800  hover:bg-blue-800 rounded-full hover:text-white transition-colors duration-300' href="https://www.linkedin.com/in/husam-kareem-9342a61b6/">
                    <FaLinkedinIn />

                    <span className='sr-only'>Github</span>
                </a>
            </div>
            <div className="flex justify-center mt-4">
                <p className='text-black mb-4'>
                    Made with <span className='mr-2' role="link" aria-label='heart'>💙</span> by <a className='text-blue-500 hover:underline' href="mailto:husam98kareem@gmail.com">Husam Kareem</a>
                </p>
            </div>
        </div>
    )
}

export default Footer
