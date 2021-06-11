import React, { useState } from "react";
// import Teamwork from './img/Teamwork-&-Discussion.svg'

export default function IndexPage() {
  const [show, setShow] = useState(null);
  const [services, setServices] = useState(false);
  const [ecomm, setEcomm] = useState(false);
  return (
    <>
      <div className="bg-gray-200 h-full w-full">
        {/* Code block starts */}
        <nav className="w-full mx-auto bg-white xl:block hidden">
          <div className="container px-6 mx-auto">
            <div className="flex justify-between items-center h-16">
              <div className="mr-10 flex items-center">
                <svg aria-label="Home" id="logo" enableBackground="new 0 0 300 300" height={44} viewBox="0 0 300 300" width={43} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g><path fill="#4c51bf" d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z" /></g></svg>
                <h3 className="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block">TechnoTurbo</h3>
              </div>
              <ul className="xl:flex hidden items-center h-full">
                <li className="font-semibold tracking-normal mx-6"><a href="#">About</a></li>
                <li class="dropdown">
                  <button className="relative font-semibold tracking-normal mx-6">Services</button>
                  <div className="dropdown-content border rounded bg-white w-44 hidden absolute z-1 px-4">
                    <a href="#" className="block border-b p-2">Android Apps</a>
                    <a href="#" className="block border-b p-2">Website Development</a>
                    <a href="#" className="block border-b p-2">Software Development</a>
                    <a href="#" className="block border-b p-2">ERP</a>
                    <a href="#" className="block border-b p-2">Automation</a>
                    <a href="#" className="block p-2">Data Analytics</a>
                  </div>
                </li>
                <li className="font-semibold tracking-normal mx-6"><a href="#">Digital Marketing</a></li>
                <li class="dropdown">
                  <button className="relative font-semibold tracking-normal mx-6">E-Commerce</button>
                  <div className="dropdown-content border rounded bg-white w-44 hidden absolute z-1 px-4">
                    <a href="#" className="block border-b p-2">Payment Gagteway Integration</a>
                    <a href="#" className="block border-b p-2">Logistics Integration</a>
                    <a href="#" className="block p-2">B2B Wholesale Portal Integration</a>
                    <a href="#" className="block border-b p-2">E-Commerce Website</a>
                  </div>
                </li>
                <li className="font-semibold tracking-normal mx-6"><a href="#">Technologies</a></li>
                <li className="mx-6 tracking-normal font-semibold"><a href="#">Careers</a></li>
                <li className="mx-6 tracking-normal font-semibold"><a href="#">Contact Us</a></li>
                <li className="mx-6 tracking-normal font-semibold"><a href="#">Products</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <nav>
          <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-white fixed top-0 z-0">
            <div className="w-24">
              <svg xmlns="http://www.w3.org/2000/svg" width={43} height={44} viewBox="0 0 43 44" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M37.8735 0C36.1688 0 34.7818 1.37956 34.7818 3.0751C34.7818 4.77063 36.1688 6.15019 37.8735 6.15019C39.5782 6.15019 40.9653 4.77063 40.9653 3.0751C40.9653 1.37956 39.5782 0 37.8735 0ZM37.8735 4.61264C37.021 4.61264 36.3277 3.92305 36.3277 3.0751C36.3277 2.22714 37.021 1.53755 37.8735 1.53755C38.7261 1.53755 39.4194 2.22714 39.4194 3.0751C39.4194 3.92305 38.7261 4.61264 37.8735 4.61264ZM26.6663 1.0513C26.1828 1.0513 25.7909 1.44107 25.7909 1.92193C25.7909 2.4028 26.1828 2.79238 26.6663 2.79238C27.1497 2.79238 27.5416 2.40261 27.5416 1.92193C27.5416 1.44107 27.1497 1.0513 26.6663 1.0513ZM43 13.4535C43 13.9342 42.6081 14.324 42.1247 14.324C41.6412 14.324 41.2493 13.9342 41.2493 13.4535C41.2493 12.9727 41.6412 12.5829 42.1247 12.5829C42.6081 12.5829 43 12.9729 43 13.4535ZM18.1654 2.59019L35.1698 12.4044C35.4079 12.5418 35.5548 12.7951 35.5548 13.0692V33.0573C35.5548 33.3273 35.4123 33.5772 35.1803 33.7161L18.1758 43.8901C18.0533 43.9633 17.915 44 17.7774 44C17.6398 44 17.5016 43.9633 17.3789 43.8901L0.374484 33.7161C0.142219 33.5772 0 33.3271 0 33.0573V13.0692C0 12.7951 0.146857 12.5418 0.384919 12.4044L17.3894 2.59019C17.6296 2.45124 17.9254 2.45124 18.1654 2.59019ZM17.7774 4.14388L33.2524 13.0751L23.0207 19.0887L18.5503 16.4735V12.3004C18.5503 11.8758 18.2042 11.5316 17.7774 11.5316C17.3505 11.5316 17.0044 11.8758 17.0044 12.3004V16.4735L11.9752 19.4158C11.7389 19.554 11.5939 19.8057 11.5939 20.0783V25.8047L1.54586 31.7102V13.5118L17.7774 4.14388ZM2.28227 33.0632L17.7774 42.3341L34.0091 32.6225V14.4162L23.961 20.322V26.4081C23.961 26.6807 23.8161 26.9325 23.5798 27.0706L18.5505 30.0125V33.826C18.5505 34.2506 18.2044 34.5948 17.7776 34.5948C17.3507 34.5948 17.0046 34.2506 17.0046 33.826V30.0125L12.2274 27.2182L2.28227 33.0632Z" fill="#667EEA" /></svg>
            </div>
            <div>
              <div id="menu" className="text-gray-800" onClick={() => setShow(!show)}>
                {show ? ("") : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={4} y1={6} x2={20} y2={6} /><line x1={4} y1={12} x2={20} y2={12} /><line x1={4} y1={18} x2={20} y2={18} /></svg>
                )}
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          <div className={show ? "w-full h-full absolute z-40 xl:hidden transform  translate-x-0 " : "w-full h-full absolute z-40 xl:hidden transform -translate-x-full"}>
            <div className="bg-gray-800 opacity-50 w-full h-full" onClick={() => setShow(!show)} />
            <div className="w-64 z-40 fixed overflow-y-auto z-40 top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width={43} height={44} viewBox="0 0 43 44" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M37.8735 0C36.1688 0 34.7818 1.37956 34.7818 3.0751C34.7818 4.77063 36.1688 6.15019 37.8735 6.15019C39.5782 6.15019 40.9653 4.77063 40.9653 3.0751C40.9653 1.37956 39.5782 0 37.8735 0ZM37.8735 4.61264C37.021 4.61264 36.3277 3.92305 36.3277 3.0751C36.3277 2.22714 37.021 1.53755 37.8735 1.53755C38.7261 1.53755 39.4194 2.22714 39.4194 3.0751C39.4194 3.92305 38.7261 4.61264 37.8735 4.61264ZM26.6663 1.0513C26.1828 1.0513 25.7909 1.44107 25.7909 1.92193C25.7909 2.4028 26.1828 2.79238 26.6663 2.79238C27.1497 2.79238 27.5416 2.40261 27.5416 1.92193C27.5416 1.44107 27.1497 1.0513 26.6663 1.0513ZM43 13.4535C43 13.9342 42.6081 14.324 42.1247 14.324C41.6412 14.324 41.2493 13.9342 41.2493 13.4535C41.2493 12.9727 41.6412 12.5829 42.1247 12.5829C42.6081 12.5829 43 12.9729 43 13.4535ZM18.1654 2.59019L35.1698 12.4044C35.4079 12.5418 35.5548 12.7951 35.5548 13.0692V33.0573C35.5548 33.3273 35.4123 33.5772 35.1803 33.7161L18.1758 43.8901C18.0533 43.9633 17.915 44 17.7774 44C17.6398 44 17.5016 43.9633 17.3789 43.8901L0.374484 33.7161C0.142219 33.5772 0 33.3271 0 33.0573V13.0692C0 12.7951 0.146857 12.5418 0.384919 12.4044L17.3894 2.59019C17.6296 2.45124 17.9254 2.45124 18.1654 2.59019ZM17.7774 4.14388L33.2524 13.0751L23.0207 19.0887L18.5503 16.4735V12.3004C18.5503 11.8758 18.2042 11.5316 17.7774 11.5316C17.3505 11.5316 17.0044 11.8758 17.0044 12.3004V16.4735L11.9752 19.4158C11.7389 19.554 11.5939 19.8057 11.5939 20.0783V25.8047L1.54586 31.7102V13.5118L17.7774 4.14388ZM2.28227 33.0632L17.7774 42.3341L34.0091 32.6225V14.4162L23.961 20.322V26.4081C23.961 26.6807 23.8161 26.9325 23.5798 27.0706L18.5505 30.0125V33.826C18.5505 34.2506 18.2044 34.5948 17.7776 34.5948C17.3507 34.5948 17.0046 34.2506 17.0046 33.826V30.0125L12.2274 27.2182L2.28227 33.0632Z" fill="#667EEA" /></svg>
                          <p className="text-base md:text-base text-gray-800 ml-3">TechnoTurbo</p>
                        </div>
                        <div id="cross" className=" text-gray-800" onClick={() => setShow(!show)}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" /><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
                        </div>
                      </div>
                    </div>
                    <ul className="f-m-m">
                      <a className="cursor-pointer">
                        <li className="text-gray-800 pt-8">
                          <a href="" className="text-gray-800 xl:text-base md:text-xl text-base ml-3">About</a>
                        </li>
                      </a>
                      <a className="cursor-pointer">
                        <li className="text-indigo-700 pt-8">
                          <div className="flex items-center justify-between">
                            <p className="text-indigo-700 xl:text-base md:text-xl text-base ml-3">Services</p>
                            {services ? (
                              <div onClick={() => setServices(!services)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="6 15 12 9 18 15" /></svg>
                              </div>
                            ) : (
                              <div onClick={() => setServices(!services)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" /><polyline points="6 9 12 15 18 9" /></svg>
                              </div>
                            )}
                          </div>
                          {services && (
                            <div>
                              <ul className="my-3">
                                <li className="xl:text-base md:text-xl text-base text-indigo-500 hover:text-white py-2 px-6">Best Sellers</li>
                                <li className="text-gray-800 xl:text-base md:text-xl text-base hover:text-indigo-500 py-2 px-6">Out of Stock</li>
                                <li className="text-gray-800 xl:text-base md:text-xl text-base hover:text-indigo-500 py-2 px-6">New Products</li>
                              </ul>
                            </div>
                          )}
                        </li>
                      </a>
                      <a className="cursor-pointer">
                        <li className="text-indigo-700 pt-8">
                          <div className="flex items-center justify-between">
                            <a href="#" className="text-indigo-700 xl:text-base md:text-xl text-base ml-3">Digital Marketing</a>
                          </div>
                        </li>
                      </a>
                      <li className="text-indigo-700 pt-8">
                        <div className="flex items-center justify-between">
                          <a href="#" className="text-indigo-700 xl:text-base md:text-xl text-base ml-3">E-Commerce</a>
                          {ecomm ? (
                            <div onClick={() => setEcomm(!ecomm)}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="6 15 12 9 18 15" /></svg>
                            </div>
                          ) : (
                            <div onClick={() => setEcomm(!ecomm)}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" /><polyline points="6 9 12 15 18 9" /></svg>
                            </div>
                          )}
                        </div>
                        {ecomm && (
                          <div>
                            <ul className="my-3">
                              <li className="xl:text-base md:text-xl text-base text-indigo-500 hover:text-white py-2 px-6">Best Sellers</li>
                              <li className="text-gray-800 xl:text-base md:text-xl text-base hover:text-indigo-500 py-2 px-6">Out of Stock</li>
                              <li className="text-gray-800 xl:text-base md:text-xl text-base hover:text-indigo-500 py-2 px-6">New Products</li>
                            </ul>
                          </div>
                        )}
                      </li>
                      <li className="text-indigo-700 pt-8">
                        <a href="#" className="text-gray-800 xl:text-base md:text-xl text-base ml-3">Technologies</a>
                      </li>
                      <li className="text-gray-800 pt-8">
                        <a href="#" className="text-gray-800 xl:text-base md:text-xl text-base ml-3">Careers</a>
                      </li>
                      <li className="text-gray-800 pt-8">
                        <a href="#" className="text-gray-800 xl:text-base md:text-xl text-base ml-3">Contact Us</a>
                      </li>
                      <li className="text-gray-800 pt-8">
                        <a href="#" className="text-gray-800 xl:text-base md:text-xl text-base ml-3">Products</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Code block ends */}
      </div>
      {/* About */}
      <div className="container mx-auto grid items-center xl:grid-cols-2 pt-6 gap-8">
        <div className="">
          <h1 className="font-bold text-5xl leading-snug text-gray-800">We help you in business growth by creating Apps, Web, Software, ERP and Analytics </h1>
          <button className="bg-red-400 mt-10 hover:bg-red-700 text-xl text-white font-bold py-5 px-20 rounded-lg">Start With Us</button>
        </div>
        <div className="justify-self-end">
          <img src="img/Business-Meeting.svg" alt="" style={{ width: 600 }} />
        </div>
      </div>
      <div className="my-8">
        <h2 className="font-bold text-3xl text-center mb-4">How we can Help you?</h2>
        <div className="text-center mb-4">
          Move on Mobile & Web | Data Analysis | End to End Business Auomation
          </div>
        <p className="font-semibold text-xl text-center mb-10">
          We create Apps, Software, ERP, analyze your buiness data and do automation to help in ease of
          doing business for B2B and B2C customers.
            </p>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 pt-6 gap-32">
          <div className="flex flex-col items-center">
            <img src="img/automation.svg" alt="" className="bg-green-100 rounded-35 p-5 w-28" />
            <div className="text-lg mt-5">We Automate businesses</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="img/advertising.svg" alt="" className="bg-indigo-100 rounded-35 p-5 w-28" />
            <div className="text-lg mt-5">We move your business to online and help in sale by Digital Marketing</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="img/monitor.svg" alt="" className="bg-purple-100 rounded-35 p-5 w-28" />
            <div className="text-lg mt-5">We help management in decisions by analyzing data</div>
          </div>
          <div className="flex flex-col items-center justify-content-center text-center">
            <img src="img/online-shopping.svg" alt="" className="bg-blue-100 rounded-35 p-5 w-28" />
            <div className="text-lg mt-5">We provide solutions to expend on E-Commerce</div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <h3 className="font-bold text-4xl text-center my-24">Services</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:pb-10">
          <a href="" className="bg-white px-6 py-6 relative text-color f-f-l shadow-lg">
            <h1 className="text-2xl font-bold w-9/12">Android Apps</h1>
            <div className="flex justify-end w-full items-end">
              <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                <path
                  d="M26 26.0001V37.1701L29.656 33.5141L32.486 36.3441L24 44.8281L15.514 36.3441L18.344 33.5141L22 37.1701V26.0001H26ZM24 4.00012C27.434 4.00029 30.7482 5.26235 33.3124 7.54636C35.8767 9.83037 37.5122 12.977 37.908 16.3881C40.3966 17.0668 42.5675 18.5983 44.0414 20.7152C45.5152 22.832 46.1983 25.3995 45.9713 27.9689C45.7442 30.5383 44.6214 32.9462 42.7992 34.7718C40.9769 36.5973 38.571 37.7244 36.002 37.9561L36 34.0001C36.0032 30.8544 34.771 27.8332 32.5687 25.587C30.3665 23.3408 27.3702 22.0492 24.2251 21.9902C21.0799 21.9312 18.0374 23.1096 15.7524 25.2716C13.4675 27.4337 12.1228 30.4065 12.008 33.5501L12 34.0001V37.9561C9.43093 37.7248 7.02484 36.5979 5.2023 34.7725C3.37976 32.9471 2.25669 30.5392 2.02938 27.9698C1.80207 25.4003 2.48499 22.8327 3.95877 20.7157C5.43255 18.5987 7.60345 17.0669 10.092 16.3881C10.4874 12.9769 12.1228 9.82994 14.6872 7.54585C17.2515 5.26176 20.5659 3.99985 24 4.00012Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient id="paint0_linear" x1="24.0003" y1="4.00012" x2="24.0003" y2="44.8281" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F56565" />
                    <stop offset={1} stopColor="#D53F8C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </a>
          <a href="" className="bg-white px-6 py-6 relative text-color f-f-l shadow-lg">
            <h1 className="text-2xl font-bold w-9/12">iOS Apps</h1>
            <div className="flex justify-end w-full items-end">
              <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                <path d="M12.91 38L4 45V8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H42C42.5304 6 43.0391 6.21071 43.4142 6.58579C43.7893 6.96086 44 7.46957 44 8V36C44 36.5304 43.7893 37.0391 43.4142 37.4142C43.0391 37.7893 42.5304 38 42 38H12.91ZM22.586 24.242L17.636 19.292L14.808 22.122L22.586 29.9L33.9 18.586L31.072 15.758L22.586 24.242Z" fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient id="paint0_linear" x1={24} y1={6} x2={24} y2={45} gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F56565" />
                    <stop offset={1} stopColor="#D53F8C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </a>
          <a href="" className="bg-white px-6 py-6 relative text-color f-f-l shadow-lg">
            <h1 className="text-2xl font-bold w-9/12">Website Development</h1>
            <div className="flex justify-end w-full items-end">
              <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                <path d="M12.91 38L4 45V8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H42C42.5304 6 43.0391 6.21071 43.4142 6.58579C43.7893 6.96086 44 7.46957 44 8V36C44 36.5304 43.7893 37.0391 43.4142 37.4142C43.0391 37.7893 42.5304 38 42 38H12.91ZM22.586 24.242L17.636 19.292L14.808 22.122L22.586 29.9L33.9 18.586L31.072 15.758L22.586 24.242Z" fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient id="paint0_linear" x1={24} y1={6} x2={24} y2={45} gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F56565" />
                    <stop offset={1} stopColor="#D53F8C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </a>
          <a href="" className="bg-white px-6 py-6 relative text-color f-f-l shadow-lg">
            <h1 className="text-2xl font-bold w-9/12">Software Development</h1>
            <div className="flex justify-end w-full items-end">
              <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                <path d="M12.91 38L4 45V8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H42C42.5304 6 43.0391 6.21071 43.4142 6.58579C43.7893 6.96086 44 7.46957 44 8V36C44 36.5304 43.7893 37.0391 43.4142 37.4142C43.0391 37.7893 42.5304 38 42 38H12.91ZM22.586 24.242L17.636 19.292L14.808 22.122L22.586 29.9L33.9 18.586L31.072 15.758L22.586 24.242Z" fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient id="paint0_linear" x1={24} y1={6} x2={24} y2={45} gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F56565" />
                    <stop offset={1} stopColor="#D53F8C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </a>
          <a href="" className="bg-white px-6 py-6 relative text-color f-f-l shadow-lg">
            <h1 className="text-2xl font-bold w-9/12">ERP</h1>
            <div className="flex justify-end w-full items-end">
              <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                <path d="M12.91 38L4 45V8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H42C42.5304 6 43.0391 6.21071 43.4142 6.58579C43.7893 6.96086 44 7.46957 44 8V36C44 36.5304 43.7893 37.0391 43.4142 37.4142C43.0391 37.7893 42.5304 38 42 38H12.91ZM22.586 24.242L17.636 19.292L14.808 22.122L22.586 29.9L33.9 18.586L31.072 15.758L22.586 24.242Z" fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient id="paint0_linear" x1={24} y1={6} x2={24} y2={45} gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F56565" />
                    <stop offset={1} stopColor="#D53F8C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </a>
          <a href="" className="bg-white px-6 py-6 relative text-color f-f-l shadow-lg">
            <h1 className="text-2xl font-bold w-9/12">Automation</h1>
            <div className="flex justify-end w-full items-end">
              <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                <path d="M12.91 38L4 45V8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H42C42.5304 6 43.0391 6.21071 43.4142 6.58579C43.7893 6.96086 44 7.46957 44 8V36C44 36.5304 43.7893 37.0391 43.4142 37.4142C43.0391 37.7893 42.5304 38 42 38H12.91ZM22.586 24.242L17.636 19.292L14.808 22.122L22.586 29.9L33.9 18.586L31.072 15.758L22.586 24.242Z" fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient id="paint0_linear" x1={24} y1={6} x2={24} y2={45} gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F56565" />
                    <stop offset={1} stopColor="#D53F8C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </a>
          <a href="" className="bg-white px-6 py-6 relative text-color f-f-l shadow-lg">
            <h1 className="text-2xl font-bold w-9/12">Data Analytics</h1>
            <div className="flex justify-end w-full items-end">
              <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                <path d="M12.91 38L4 45V8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H42C42.5304 6 43.0391 6.21071 43.4142 6.58579C43.7893 6.96086 44 7.46957 44 8V36C44 36.5304 43.7893 37.0391 43.4142 37.4142C43.0391 37.7893 42.5304 38 42 38H12.91ZM22.586 24.242L17.636 19.292L14.808 22.122L22.586 29.9L33.9 18.586L31.072 15.758L22.586 24.242Z" fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient id="paint0_linear" x1={24} y1={6} x2={24} y2={45} gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F56565" />
                    <stop offset={1} stopColor="#D53F8C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </a>
        </div>
      </div>
      <h3 className="text-3xl font-bold text-center my-14 mt-20">Digital Marketing</h3>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
        <div className="bg-gray-100 rounded w-full p-8 flex items-center">
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.7501 12C14.7864 12 13.8545 11.5697 13.1251 10.7888C12.4159 10.027 11.9828 9.01125 11.9064 7.92938C11.8248 6.77531 12.1769 5.71406 12.8973 4.94063C13.6178 4.16719 14.6251 3.75 15.7501 3.75C16.8672 3.75 17.8773 4.17469 18.5954 4.94625C19.3206 5.72531 19.6736 6.78469 19.592 7.92891C19.5137 9.01219 19.0811 10.0275 18.3733 10.7883C17.6458 11.5697 16.7143 12 15.7501 12ZM21.9297 20.25H9.57107C9.37237 20.2511 9.17608 20.2065 8.99729 20.1198C8.81851 20.0331 8.662 19.9065 8.53982 19.7498C8.41021 19.58 8.32071 19.383 8.27801 19.1736C8.23531 18.9643 8.24052 18.748 8.29325 18.5409C8.68794 16.9561 9.66576 15.6417 11.1208 14.7403C12.4122 13.9406 14.0561 13.5 15.7501 13.5C17.4775 13.5 19.0783 13.9219 20.3772 14.7211C21.8354 15.6178 22.8147 16.9397 23.2075 18.5438C23.2596 18.751 23.2642 18.9673 23.221 19.1765C23.1778 19.3857 23.088 19.5825 22.9581 19.7522C22.836 19.9082 22.6799 20.0341 22.5016 20.1204C22.3234 20.2067 22.1277 20.251 21.9297 20.25ZM6.89076 12.1875C5.24122 12.1875 3.79091 10.6538 3.65638 8.76891C3.58982 7.80328 3.89076 6.91031 4.50013 6.25547C5.10294 5.60719 5.95325 5.25 6.89076 5.25C7.82826 5.25 8.672 5.60906 9.2781 6.26109C9.89216 6.92109 10.1922 7.81219 10.1218 8.76984C9.98732 10.6542 8.53747 12.1875 6.89076 12.1875ZM9.96857 13.6617C9.14404 13.2586 8.07388 13.057 6.89122 13.057C5.51029 13.057 4.16919 13.417 3.11451 14.0705C1.91872 14.8125 1.11435 15.893 0.789505 17.1975C0.741967 17.3851 0.73747 17.5811 0.776352 17.7707C0.815234 17.9603 0.896488 18.1387 1.01404 18.2925C1.12557 18.4357 1.26847 18.5514 1.43172 18.6307C1.59498 18.71 1.77425 18.7508 1.95575 18.75H7.15888C7.2467 18.75 7.33173 18.7192 7.39915 18.6629C7.46656 18.6066 7.51209 18.5284 7.52779 18.442C7.53294 18.4125 7.53951 18.383 7.54701 18.3539C7.94451 16.7573 8.87591 15.4083 10.2522 14.4248C10.3028 14.3884 10.3435 14.3398 10.3706 14.2836C10.3977 14.2274 10.4104 14.1653 10.4075 14.103C10.4045 14.0407 10.3861 13.9801 10.3538 13.9267C10.3215 13.8733 10.2765 13.8288 10.2226 13.7972C10.149 13.7541 10.0647 13.7086 9.96857 13.6617Z"
              fill="#4B5563"
            />
          </svg>
          <p className="lg:text-2xl text-base font-medium leading-6 ml-4 text-gray-600">SEO</p>
        </div>
        <div className="rounded border-gray-300 h-24">
          <div className="bg-gray-100 mt-4 rounded w-full p-8 flex items-center">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2.25C6.62391 2.25 2.25 6.62391 2.25 12C2.25 17.3761 6.62391 21.75 12 21.75C17.3761 21.75 21.75 17.3761 21.75 12C21.75 6.62391 17.3761 2.25 12 2.25ZM9.64594 7.72594C10.2398 7.09641 11.0756 6.75 12 6.75C12.9244 6.75 13.7527 7.09875 14.3489 7.73156C14.9531 8.37281 15.247 9.23437 15.1777 10.1606C15.0389 12 13.6139 13.5 12 13.5C10.3861 13.5 8.95828 12 8.82234 10.1602C8.75344 9.22641 9.04688 8.36203 9.64594 7.72594ZM12 20.25C10.8987 20.2507 9.80838 20.0303 8.79382 19.6018C7.77927 19.1732 6.86109 18.5453 6.09375 17.7553C6.53323 17.1286 7.0932 16.5957 7.74094 16.1878C8.93578 15.4219 10.448 15 12 15C13.552 15 15.0642 15.4219 16.2577 16.1878C16.9059 16.5955 17.4664 17.1284 17.9062 17.7553C17.139 18.5454 16.2208 19.1734 15.2062 19.6019C14.1917 20.0304 13.1014 20.2508 12 20.25Z"
                fill="#4B5563"
              />
            </svg>
            <p className="lg:text-2xl text-base font-medium leading-6 ml-4 text-gray-600">SMM</p>
          </div>
        </div>
        <div className="rounded border-gray-300 h-24">
          <div className="bg-gray-100 mt-4 rounded w-full p-8 flex items-center">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.875 3.75H4.125C3.42904 3.75074 2.76179 4.02755 2.26967 4.51967C1.77755 5.01179 1.50074 5.67904 1.5 6.375V17.625C1.50074 18.321 1.77755 18.9882 2.26967 19.4803C2.76179 19.9725 3.42904 20.2493 4.125 20.25H19.875C20.571 20.2493 21.2382 19.9725 21.7303 19.4803C22.2225 18.9882 22.4993 18.321 22.5 17.625V6.375C22.4993 5.67904 22.2225 5.01179 21.7303 4.51967C21.2382 4.02755 20.571 3.75074 19.875 3.75ZM19.2103 8.09203L12.4603 13.342C12.3287 13.4444 12.1667 13.4999 12 13.4999C11.8333 13.4999 11.6713 13.4444 11.5397 13.342L4.78969 8.09203C4.71038 8.03214 4.64377 7.95709 4.59372 7.87123C4.54367 7.78537 4.51118 7.69042 4.49815 7.5919C4.48511 7.49338 4.49179 7.39325 4.51778 7.29733C4.54378 7.20142 4.58858 7.11162 4.64958 7.03316C4.71058 6.95471 4.78656 6.88916 4.87312 6.84032C4.95967 6.79149 5.05506 6.76034 5.15376 6.74869C5.25245 6.73704 5.35248 6.74513 5.44802 6.77247C5.54357 6.79981 5.63272 6.84587 5.71031 6.90797L12 11.7998L18.2897 6.90797C18.447 6.7892 18.6447 6.73711 18.84 6.76296C19.0354 6.78881 19.2128 6.89053 19.3338 7.04612C19.4547 7.20171 19.5096 7.39866 19.4865 7.59439C19.4634 7.79011 19.3642 7.96888 19.2103 8.09203Z"
                fill="#4B5563"
              />
            </svg>
            <p className="lg:text-2xl text-base font-medium leading-6 ml-4 text-gray-600">Pay Per Click</p>
          </div>
        </div>
        <div className="rounded border-gray-300 h-24">
          <div className="bg-gray-100 mt-4 rounded w-full p-8 flex items-center">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.875 3.75H4.125C3.42904 3.75074 2.76179 4.02755 2.26967 4.51967C1.77755 5.01179 1.50074 5.67904 1.5 6.375V17.625C1.50074 18.321 1.77755 18.9882 2.26967 19.4803C2.76179 19.9725 3.42904 20.2493 4.125 20.25H19.875C20.571 20.2493 21.2382 19.9725 21.7303 19.4803C22.2225 18.9882 22.4993 18.321 22.5 17.625V6.375C22.4993 5.67904 22.2225 5.01179 21.7303 4.51967C21.2382 4.02755 20.571 3.75074 19.875 3.75ZM19.2103 8.09203L12.4603 13.342C12.3287 13.4444 12.1667 13.4999 12 13.4999C11.8333 13.4999 11.6713 13.4444 11.5397 13.342L4.78969 8.09203C4.71038 8.03214 4.64377 7.95709 4.59372 7.87123C4.54367 7.78537 4.51118 7.69042 4.49815 7.5919C4.48511 7.49338 4.49179 7.39325 4.51778 7.29733C4.54378 7.20142 4.58858 7.11162 4.64958 7.03316C4.71058 6.95471 4.78656 6.88916 4.87312 6.84032C4.95967 6.79149 5.05506 6.76034 5.15376 6.74869C5.25245 6.73704 5.35248 6.74513 5.44802 6.77247C5.54357 6.79981 5.63272 6.84587 5.71031 6.90797L12 11.7998L18.2897 6.90797C18.447 6.7892 18.6447 6.73711 18.84 6.76296C19.0354 6.78881 19.2128 6.89053 19.3338 7.04612C19.4547 7.20171 19.5096 7.39866 19.4865 7.59439C19.4634 7.79011 19.3642 7.96888 19.2103 8.09203Z"
                fill="#4B5563"
              />
            </svg>
            <p className="lg:text-2xl text-base font-medium leading-6 ml-4 text-gray-600">Content Marketing</p>
          </div>
        </div>
        <div className="rounded border-gray-300 h-24">
          <div className="bg-gray-100 mt-4 rounded w-full p-8 flex items-center">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.875 3.75H4.125C3.42904 3.75074 2.76179 4.02755 2.26967 4.51967C1.77755 5.01179 1.50074 5.67904 1.5 6.375V17.625C1.50074 18.321 1.77755 18.9882 2.26967 19.4803C2.76179 19.9725 3.42904 20.2493 4.125 20.25H19.875C20.571 20.2493 21.2382 19.9725 21.7303 19.4803C22.2225 18.9882 22.4993 18.321 22.5 17.625V6.375C22.4993 5.67904 22.2225 5.01179 21.7303 4.51967C21.2382 4.02755 20.571 3.75074 19.875 3.75ZM19.2103 8.09203L12.4603 13.342C12.3287 13.4444 12.1667 13.4999 12 13.4999C11.8333 13.4999 11.6713 13.4444 11.5397 13.342L4.78969 8.09203C4.71038 8.03214 4.64377 7.95709 4.59372 7.87123C4.54367 7.78537 4.51118 7.69042 4.49815 7.5919C4.48511 7.49338 4.49179 7.39325 4.51778 7.29733C4.54378 7.20142 4.58858 7.11162 4.64958 7.03316C4.71058 6.95471 4.78656 6.88916 4.87312 6.84032C4.95967 6.79149 5.05506 6.76034 5.15376 6.74869C5.25245 6.73704 5.35248 6.74513 5.44802 6.77247C5.54357 6.79981 5.63272 6.84587 5.71031 6.90797L12 11.7998L18.2897 6.90797C18.447 6.7892 18.6447 6.73711 18.84 6.76296C19.0354 6.78881 19.2128 6.89053 19.3338 7.04612C19.4547 7.20171 19.5096 7.39866 19.4865 7.59439C19.4634 7.79011 19.3642 7.96888 19.2103 8.09203Z"
                fill="#4B5563"
              />
            </svg>
            <p className="lg:text-2xl text-base font-medium leading-6 ml-4 text-gray-600">Display Advertising</p>
          </div>
        </div>
        <div className="rounded border-gray-300 h-24">
          <div className="bg-gray-100 mt-4 rounded w-full p-8 flex items-center">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.875 3.75H4.125C3.42904 3.75074 2.76179 4.02755 2.26967 4.51967C1.77755 5.01179 1.50074 5.67904 1.5 6.375V17.625C1.50074 18.321 1.77755 18.9882 2.26967 19.4803C2.76179 19.9725 3.42904 20.2493 4.125 20.25H19.875C20.571 20.2493 21.2382 19.9725 21.7303 19.4803C22.2225 18.9882 22.4993 18.321 22.5 17.625V6.375C22.4993 5.67904 22.2225 5.01179 21.7303 4.51967C21.2382 4.02755 20.571 3.75074 19.875 3.75ZM19.2103 8.09203L12.4603 13.342C12.3287 13.4444 12.1667 13.4999 12 13.4999C11.8333 13.4999 11.6713 13.4444 11.5397 13.342L4.78969 8.09203C4.71038 8.03214 4.64377 7.95709 4.59372 7.87123C4.54367 7.78537 4.51118 7.69042 4.49815 7.5919C4.48511 7.49338 4.49179 7.39325 4.51778 7.29733C4.54378 7.20142 4.58858 7.11162 4.64958 7.03316C4.71058 6.95471 4.78656 6.88916 4.87312 6.84032C4.95967 6.79149 5.05506 6.76034 5.15376 6.74869C5.25245 6.73704 5.35248 6.74513 5.44802 6.77247C5.54357 6.79981 5.63272 6.84587 5.71031 6.90797L12 11.7998L18.2897 6.90797C18.447 6.7892 18.6447 6.73711 18.84 6.76296C19.0354 6.78881 19.2128 6.89053 19.3338 7.04612C19.4547 7.20171 19.5096 7.39866 19.4865 7.59439C19.4634 7.79011 19.3642 7.96888 19.2103 8.09203Z"
                fill="#4B5563"
              />
            </svg>
            <p className="lg:text-2xl text-base font-medium leading-6 ml-4 text-gray-600">Email Marketing</p>
          </div>
        </div>
        <div className="rounded border-gray-300 h-24">
          <div className="bg-gray-100 mt-4 rounded w-full p-8 flex items-center">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.875 3.75H4.125C3.42904 3.75074 2.76179 4.02755 2.26967 4.51967C1.77755 5.01179 1.50074 5.67904 1.5 6.375V17.625C1.50074 18.321 1.77755 18.9882 2.26967 19.4803C2.76179 19.9725 3.42904 20.2493 4.125 20.25H19.875C20.571 20.2493 21.2382 19.9725 21.7303 19.4803C22.2225 18.9882 22.4993 18.321 22.5 17.625V6.375C22.4993 5.67904 22.2225 5.01179 21.7303 4.51967C21.2382 4.02755 20.571 3.75074 19.875 3.75ZM19.2103 8.09203L12.4603 13.342C12.3287 13.4444 12.1667 13.4999 12 13.4999C11.8333 13.4999 11.6713 13.4444 11.5397 13.342L4.78969 8.09203C4.71038 8.03214 4.64377 7.95709 4.59372 7.87123C4.54367 7.78537 4.51118 7.69042 4.49815 7.5919C4.48511 7.49338 4.49179 7.39325 4.51778 7.29733C4.54378 7.20142 4.58858 7.11162 4.64958 7.03316C4.71058 6.95471 4.78656 6.88916 4.87312 6.84032C4.95967 6.79149 5.05506 6.76034 5.15376 6.74869C5.25245 6.73704 5.35248 6.74513 5.44802 6.77247C5.54357 6.79981 5.63272 6.84587 5.71031 6.90797L12 11.7998L18.2897 6.90797C18.447 6.7892 18.6447 6.73711 18.84 6.76296C19.0354 6.78881 19.2128 6.89053 19.3338 7.04612C19.4547 7.20171 19.5096 7.39866 19.4865 7.59439C19.4634 7.79011 19.3642 7.96888 19.2103 8.09203Z"
                fill="#4B5563"
              />
            </svg>
            <p className="lg:text-2xl text-base font-medium leading-6 ml-4 text-gray-600">Digital Analytics</p>
          </div>
        </div>
      </div>

      <section className="max-w-8xl mx-auto container pt-16">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col justify-center w-full md:w-1/2 px-4 md:pr-12">
            <h3 className="text-4xl font-bold mb-5">How we can Help you?</h3>
            <p className="uppercase text-lg text-gray-600 leading-normal">Take a business online</p>
            <h2 className="text-xl lg:text-xl font-semibold leading-tight text-gray-800 pt-4">
              We help companies to reach out your pottential customer by providing visiblility online,
              make you relevant , help in customer expectation and build customer relationship by Digtal Marketing you business.
            </h2>
            {/* <p className="text-lg text-gray-600 leading-normal pt-4">Tons of handcrafted UI components for landing pages, created to increase your web creating speed. Create landing pages on the fly with the drag and drop page builder. Perfect UIkit markup, tailored for your needs.</p> */}
          </div>
          <div className="bg-indigo-700 w-full md:w-1/2 px-4 md:px-12 py-10 mt-8 md:mt-0 rounded mr-4">
            <div className="flex pb-10">
              <div className="mr-5 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={3} y={4} width={18} height={4} rx={2} />
                  <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                  <line x1={10} y1={12} x2={14} y2={12} />
                </svg>
              </div>
              <div className="mt-1">
                <h4 className="text-lg font-bold leading-tight text-white">SEO , SEM</h4>
                <p className="text-base text-white leading-normal pt-2">Make it easy for people to find a business on the web</p>
              </div>
            </div>
            <div className="flex pb-10">
              <div className="mr-5 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx={12} cy={12} r={9} />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
              </div>
              <div className="mt-1">
                <h4 className="text-lg font-bold leading-tight text-white">Local Listing, SMO, Content Marketing(SMM)</h4>
                <p className="text-base text-white leading-normal pt-2">Reach more people locally, on social media or on mobile</p>
              </div>
            </div>
            <div className="flex pb-10">
              <div className="mr-5 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="7 8 3 12 7 16" />
                  <polyline points="17 8 21 12 17 16" />
                  <line x1={14} y1={4} x2={10} y2={20} />
                </svg>
              </div>
              <div className="mt-1">
                <h4 className="text-lg font-bold leading-tight text-white">Ads on Websites, Email, Display Advertising, Video Ads</h4>
                <p className="text-base text-white leading-normal pt-2">Reach more customers with advertising</p>
              </div>
            </div>
            <div className="flex pb-10">
              <div className="mr-5 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={3} y={4} width={18} height={12} rx={1} />
                  <line x1={7} y1={20} x2={17} y2={20} />
                  <line x1={9} y1={16} x2={9} y2={20} />
                  <line x1={15} y1={16} x2={15} y2={20} />
                </svg>
              </div>
              <div className="mt-1">
                <h4 className="text-lg font-bold leading-tight text-white">Turn Data Analysis into insights</h4>
                <p className="text-base text-white leading-normal pt-2">Track and measure web traffic</p>
              </div>
            </div>
            <div className="flex pb-10">
              <div className="mr-5 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={3} y={4} width={18} height={12} rx={1} />
                  <line x1={7} y1={20} x2={17} y2={20} />
                  <line x1={9} y1={16} x2={9} y2={20} />
                  <line x1={15} y1={16} x2={15} y2={20} />
                </svg>
              </div>
              <div className="mt-1">
                <h4 className="text-lg font-bold leading-tight text-white">Use E-commerce Platforms and E-Commerce Ads </h4>
                <p className="text-base text-white leading-normal pt-2">Sell products or services online</p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-5 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={3} y={4} width={18} height={12} rx={1} />
                  <line x1={7} y1={20} x2={17} y2={20} />
                  <line x1={9} y1={16} x2={9} y2={20} />
                  <line x1={15} y1={16} x2={15} y2={20} />
                </svg>
              </div>
              <div className="mt-1">
                <h4 className="text-lg font-bold leading-tight text-white">Expand Internationally</h4>
                <p className="text-base text-white leading-normal pt-2">Take a business global</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <h3 className="font-bold text-4xl text-center my-24">E-Commerce</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:pb-10">
          <a href="" className="bg-white px-6 py-6 relative text-color f-f-l shadow-lg">
            <h1 className="text-2xl font-bold w-9/12">Payment Gagteway Integration</h1>
            <div className="flex justify-end w-full items-end">
              <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                <path
                  d="M26 26.0001V37.1701L29.656 33.5141L32.486 36.3441L24 44.8281L15.514 36.3441L18.344 33.5141L22 37.1701V26.0001H26ZM24 4.00012C27.434 4.00029 30.7482 5.26235 33.3124 7.54636C35.8767 9.83037 37.5122 12.977 37.908 16.3881C40.3966 17.0668 42.5675 18.5983 44.0414 20.7152C45.5152 22.832 46.1983 25.3995 45.9713 27.9689C45.7442 30.5383 44.6214 32.9462 42.7992 34.7718C40.9769 36.5973 38.571 37.7244 36.002 37.9561L36 34.0001C36.0032 30.8544 34.771 27.8332 32.5687 25.587C30.3665 23.3408 27.3702 22.0492 24.2251 21.9902C21.0799 21.9312 18.0374 23.1096 15.7524 25.2716C13.4675 27.4337 12.1228 30.4065 12.008 33.5501L12 34.0001V37.9561C9.43093 37.7248 7.02484 36.5979 5.2023 34.7725C3.37976 32.9471 2.25669 30.5392 2.02938 27.9698C1.80207 25.4003 2.48499 22.8327 3.95877 20.7157C5.43255 18.5987 7.60345 17.0669 10.092 16.3881C10.4874 12.9769 12.1228 9.82994 14.6872 7.54585C17.2515 5.26176 20.5659 3.99985 24 4.00012Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient id="paint0_linear" x1="24.0003" y1="4.00012" x2="24.0003" y2="44.8281" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F56565" />
                    <stop offset={1} stopColor="#D53F8C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </a>
          <a href="" className="bg-white px-6 py-6 relative text-color f-f-l shadow-lg">
            <h1 className="text-2xl font-bold w-9/12">Logistics Integration</h1>
            <div className="flex justify-end w-full items-end">
              <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                <path d="M12.91 38L4 45V8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H42C42.5304 6 43.0391 6.21071 43.4142 6.58579C43.7893 6.96086 44 7.46957 44 8V36C44 36.5304 43.7893 37.0391 43.4142 37.4142C43.0391 37.7893 42.5304 38 42 38H12.91ZM22.586 24.242L17.636 19.292L14.808 22.122L22.586 29.9L33.9 18.586L31.072 15.758L22.586 24.242Z" fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient id="paint0_linear" x1={24} y1={6} x2={24} y2={45} gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F56565" />
                    <stop offset={1} stopColor="#D53F8C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </a>
          <a href="" className="bg-white px-6 py-6 relative text-color f-f-l shadow-lg">
            <h1 className="text-2xl font-bold w-9/12">B2B Wholesale Portal Integration</h1>
            <div className="flex justify-end w-full items-end">
              <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                <path d="M12.91 38L4 45V8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H42C42.5304 6 43.0391 6.21071 43.4142 6.58579C43.7893 6.96086 44 7.46957 44 8V36C44 36.5304 43.7893 37.0391 43.4142 37.4142C43.0391 37.7893 42.5304 38 42 38H12.91ZM22.586 24.242L17.636 19.292L14.808 22.122L22.586 29.9L33.9 18.586L31.072 15.758L22.586 24.242Z" fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient id="paint0_linear" x1={24} y1={6} x2={24} y2={45} gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F56565" />
                    <stop offset={1} stopColor="#D53F8C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </a>
          <a href="" className="bg-white px-6 py-6 relative text-color f-f-l shadow-lg">
            <h1 className="text-2xl font-bold w-9/12">E-Commerce Website</h1>
            <div className="flex justify-end w-full items-end">
              <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                <path d="M12.91 38L4 45V8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H42C42.5304 6 43.0391 6.21071 43.4142 6.58579C43.7893 6.96086 44 7.46957 44 8V36C44 36.5304 43.7893 37.0391 43.4142 37.4142C43.0391 37.7893 42.5304 38 42 38H12.91ZM22.586 24.242L17.636 19.292L14.808 22.122L22.586 29.9L33.9 18.586L31.072 15.758L22.586 24.242Z" fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient id="paint0_linear" x1={24} y1={6} x2={24} y2={45} gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F56565" />
                    <stop offset={1} stopColor="#D53F8C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </a>
        </div>
      </div>

      <div className="pt-16">
        <div className="py-12 bg-gray-100">
          <h3 className="text-3xl font-semibold text-center mb-20">Technologies</h3>
          <div className="max-w-8xl mx-auto container">
            <div className="flex flex-wrap items-center justify-center sm:justify-between">
              <div className="flex flex-col items-center px-6">
                <div className="w-20 h-20 relative ml-6">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="text-white absolute bottom-0 left-0 bg-white rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <svg height="512px" enable_background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg"><g id="_x32_67-python"><g><path d="M194.005,240.252h105.054c29.216,0,52.529-24.101,52.529-53.414V86.603    c0-28.525-24.002-49.871-52.529-54.691c-35.214-5.804-73.478-5.509-105.054,0.097c-44.462,7.87-52.527,24.298-52.527,54.693    v21.453H246.63v31.959H102.033c-30.591,0-57.349,18.394-65.709,53.315c-9.64,40.035-10.033,65.02,0,106.826    c7.476,31.085,25.28,53.314,55.872,53.314h36.101v-48.001C128.296,270.845,158.298,240.252,194.005,240.252L194.005,240.252z" fill="#347AB4" /><path d="M474.975,209.372c-7.575-30.395-21.935-53.315-52.527-53.315h-39.443v46.626    c0,36.199-30.692,66.691-65.71,66.691H212.24c-28.724,0-52.528,24.594-52.528,53.414v100.138    c0,28.524,24.788,45.246,52.528,53.413c33.247,9.737,65.215,11.509,105.054,0c26.462-7.675,52.529-23.116,52.529-53.413v-20.997    H264.867v-32.417h157.58c30.593,0,41.904-21.346,52.527-53.314C485.992,283.244,485.501,251.57,474.975,209.372L474.975,209.372z" fill="#FFCA1D" /><path d="M187.415,89.594c-10.479,0-18.975-8.591-18.975-19.164c0.094-10.668,8.496-19.259,18.975-19.259    c10.385,0,18.976,8.685,18.976,19.259C206.39,81.003,197.894,89.594,187.415,89.594z" fill="#FFFFFF" /><path d="M314.908,460.076c-10.479,0-18.976-8.591-18.976-19.164c0.095-10.668,8.496-19.259,18.976-19.259    c10.385,0,18.976,8.685,18.976,19.259C333.884,451.485,325.388,460.076,314.908,460.076z" style={{ fill: "#FFFFFF" }} /></g></g><g id="Layer_1" /></svg>
                  </div>
                </div>
                <h4 className="text-lg font-bold leading-tight text-gray-800 text-center pt-5">
                  Python
                            </h4>
              </div>
              <div className="fflex flex-col items-center px-6">
                <div className="w-20 h-20 relative ml-6">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="text-white absolute bottom-0 left-0 bg-white rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <svg height="512px" enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg"><g id="_x31_81-java"><g><path d="M333.283,307.117c8.807-6.02,21.023-11.23,21.023-11.23s-34.768,6.29-69.357,9.165    c-42.315,3.503-87.775,4.221-110.595,1.167c-53.996-7.187,29.647-27.044,29.647-27.044s-32.433-2.154-72.413,17.07    C84.422,319.066,248.383,329.487,333.283,307.117z" fill="#5382A1" /><path d="M256.56,278.277c-17.07-38.362-74.659-72.054,0-130.99C349.727,73.797,301.93,26,301.93,26    c19.316,75.917-67.92,98.917-99.456,146.084C181.001,204.337,212.986,238.927,256.56,278.277z" fill="#F8981D" /><path d="M359.518,119.975c0.09,0-157.403,39.351-82.205,125.958c22.191,25.516-5.84,48.516-5.84,48.516    s56.332-29.108,30.457-65.495C277.762,194.993,259.254,178.103,359.518,119.975z" fill="#F8981D" /><path d="M354.039,362.999c-0.449,1.078-1.797,2.247-1.797,2.336    c115.266-30.277,72.861-106.824,17.787-87.416c-4.852,1.707-7.365,5.66-7.365,5.66s3.053-1.259,9.883-2.696    C400.396,275.044,440.377,318.168,354.039,362.999L354.039,362.999z" fill="#5382A1" /><path d="M396.443,418.971c0,0,13.027,10.692-14.285,19.047c-52.018,15.722-216.339,20.483-261.979,0.63 c-16.441-7.099,14.374-17.072,24.078-19.137c10.061-2.157,15.901-1.799,15.901-1.799c-18.238-12.847-117.963,25.247-50.671,36.119 C292.945,483.657,444.061,440.443,396.443,418.971L396.443,418.971z" fill="#5382A1" /><path d="M195.557,381.776c-70.706,19.766,43.035,60.555,133.055,22.011 c-14.732-5.748-25.334-12.397-25.334-12.397c-40.16,7.637-58.756,8.175-95.233,4.043 C177.948,392.019,195.557,381.776,195.557,381.776L195.557,381.776z" fill="#5382A1" /><path d="M357.092,469.103c-70.705,13.296-157.941,11.771-209.602,3.233c0-0.088,10.602,8.716,65.046,12.22 c82.834,5.302,210.051-2.966,213.016-42.136C425.553,442.42,419.803,457.245,357.092,469.103L357.092,469.103z" fill="#5382A1" /><path d="M317.922,343.144c-53.188,10.243-84.003,9.973-122.904,5.93 c-30.098-3.145-10.422-17.698-10.422-17.698c-77.982,25.874,43.304,55.164,152.281,23.269 C325.289,350.601,317.922,343.144,317.922,343.144z" style={{ fill: "#5382A1" }} /></g></g><g id="Layer_1" /></svg>
                  </div>
                </div>
                <h4 className="text-lg font-bold leading-tight text-gray-800 text-center pt-5">
                  Java
                            </h4>
              </div>
              <div className="flex flex-col items-center px-6">
                <div className="w-20 h-20 relative ml-6">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="text-white absolute bottom-0 left-0 bg-white rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <svg enable-background="new 0 0 600 600" version="1.1" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                      <circle class="st0" cx="299.5" cy="299.6" r="50.2" /><g><path class="st0" d="M299.5,414.6c-70.5,0-132.1-8.3-178.2-24.1c-29.9-10.2-55.3-23.8-73.4-39.3c-19.2-16.4-29.4-34.3-29.4-51.6 c0-33.2,36.4-65.7,97.5-86.9c50-17.4,115.2-27.1,183.4-27.1c67,0,131.3,9.4,181,26.6c29.1,10,53.6,23,71,37.4 c18.9,15.8,28.9,33.1,28.9,50c0,34.5-40.7,69.4-106.3,91.1C427.6,406.1,365.6,414.6,299.5,414.6z M299.5,209.6 c-64.7,0-128.7,9.4-175.5,25.7c-56.2,19.6-81.4,46.4-81.4,64.3c0,18.6,27.1,47.9,86.5,68.2c43.6,14.9,102.6,22.8,170.4,22.8 c63.6,0,122.9-8,167-22.7c61.7-20.5,89.9-49.8,89.9-68.3c0-9.5-7.2-20.7-20.3-31.6c-15.1-12.6-37.1-24.1-63.4-33.2 C425.4,218.6,363.9,209.6,299.5,209.6z" /></g><g><path class="st0" d="M185.6,549.8c-10.2,0-19.2-2.2-26.8-6.6c-28.7-16.6-38.7-64.4-26.6-127.9c9.9-52.1,34.1-113.3,68.2-172.4 c33.5-58,73.7-109,113.4-143.5c23.2-20.2,46.7-35,67.9-42.8c23.1-8.5,43.1-8.5,57.7-0.1c29.9,17.2,39.8,70,25.8,137.6 c-9.9,48-33.5,105.9-66.5,163.2c-35.2,61-73.2,110.2-109.9,142.3c-23.8,20.8-48.3,36-70.7,43.9 C206.4,547.7,195.4,549.8,185.6,549.8z M210.7,248.9l10.4,6c-32.3,56-56.2,116.1-65.4,164.9c-11.1,58.5-0.4,93.7,15,102.6 c3.8,2.2,8.8,3.4,14.9,3.4c19.9,0,51.2-12.6,87.4-44.2c34.7-30.3,71-77.5,104.9-136.2c31.8-55.1,54.4-110.5,63.8-156 c13.1-63.7,1.8-102.7-14.3-112c-8.2-4.7-21.5-4.1-37.5,1.8c-18.5,6.8-39.4,20.1-60.4,38.4c-37.7,32.8-76.2,81.6-108.4,137.4 L210.7,248.9z" /></g><g><path class="st0" d="M413.4,550.1c-27.2,0-61.7-16.4-97.7-47.4c-40.2-34.6-81.1-86.1-115.3-145.2v0c-33.6-58-57.6-118.3-67.7-170 c-5.9-30.2-7-57.9-3.2-80.2c4.2-24.3,14.1-41.6,28.8-50.1c29.8-17.3,80.5,0.5,132.1,46.4c36.6,32.5,75,81.9,108.1,139.1   c35.3,61,59,118.5,68.4,166.3c6.1,31,7.1,59.8,2.8,83.2c-4.6,24.9-15,42.6-30,51.3C432.2,547.9,423.3,550.1,413.4,550.1z M221.2,345.5c32.4,56,72.6,106.7,110.2,139c45.1,38.8,80.9,47.2,96.4,38.2c16.1-9.3,27.9-47.4,15.7-109 c-9-45.2-31.7-100.2-65.7-158.9c-31.9-55.1-68.6-102.4-103.3-133.2C225.9,78.4,186.5,68.7,170.4,78c-8.2,4.7-14.3,16.6-17.2,33.4 c-3.3,19.4-2.3,44.2,3.1,71.5C165.9,232,188.9,289.7,221.2,345.5L221.2,345.5z" /></g></svg>
                  </div>
                </div>
                <h4 className="text-lg font-bold leading-tight text-gray-800 text-center pt-5">
                  React
                            </h4>
              </div>
              <div className="flex flex-col items-center px-6">
                <div className="w-20 h-20 relative ml-6">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="text-white absolute bottom-0 left-0 bg-white rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.056 512.056" enable-background="new 0 0 512.056 512.056"><g><g><g><path d="M426.635 188.224C402.969 93.946 307.358 36.704 213.08 60.37 139.404 78.865 85.907 142.542 80.395 218.303 28.082 226.93-7.333 276.331 1.294 328.644c7.669 46.507 47.967 80.566 95.101 80.379h80v-32h-80c-35.346.0-64-28.654-64-64 0-35.346 28.654-64 64-64 8.837.0 16-7.163 16-16-.08-79.529 64.327-144.065 143.856-144.144 68.844-.069 128.107 48.601 141.424 116.144 1.315 6.744 6.788 11.896 13.6 12.8 43.742 6.229 74.151 46.738 67.923 90.479-5.593 39.278-39.129 68.523-78.803 68.721h-64v32h64c61.856-.187 111.848-50.483 111.66-112.339C511.899 245.194 476.655 200.443 426.635 188.224z" /><path d="M245.035 253.664l-64 64 22.56 22.56 36.8-36.64v153.44h32v-153.44l36.64 36.64 22.56-22.56-64-64C261.354 247.46 251.276 247.46 245.035 253.664z" /></g></g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>                  </div>
                </div>
                <h4 className="text-lg font-bold leading-tight text-gray-800 text-center pt-5">
                  Cloud
                            </h4>
              </div>
              <div className="flex flex-col items-center px-6">
                <div className="w-20 h-20 relative ml-6">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="text-white absolute bottom-0 left-0 bg-white rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enable-background="new 0 0 512 512"><g><g><g><path d="M266.667 298.667h170.667c5.888.0 10.667-4.779 10.667-10.667s-4.779-10.667-10.667-10.667H266.667c-5.888.0-10.667 4.779-10.667 10.667S260.779 298.667 266.667 298.667z" /><path d="M512 202.667V160c0-10.304-3.072-19.84-8.149-28.011-.128-.256-.149-.555-.299-.789L437.589 25.173C427.797 9.429 410.859.0 392.299.0H119.723c-18.581.0-35.499 9.429-45.291 25.173L8.469 131.2c-.128.213-.128.448-.256.683C3.093 140.053.0 149.653.0 160v42.667c0 17.493 8.597 32.939 21.675 42.667C8.597 255.061.0 270.485.0 288v42.667c0 17.493 8.597 32.939 21.675 42.667C8.597 383.061.0 398.485.0 416v42.667C0 488.064 23.936 512 53.333 512h139.861c5.909.0 10.667-4.779 10.667-10.667.0-5.888-4.779-10.667-10.667-10.667H53.333c-17.643.0-32-14.357-32-32V416c0-17.664 14.357-32 32-32h178.432c5.888.0 10.667-4.779 10.667-10.667.0-5.888-4.779-10.667-10.667-10.667H53.333c-17.643.0-32-14.357-32-32V288c0-17.664 14.357-32 32-32h405.333c17.643.0 32 14.357 32 32v42.667c0 4.693-1.152 9.408-3.371 13.952-2.581 5.291-.405 11.669 4.885 14.272 5.312 2.603 11.691.427 14.272-4.885 3.691-7.509 5.547-15.339 5.547-23.339V288c0-17.493-8.597-32.939-21.675-42.667C503.403 235.584 512 220.16 512 202.667zM92.544 36.437c5.867-9.451 16.021-15.104 27.157-15.104h272.576c11.136.0 21.291 5.653 27.179 15.104l44.011 70.72c-1.6-.171-3.157-.491-4.8-.491H53.333c-1.643.0-3.2.32-4.8.469L92.544 36.437zM490.667 202.667c0 17.643-14.357 32-32 32H53.333c-17.643.0-32-14.357-32-32V160c0-17.664 14.357-32 32-32h405.333c17.643.0 32 14.336 32 32v42.667z" /><path d="M42.667 437.333c0 17.643 14.357 32 32 32 17.643.0 32-14.357 32-32 0-17.643-14.357-32-32-32-17.643.0-32 14.335999999999956-32 32zm42.666.0c0 5.888-4.779 10.667-10.667 10.667S64 443.221 64 437.333c0-5.888 4.779-10.667 10.667-10.667S85.333 431.445 85.333 437.333z" /><path d="M437.333 362.667c-1.941.0-3.883.107-5.781.277C413.781 336.277 383.936 320 352 320c-49.664.0-90.645 37.909-95.509 86.315-24.555 4.736-43.157 26.411-43.157 52.352.0 29.397 23.936 53.333 53.333 53.333h170.667C478.507 512 512 478.507 512 437.333S478.507 362.667 437.333 362.667zm0 128H266.667c-17.643.0-32-14.357-32-32s14.357-32 32-32c5.888.0 10.667-4.779 10.667-10.667.0-41.173 33.493-74.667 74.667-74.667 26.667.0 51.52 14.699 64.811 38.357 2.219 3.947 6.613 6.037 11.179 5.269 3.051-.533 6.144-.96 9.344-.96 29.397.0 53.333 23.936 53.333 53.333S466.731 490.667 437.333 490.667z" /><path d="M437.333 149.333H266.667c-5.888.0-10.667 4.779-10.667 10.667s4.779 10.667 10.667 10.667h170.667c5.888.0 10.667-4.779 10.667-10.667S443.221 149.333 437.333 149.333z" /><path d="M437.333 192H266.667c-5.888.0-10.667 4.779-10.667 10.667s4.779 10.667 10.667 10.667h170.667c5.888.0 10.667-4.779 10.667-10.667S443.221 192 437.333 192z" /><path d="M74.667 149.333c-17.643.0-32 14.336-32 32s14.357 32 32 32c17.643.0 32-14.357 32-32C106.667 163.691 92.309 149.333 74.667 149.333zm0 42.667C68.779 192 64 187.221 64 181.333s4.779-10.667 10.667-10.667 10.667 4.779 10.667 10.667S80.555 192 74.667 192z" /><path d="M42.667 309.333c0 17.643 14.357 32 32 32 17.643.0 32-14.357 32-32 0-17.643-14.357-32-32-32-17.643.0-32 14.335999999999956-32 32zm42.666.0c0 5.888-4.779 10.667-10.667 10.667S64 315.221 64 309.333s4.779-10.667 10.667-10.667S85.333 303.445 85.333 309.333z" /></g></g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                  </div>
                </div>
                <h4 className="text-lg font-bold leading-tight text-gray-800 text-center pt-5">
                  Server
                            </h4>
              </div>
              <div className="flex flex-col items-center px-6">
                <div className="w-20 h-20 relative ml-6">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="text-white absolute bottom-0 left-0 bg-white rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" height="512pt" viewBox="-37 0 512 512" width="512pt"><g id="surface1"><path d="M438.855469 64C438.855469 28.652344 340.617188.0 219.429688.0 98.242188.0.0 28.652344.0 64c0 35.347656 98.242188 64 219.429688 64C340.617188 128 438.855469 99.347656 438.855469 64zm0 0" style={{ stroke: "none", fill_rule: "nonzero", fill: "#bddbff", fill_opacity: 1 }} /><path d="M219.429688 256C340.570312 256 438.855469 227.382812 438.855469 192V64C438.855469 99.382812 340.570312 128 219.429688 128 98.285156 128 0 99.382812.0 64V192c0 35.382812 98.285156 64 219.429688 64zm0 0" style={{ stroke: "none", fill_rule: "nonzero", fill: "#9bc9ff", fill_opacity: 1 }} /><path d="M219.429688 384C340.570312 384 438.855469 355.382812 438.855469 320V192C438.855469 227.382812 340.570312 256 219.429688 256 98.285156 256 0 227.382812.0 192V320c0 35.382812 98.285156 64 219.429688 64zm0 0" style={{ stroke: "none", fill_rule: "nonzero", fill: "#57a4ff", fill_opacity: 1 }} /><path d="M438.855469 320C438.855469 355.382812 340.570312 384 219.429688 384 98.285156 384 0 355.382812.0 320V448c0 35.382812 98.285156 64 219.429688 64C340.570312 512 438.855469 483.382812 438.855469 448zm0 0" style={{ stroke: "none", fill_rule: "nonzero", fill: "#2488ff", fill_opacity: 1 }} /></g></svg>
                  </div>
                </div>
                <h4 className="text-lg font-bold leading-tight text-gray-800 text-center pt-5">
                  Database
                            </h4>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-16">
            <div className="lg:flex">
                <div className="xl:w-2/5 lg:w-2/5 bg-indigo-700 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
                    <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
                        <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">Get in touch</h1>
                        <div className="flex pb-4 items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                                    <path d="M15 7a2 2 0 0 1 2 2" />
                                    <path d="M15 3a6 6 0 0 1 6 6" />
                                </svg>
                            </div>
                            <p className="pl-4 text-white text-base">+1 (308) 321 321</p>
                        </div>
                        <div className="flex items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={3} y={5} width={18} height={14} rx={2} />
                                    <polyline points="3 7 12 13 21 7" />
                                </svg>
                            </div>
                            <p className="pl-4 text-white text-base">Info@alphas.com</p>
                        </div>
                        <p className="text-lg text-white pt-10 tracking-wide">
                            545, Street 11, Block F <br />
                            Dean Boulevard, Ohio
                        </p>
                        <a href="javascript:void(0)">
                            <p className="text-white pt-16 font-bold tracking-wide underline">View Job Openings</p>
                        </a>
                    </div>
                </div>
                <div className="xl:w-3/5 lg:w-3/5 bg-gray-200 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
                    <form id="contact" className="bg-white py-4 px-8 rounded-tr rounded-br">
                        <h1 className="text-4xl text-gray-800 font-extrabold mb-6">Enter Details</h1>
                        <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                            <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                                <div className="flex flex-col">
                                    <label htmlFor="full_name" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Full Name
                                    </label>
                                    <input required id="full_name" name="full_name" type="text" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder />
                                </div>
                            </div>
                            <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Email
                                    </label>
                                    <input required id="email" name="email" type="email" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-wrap">
                            <div className="w-2/4 max-w-xs">
                                <div className="flex flex-col">
                                    <label htmlFor="phone" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Phone
                                    </label>
                                    <input required id="phone" name="phone" type="tel" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder />
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-gray-800 mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea placeholder name="message" className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700" rows={8} id="message" defaultValue={""} />
                            </div>
                            <button type="submit" className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    </>
  );
}
