import React, { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <div>
    <div className="border-b-2 shadow-md">
        <div className="mx-auto container relative px-6 xl:px-0">
            <nav className>
                <div className="xl:flex justify-between w-full py-8 mr-8 hidden">
                    <a className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700" role="banner" href="javascript:void(0)">
                        <img src="https://i.ibb.co/vYhW86Y/Logo.png" alt="Logo" />
                    </a>
                    <div className="mt-2">
                        <ul className="font-normal text-lg flex justify-between space-x-8 items-center text-black font-medium">
                            <li className="hover:text-indigo-600 cursor-pointer">
                                <a className="focus:outline-none focus:underline focus:text-indigo-700" href="javascript:void(0)">
                                    About
                                </a>
                            </li>
                            <li className="hover:text-indigo-600 cursor-pointer">
                                <a className="focus:outline-none focus:underline focus:text-indigo-700" href="javascript:void(0)">
                                    Services
                                </a>
                            </li>
                            <li className="hover:text-indigo-600 cursor-pointer">
                                <a className="focus:outline-none focus:underline focus:text-indigo-700" href="javascript:void(0)">
                                    Digital Marketing
                                </a>
                            </li>
                            <li className="hover:text-indigo-600 cursor-pointer">
                                <a className="focus:outline-none focus:underline focus:text-indigo-700" href="javascript:void(0)">
                                    E-Commerce
                                </a>
                            </li>                            
                            <li className="hover:text-indigo-600 cursor-pointer">
                                <a className="focus:outline-none focus:underline focus:text-indigo-700" href="javascript:void(0)">
                                    Technologies
                                </a>
                            </li>
                            <li className="hover:text-indigo-600 cursor-pointer">
                                <a className="focus:outline-none focus:underline focus:text-indigo-700" href="javascript:void(0)">
                                    Careers
                                </a>
                            </li>
                            <li className="hover:text-indigo-600 cursor-pointer">
                                <a className="focus:outline-none focus:underline focus:text-indigo-700" href="javascript:void(0)">
                                    Contact Us
                                </a>
                            </li>
                            <li className="hover:text-indigo-600 cursor-pointer">
                                <a className="focus:outline-none focus:underline focus:text-indigo-700" href="javascript:void(0)">
                                    Products
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="xl:hidden py-4">
                <div className="flex py-2 justify-between items-center">
                    <div>
                        <a className href="javascript:void(0)">
                            <img src="https://i.ibb.co/vYhW86Y/Logo.png" alt="Logo" />
                        </a>
                    </div>
                    <div className="visible flex items-center">
                        {show && (
                            <ul id="list" className=" py-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-20 md:px-4 md:mt-20 z-20">
                                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <a href="javascript:void(0)">
                                        <span className="ml-2 font-bold">Home</span>
                                    </a>
                                </li>
                                <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                                    <a href="javascript:void(0)">
                                        <span className="ml-2 font-bold">About</span>
                                    </a>
                                </li>
                                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                    <a href="javascript:void(0)">
                                        <span className="ml-2 font-bold">Products</span>
                                    </a>
                                </li>
                                <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                                    <a href="javascript:void(0)">
                                        <span className="ml-2 font-bold underline">Join the club today!</span>
                                    </a>
                                </li>
                            </ul>
                        )}
                        <div className="xl:hidden" onClick={() => setShow(!show)}>
                            {show ? (
                                <div className=" close-m-menu" onclick="MenuHandler(false)">
                                    <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </div>
                            ) : (
                                <svg id="open" onclick="MenuHandler(true)" aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="show-m-menu icon icon-tabler icon-tabler-menu" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={4} y1={8} x2={20} y2={8} />
                                    <line x1={4} y1={16} x2={20} y2={16} />
                                </svg>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <div className="mx-auto container relative px-6 py-7 xl:px-0">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center pb-40">
            <div className="xl:mt-8">
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:opacity-90 flex items-center relative focus:outline-none justify-center mt-5 lg:mt-10 text-sm lg:text-base font-medium text-indigo-600 p-2 lg:p-2 bg-indigo-100 rounded-md">
                    Checkout updates
                    <svg className="ml-5" xmlns="http://www.w3.org/2000/svg" width={26} height={17} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                </button>
                <div className="text-3xl lg:text-6xl xl:text-8xl text-gray-800 tracking-1px font-extrabold">
                    <h1 className="lg:text-7xl leading-tight mt-3 lg:mt-4">Experience Life from home</h1>
                </div>
                <h2 className="text-base lg:text-lg tracking-wide leading-9 lg:w-10/12 mt-2 lg:mt-6 text-gray-700">The best experiences, without leaving your home. VR provides everything you need to stay sane and safe during the pandemic</h2>
                <div className="my-2">
                    <button className="focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2 focus:outline-none mt-5 lg:mt-10 bg-indigo-700 text-base leading-none text-white hover:bg-indigo-600 p-4 rounded">Take me home</button>
                </div>
            </div>
            <div className="w-full custom-height mt-8 lg:mt-0 rounded-3xl relative">
                <a tabIndex={-1} href="javascript:void(0)">
                    <img src="https://i.ibb.co/dLsYS9C/Group-1.png" alt="Group-1" />
                </a>
            </div>
        </div>
    </div>
</div>
  )
}
