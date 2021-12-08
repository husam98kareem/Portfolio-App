import React from 'react'
import { SiJavascript, SiStyledcomponents, SiFirebase, SiTailwindcss } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
function Skills() {
    return (
        <div className="max-w-4xl mx-auto justify-center py-12 " id='tech'>
            <p className="text-2xl text-black  text-center sm:text-4xl font-bold">
                Tech I Use
            </p>
            <div className="flex flex-wrap  justify-center pt-2">
                <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiJavascript color="#ffdf00" className="mx-auto text-4xl" />
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Javascript</p>
                </div>

                <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl transform transition duration-500 hover:scale-125 sm:w-52">
                    <FaReact color="#2196f3" className="mx-auto text-4xl" />
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">React</p>
                </div>
                <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiStyledcomponents color="#f700ff" className="mx-auto text-4xl" />
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Styled</p>
                </div>
                <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiFirebase color="orange" className="mx-auto text-4xl" />
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Firebase</p>
                </div>
                <div className="flex flex-col w-40  p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                    <SiTailwindcss color="#00c0A3" className="mx-auto text-4xl" />
                    <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">TailwindCSS</p>
                </div>





            </div>
        </div>
    )
}

export default Skills
