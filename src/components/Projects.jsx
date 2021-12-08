import React from 'react'
import { MdRealEstateAgent } from 'react-icons/md'
import { SiTesla } from 'react-icons/si'
import { AiOutlineAmazon } from 'react-icons/ai'
import { FiFilm } from 'react-icons/fi'
function Projects() {
    return (
        <div className="max-w-4xl mx-auto justify-center py-12 " id='tech'>
            <p className="text-2xl text-black  text-center sm:text-4xl font-bold">
                Projects
            </p>

            <div className="flex flex-wrap  justify-center pt-2">
                <a href="https://determined-heisenberg-225a36.netlify.app">
                    <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52 transform transition duration-500 hover:scale-125">
                        < SiTesla color="#c01c1c" className="mx-auto text-4xl" />
                        <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Tesla</p>
                    </div>
                </a>
                <a href="https://next-realestate-alpha.vercel.app/">
                    <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52 transform transition duration-500 hover:scale-125  cursor-pointer">
                        <MdRealEstateAgent color="#2196f3" className="mx-auto text-4xl" />
                        <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Realestates</p>
                    </div>
                </a>

                <a href="https://clone-375bb.web.app/">
                    <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52 transform transition duration-500 hover:scale-125  cursor-pointer  ">
                        <AiOutlineAmazon color="#ffae00" className="mx-auto text-4xl" />
                        <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Amazon</p>
                    </div>
                </a>
                <a href="https://disneyplus-clone-b90eb.web.app/">
                    <div className="flex flex-col w-40  p-10 m-6 overflow-hidden  bg-white shadow-2xl rounded-xl sm:w-52 transform transition duration-500 hover:scale-125 cursor-pointer">
                        <FiFilm color="#d51010" className="mx-auto text-4xl" />
                        <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Disney+</p>
                    </div>
                </a>

            </div>
        </div>
    )
}


export default Projects
