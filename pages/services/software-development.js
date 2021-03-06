import React, { useState } from "react";

export default function SoftwareDev() {
    const [show, setShow] = useState(null);
    const [services, setServices] = useState(false);  

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
                <li className="font-semibold tracking-normal mx-6"><a href="/#about">About</a></li>
                <li class="dropdown">
                  <button href="/#services" className="relative font-semibold tracking-normal mx-6">Services
                    <svg className="fill-current h-4 w-4 inline ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                  </button>
                  <div className="dropdown-content border rounded bg-white w-44 hidden absolute z-1 px-4">
                    <a href="android-apps" className="block border-b p-2">Android Apps</a>
                    <a href="web-development" className="block border-b p-2">Website Development</a>
                    <a href="software-development" className="block border-b p-2">Software Development</a>
                    <a href="erp" className="block border-b p-2">ERP</a>
                    <a href="automation" className="block border-b p-2">Automation</a>
                    <a href="data-analytics" className="block p-2">Data Analytics</a>
                  </div>
                </li>
                <li className="font-semibold tracking-normal mx-6"><a href="/#digitalMarketing">Digital Marketing</a></li>
                <li className="font-semibold tracking-normal mx-6"><a href="/#ecommerce">E-Commerce</a></li>
                <li className="font-semibold tracking-normal mx-6"><a href="/#technologies">Technologies</a></li>
                <li className="mx-6 tracking-normal font-semibold"><a href="/#careers">Careers</a></li>
                <li className="mx-6 tracking-normal font-semibold"><a href="/#contact">Contact Us</a></li>
                <li className="mx-6 tracking-normal font-semibold"><a href="/#products">Products</a></li>
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
                      <a id="services" className="cursor-pointer">
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
                                <li className="xl:text-base md:text-xl text-base text-indigo-500 py-2 px-6"><a href="android-apps">Android Apps</a></li>
                                <li className="text-gray-800 xl:text-base md:text-xl text-base hover:text-indigo-500 py-2 px-6"><a href="ios-apps">iOS Apps</a></li>
                                <li className="text-gray-800 xl:text-base md:text-xl text-base hover:text-indigo-500 py-2 px-6"><a href="web-development">Website Development</a></li>
                                <li className="text-gray-800 xl:text-base md:text-xl text-base hover:text-indigo-500 py-2 px-6"><a href="software-development">Software Development</a></li>
                                <li className="text-gray-800 xl:text-base md:text-xl text-base hover:text-indigo-500 py-2 px-6"><a href="erp">ERP</a></li>
                                <li className="text-gray-800 xl:text-base md:text-xl text-base hover:text-indigo-500 py-2 px-6"><a href="automation">Automation</a></li>
                                <li className="text-gray-800 xl:text-base md:text-xl text-base hover:text-indigo-500 py-2 px-6"><a href="data-analytics">Data Analytics</a></li>
                              </ul>
                            </div>
                          )}
                        </li>
                      </a>
                      <a className="cursor-pointer">
                        <li className="text-indigo-700 pt-8">
                          <div className="flex items-center justify-between">
                            <a href="#digitalMarketing" className="text-indigo-700 xl:text-base md:text-xl text-base ml-3">Digital Marketing</a>
                          </div>
                        </li>
                      </a>
                      <a className="cursor-pointer">
                        <li className="text-gray-800 pt-8">
                          <a href="#ecommerce" className="text-gray-800 xl:text-base md:text-xl text-base ml-3">E-Commerce</a>
                        </li>
                      </a>
                      <li className="text-indigo-700 pt-8">
                        <a href="#technologies" className="text-gray-800 xl:text-base md:text-xl text-base ml-3">Technologies</a>
                      </li>
                      <li className="text-gray-800 pt-8">
                        <a href="#careers" className="text-gray-800 xl:text-base md:text-xl text-base ml-3">Careers</a>
                      </li>
                      <li className="text-gray-800 pt-8">
                        <a href="#contact" className="text-gray-800 xl:text-base md:text-xl text-base ml-3">Contact Us</a>
                      </li>
                      <li className="text-gray-800 pt-8">
                        <a href="#products" className="text-gray-800 xl:text-base md:text-xl text-base ml-3">Products</a>
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

        <div className="container mx-auto">
            <h1 className="font-bold text-3xl text-center my-24">Services</h1>
            <div className="xl:container xl:mx-auto px-4 flex flex-col md:items-center justify-between md:flex-row">
                <div className=" md:w-1/2 w-full mb-14 md:mb-0">
                    <div className="pl-4 border-l border-gray-800 mb-4">
                        <h5 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-10">Software Development</h5>
                    </div>
                    <p className="text-base leading-normal text-gray-600 lg:w-2/3 md:w-10/12 w-full">
                    We create high quality software for your businesses. Customize your software to solve your simple to complex problems.
                    Our Solution includes 
                    </p>
                    <p className="text-base leading-normal text-gray-600 lg:w-2/3 md:w-10/12 w-full mt-10">
                    Our Solution includes:<br></br>
                        Finance : Accounting , Invoiceing , Expenses
                        Inventory : Inventory, Manufacturing, Purchase
                        HR : Employee Management, Recuritment , CRM 
                        Others : Parking Automation, Library Management
                    </p>
                </div>
                <div className="md:w-1/2">
                    <h4 className="text-xl font-semibold mb-12">Our Software Features</h4>
                    <div role="list" aria-label="Features" className="grid grid-cols-1 sm:grid-cols-2 lg:gap-20 gap-6 flex-wrap justify-center items-start">
                        <div role="listitem" className="flex items-center">
                            <img className="w-10" src="https://image.flaticon.com/icons/png/512/98/98677.png" alt />
                            <div className="pl-5">
                                <h5 className="text-base font-semibold leading-none text-gray-800 mb-2">High Performance</h5>
                            </div>
                        </div>
                        <div role="listitem" className="flex items-center">
                            <img className="w-10" src="https://image.flaticon.com/icons/png/512/98/98677.png" alt />
                            <div className="pl-5">
                                <h5 className="text-base font-semibold leading-none text-gray-800 mb-2">A Mobile-Ready Version</h5>
                            </div>
                        </div>
                        <div role="listitem" className="flex items-center">
                            <img className="w-10" src="https://image.flaticon.com/icons/png/512/98/98677.png" alt />
                            <div className="pl-5">
                                <h5 className="text-base font-semibold leading-none text-gray-800 mb-2">Cloud Enabled</h5>
                            </div>
                        </div>
                        <div role="listitem" className="flex items-center">
                            <img className="w-10" src="https://image.flaticon.com/icons/png/512/98/98677.png" alt />
                            <div className="pl-5">
                                <h5 className="text-base font-semibold leading-none text-gray-800 mb-2">Safe,Secure, Reliable and Portable</h5>
                            </div>
                        </div>
                    </div>
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
                                    <div className="text-white bg-white absolute bottom-0 left-0 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">


                                   <svg height="512px" enable_background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg"><g id="_x32_67-python"><g><path d="M194.005,240.252h105.054c29.216,0,52.529-24.101,52.529-53.414V86.603    c0-28.525-24.002-49.871-52.529-54.691c-35.214-5.804-73.478-5.509-105.054,0.097c-44.462,7.87-52.527,24.298-52.527,54.693    v21.453H246.63v31.959H102.033c-30.591,0-57.349,18.394-65.709,53.315c-9.64,40.035-10.033,65.02,0,106.826    c7.476,31.085,25.28,53.314,55.872,53.314h36.101v-48.001C128.296,270.845,158.298,240.252,194.005,240.252L194.005,240.252z" fill="#347AB4"/><path d="M474.975,209.372c-7.575-30.395-21.935-53.315-52.527-53.315h-39.443v46.626    c0,36.199-30.692,66.691-65.71,66.691H212.24c-28.724,0-52.528,24.594-52.528,53.414v100.138    c0,28.524,24.788,45.246,52.528,53.413c33.247,9.737,65.215,11.509,105.054,0c26.462-7.675,52.529-23.116,52.529-53.413v-20.997    H264.867v-32.417h157.58c30.593,0,41.904-21.346,52.527-53.314C485.992,283.244,485.501,251.57,474.975,209.372L474.975,209.372z" fill="#FFCA1D"/><path d="M187.415,89.594c-10.479,0-18.975-8.591-18.975-19.164c0.094-10.668,8.496-19.259,18.975-19.259    c10.385,0,18.976,8.685,18.976,19.259C206.39,81.003,197.894,89.594,187.415,89.594z" fill="#FFFFFF"/><path d="M314.908,460.076c-10.479,0-18.976-8.591-18.976-19.164c0.095-10.668,8.496-19.259,18.976-19.259    c10.385,0,18.976,8.685,18.976,19.259C333.884,451.485,325.388,460.076,314.908,460.076z" style={{fill:"#FFFFFF"}}/></g></g><g id="Layer_1"/></svg>                                    
                                    </div>
                                </div>
                                <h4 className="text-lg font-bold leading-tight text-gray-800 text-center pt-5">
                                    Python
                            </h4>
                            </div>
                            <div className="flex flex-col items-center px-6">
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
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#283593" fill-rule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clip-rule="evenodd"/><path fill="#5c6bc0" fill-rule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clip-rule="evenodd"/><path fill="#fff" fill-rule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clip-rule="evenodd"/><path fill="#3949ab" fill-rule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z" clip-rule="evenodd"/></svg>                                    </div>
                                </div>
                                <h4 className="text-lg font-bold leading-tight text-gray-800 text-center pt-5">
                                    C
                            </h4>
                            </div>
                            <div className="flex flex-col items-center px-6">
                                <div className="w-20 h-20 relative ml-6">
                                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                    <div className="text-white absolute bottom-0 left-0 bg-white rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">

                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"/><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"/><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"/><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"/></svg>                                    </div>
                                </div>
                                <h4 className="text-lg font-bold leading-tight text-gray-800 text-center pt-5">
                                    HTML5
                            </h4>
                            </div>
                            <div className="flex flex-col items-center px-6">
                                <div className="w-20 h-20 relative ml-6">
                                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                    <div className="text-white absolute bottom-0 left-0 bg-white rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"/><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"/><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"/><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"/></svg>                                    
                                    </div>
                                </div>
                                <h4 className="text-lg font-bold leading-tight text-gray-800 text-center pt-5">
                                    CSS3
                            </h4>
                            </div>
                            <div className="flex flex-col items-center px-6">
                                <div className="w-20 h-20 relative ml-6">
                                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                    <div className="text-white absolute bottom-0 left-0 bg-white rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#ffd600" d="M6,42V6h36v36H6z"/><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"/></svg>                                    </div>
                                </div>
                                <h4 className="text-lg font-bold leading-tight text-gray-800 text-center pt-5">
                                    JavaScript
                            </h4>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}
