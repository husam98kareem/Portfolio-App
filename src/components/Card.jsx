import React from 'react'
import profile from '../images/me.jpg'
import { FaGithub, FaTwitter, FaEnvelope, FaLinkedinIn } from 'react-icons/fa'

function Card() {
    return (
        <div className='w-full'>
            <div className='flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5'>
                <div className=''>
                    <img className='w-32 mx-auto shadow-xl rounded-full drop-shadow-sm' src={profile} alt='profile face' />

                </div>
                <div className='text-center mt-5 '>
                    <p className='text-2xl sm-text-2xl font-bold text-gray-900'>
                        Husam Kareem
                    </p>
                    <p className='text-xl font-semibold sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                        Web Devloper/Frontend Devloper
                    </p>


                    <div className='flex align-center justify-center mt-4'>
                        <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800  hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300' href="https://github.com/husam98kareem">
                            <FaGithub />

                            <span className='sr-only'>Github</span>
                        </a>
                        <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500  hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300' href="https://twitter.com/husam98kareem">
                            <FaTwitter />

                            <span className='sr-only'>Twitter</span>
                        </a>
                        <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-green-400  hover:bg-green-400 rounded-full hover:text-white transition-colors duration-300' href="mailto:husam98kareem@gmail.com">
                            <FaEnvelope />

                            <span className='sr-only'>Email</span>
                        </a>
                        <a className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-800  hover:bg-blue-800 rounded-full hover:text-white transition-colors duration-300' href="https://www.linkedin.com/in/husam-kareem-9342a61b6/">
                            <FaLinkedinIn />

                            <span className='sr-only'>Github</span>
                        </a>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card
