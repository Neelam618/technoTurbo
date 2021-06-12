import React, { useState } from "react";

export default function AndroidApps() {
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
                <li className="font-semibold tracking-normal mx-6"><a href="#about">About</a></li>
                <li class="dropdown">
                  <button href="#services" className="relative font-semibold tracking-normal mx-6">Services
                    <svg className="fill-current h-4 w-4 inline ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                  </button>
                  <div className="dropdown-content border rounded bg-white w-44 hidden absolute z-1 px-4">
                    <a href="services/android-apps" className="block border-b p-2">Android Apps</a>
                    <a href="services/web-development" className="block border-b p-2">Website Development</a>
                    <a href="services/software-development" className="block border-b p-2">Software Development</a>
                    <a href="services/erp" className="block border-b p-2">ERP</a>
                    <a href="services/automation" className="block border-b p-2">Automation</a>
                    <a href="services/data-analytics" className="block p-2">Data Analytics</a>
                  </div>
                </li>
                <li className="font-semibold tracking-normal mx-6"><a href="#digitalMarketing">Digital Marketing</a></li>
                <li className="font-semibold tracking-normal mx-6"><a href="#ecommerce">E-Commerce</a></li>
                <li className="font-semibold tracking-normal mx-6"><a href="#technologies">Technologies</a></li>
                <li className="mx-6 tracking-normal font-semibold"><a href="#careers">Careers</a></li>
                <li className="mx-6 tracking-normal font-semibold"><a href="#contact">Contact Us</a></li>
                <li className="mx-6 tracking-normal font-semibold"><a href="#products">Products</a></li>
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
                                <li className="xl:text-base md:text-xl text-base text-indigo-500 py-2 px-6"><a href="services/android-apps">Android Apps</a></li>
                                <li className="text-gray-800 xl:text-base md:text-xl text-base hover:text-indigo-500 py-2 px-6"><a href="services/ios-apps">iOS Apps</a></li>
                                <li className="text-gray-800 xl:text-base md:text-xl text-base hover:text-indigo-500 py-2 px-6"><a href="services/web-development">Website Development</a></li>
                                <li className="text-gray-800 xl:text-base md:text-xl text-base hover:text-indigo-500 py-2 px-6"><a href="services/software-development">Software Development</a></li>
                                <li className="text-gray-800 xl:text-base md:text-xl text-base hover:text-indigo-500 py-2 px-6"><a href="services/erp">ERP</a></li>
                                <li className="text-gray-800 xl:text-base md:text-xl text-base hover:text-indigo-500 py-2 px-6"><a href="services/automation">Automation</a></li>
                                <li className="text-gray-800 xl:text-base md:text-xl text-base hover:text-indigo-500 py-2 px-6"><a href="services/data-analytics">Data Analytics</a></li>
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
                        <h5 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-10">Android Apps</h5>
                    </div>
                    <p className="text-base leading-normal text-gray-600 lg:w-2/3 md:w-10/12 w-full">
                        In India 96% of people use Android Mobile. Android Apps provides better oportunities to your business.
                        It is estimated that the average Indain adult spends nearly 2 ½ hours on a mobile device every day.
                        So, why wait ? Grow your business by create an Android App today.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <h4 className="text-xl font-semibold mb-12">Our Mobile Apps Features</h4>
                    <div role="list" aria-label="Features" className="grid grid-cols-1 sm:grid-cols-2 lg:gap-20 gap-6 flex-wrap justify-center items-start">
                        <div role="listitem" className="flex items-center">
                            <img className="w-10" src="https://image.flaticon.com/icons/png/512/98/98677.png" alt />
                            <div className="pl-5">
                                <h5 className="text-base font-semibold leading-none text-gray-800 mb-2">Beautiful UI Design</h5>
                            </div>
                        </div>
                        <div role="listitem" className="flex items-center">
                            <img className="w-10" src="https://image.flaticon.com/icons/png/512/98/98677.png" alt />
                            <div className="pl-5">
                                <h5 className="text-base font-semibold leading-none text-gray-800 mb-2">Simplicity for the End-User</h5>
                            </div>
                        </div>
                        <div role="listitem" className="flex items-center">
                            <img className="w-10" src="https://image.flaticon.com/icons/png/512/98/98677.png" alt />
                            <div className="pl-5">
                                <h5 className="text-base font-semibold leading-none text-gray-800 mb-2">Follows platform design guidelines</h5>
                            </div>
                        </div>
                        <div role="listitem" className="flex items-center">
                            <img className="w-10" src="https://image.flaticon.com/icons/png/512/98/98677.png" alt />
                            <div className="pl-5">
                                <h5 className="text-base font-semibold leading-none text-gray-800 mb-2">Responsive</h5>
                            </div>
                        </div>
                        <div role="listitem" className="flex items-center">
                            <img className="w-10" src="https://image.flaticon.com/icons/png/512/98/98677.png" alt />
                            <div className="pl-5">
                                <h5 className="text-base font-semibold leading-none text-gray-800 mb-2">High Performance</h5>
                            </div>
                        </div>
                        <div role="listitem" className="flex items-center">
                            <img className="w-10" src="https://image.flaticon.com/icons/png/512/98/98677.png" alt />
                            <div className="pl-5">
                                <h5 className="text-base font-semibold leading-none text-gray-800 mb-2">Secure</h5>
                            </div>
                        </div>
                        <div role="listitem" className="flex items-center">
                            <img className="w-10" src="https://image.flaticon.com/icons/png/512/98/98677.png" alt />
                            <div className="pl-5">
                                <h5 className="text-base font-semibold leading-none text-gray-800 mb-2">Social Media Integration</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mx-auto container f-f-p px-4 xl:px-0 py-24">
                <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900">Our Methodology</h1>
                <div className="md:mt-24 f-f-p">
                    <div className="flex justify-center w-full">
                        <div style={{ width: 300 }} className="flex flex-col items-end pr-12 border-r-4 border-gray-300 relative">
                            <svg className="bg-green-100 rounded-35 p-5 w-28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enable-background="new 0 0 512 512"><g><g><path d="M405 302c-57.891.0-105 47.109-105 105s47.109 105 105 105 107-47.109 107-105S462.891 302 405 302zm30 120h-30c-8.291.0-15-6.709-15-15v-30c0-8.291 6.709-15 15-15 8.291.0 15 6.709 15 15v15h15c8.291.0 15 6.709 15 15C450 415.291 443.291 422 435 422z" /></g></g><g><g><path d="M60 377H30c-16.569.0-30 13.431-30 30 0 16.567 13.431 30 30 30h30c16.569.0 30-13.433 30-30C90 390.431 76.569 377 60 377z" /></g></g><g><g><path d="M60 227H30c-16.569.0-30 13.431-30 30 0 16.567 13.431 30 30 30h30c16.569.0 30-13.433 30-30C90 240.431 76.569 227 60 227z" /></g></g><g><g><path d="M60 75H30C13.431 75 0 88.431.0 105c0 16.567 13.431 30 30 30h30c16.569.0 30-13.433 30-30C90 88.431 76.569 75 60 75z" /></g></g><g><g><path d="M435 0H105C80.186.0 60 20.186 60 45c33.091.0 60 26.909 60 60s-26.909 60-60 60v32c33.091.0 60 26.909 60 60s-26.909 60-60 60v30c33.091.0 60 26.909 60 60s-26.909 60-60 60c0 24.814 20.186 45 45 45h216.194C290.246 487.24 270 449.627 270 407c0-74.443 60.557-135 135-135 27.742.0 55.529 8.448 77 22.853V45C482 20.186 459.814.0 435 0zM265.606 327.605l-60.001 60c-2.93 2.93-6.768 4.395-10.605 4.395s-7.676-1.465-10.605-4.395l-34.219-34.219c-5.859-5.859-5.859-15.352.0-21.211 5.859-5.859 15.352-5.859 21.211.0L195 355.789l49.395-49.395c5.859-5.859 15.352-5.859 21.211.0S271.465 321.746 265.606 327.605zM265.606 207.605l-60 60c-2.93 2.93-6.768 4.395-10.605 4.395s-7.676-1.465-10.605-4.395l-34.219-34.219c-5.861-5.859-5.861-15.351-.001-21.21 5.859-5.859 15.352-5.859 21.211.0L195 235.789l49.395-49.395c5.859-5.859 15.352-5.859 21.211.0S271.465 201.746 265.606 207.605zM265.606 85.605l-60 60c-2.93 2.93-6.768 4.395-10.605 4.395s-7.676-1.465-10.605-4.395l-34.219-34.219c-5.861-5.859-5.861-15.351-.001-21.21 5.859-5.859 15.352-5.859 21.211.0L195 113.789l49.395-49.395c5.859-5.859 15.352-5.859 21.211.0S271.465 79.746 265.606 85.605zM405 242h-90c-8.291.0-15-6.709-15-15s6.709-15 15-15h90c8.291.0 15 6.709 15 15S413.291 242 405 242zm0-122h-90c-8.291.0-15-6.709-15-15s6.709-15 15-15h90c8.291.0 15 6.709 15 15S413.291 120 405 120z" /></g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                            <svg className="h-12 mt-20" enable-background="new 0 0 286.054 286.054" version="1.1" viewBox="0 0 286.05 286.05" xmlns="http://www.w3.org/2000/svg">
                                <path d="m143.03 0c-78.996 0-143.03 64.04-143.03 143.03 0 78.996 64.031 143.03 143.03 143.03s143.03-64.031 143.03-143.03c0-78.987-64.032-143.03-143.03-143.03zm0 259.24c-64.183 0-116.21-52.026-116.21-116.21s52.026-116.21 116.21-116.21 116.21 52.026 116.21 116.21-52.026 116.21-116.21 116.21zm30.205-79.031h-32.038c15.661-18.459 40.852-39.753 40.852-63.736 0-21.91-16.564-35.882-39.216-35.882-22.661 0-43.847 17.977-43.847 39.717 0 6.731 4.604 12.586 13.445 12.586 17.691 0 8.108-28.498 29.294-28.498 7.554 0 13.266 6.204 13.266 13.284 0 6.204-3.138 11.558-6.454 16.046-13.999 18.969-30.581 34.496-45.867 51.579-1.841 2.065-4.246 5.176-4.246 8.796 0 7.938 6.266 11.38 14.365 11.38h61.528c6.999 0 13.266-4.568 13.266-12.497 0-7.93-6.249-12.775-14.348-12.775z" fill="#2394BC" />
                            </svg>
                            <img src="img/two.svg" alt="" />
                            <div className="flex my-12 flex-col items-end">
                                <h1 className="text-2xl tracking-wide font-semibold">Requirement Analysis</h1>
                            </div>
                            <img className="block absolute right-0 top-0 -mt-2 -mr-1" src="https://cdn.tuk.dev/assets/components/111220/Fs7/line.png" alt />

                        </div>
                        <div style={{ width: 300 }} className="flex flex-col items-start pl-12 border-gray-400 mt-20 mt-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                                <circle cx={24} cy={24} r={24} transform="rotate(90 24 24)" fill="#237AC2" />
                                <path d="M21.912 17.64V15.648H26.424V33H24.216V17.64H21.912Z" fill="white" />
                            </svg>
                            <div className="flex my-12 flex-col items-start">
                                <h1 className="text-2xl tracking-wide font-semibold">Planning</h1>
                            </div>
                            <svg className="bg-indigo-100 rounded-35 p-5 w-28" enable-background="new 0 0 512.007 512.007" viewBox="0 0 512.007 512.007" xmlns="http://www.w3.org/2000/svg"><g><path d="m151 421.004c0-33.091-26.909-60-60-60s-60 26.909-60 60v30c0 16.538-14.462 31-31 31v30h61c49.629.0 90-41.371 90-91z" /><path d="m251.063 125.603c-8.005 2.153-12.762 10.351-10.605 18.369 2.067 7.714 9.983 12.788 18.369 10.605 8.06-2.168 12.739-10.406 10.605-18.369-2.166-8.047-10.451-12.74-18.369-10.605z" /><path d="m166.205 239.436c7.96 2.111 16.196-2.521 18.369-10.605 2.166-8.082-2.655-16.236-10.591-18.369h-.015c-4.255-1.148-5.405-.284-8.414.698.17 9.04.289 18.419.352 28.129.11.032.187.118.299.147z" /><path d="m331.542 368.02c-2.17-8.066-10.448-12.728-18.369-10.591-8.143 2.19-12.722 10.499-10.605 18.369 2.139 7.983 10.283 12.7 18.369 10.605 8.005-2.153 12.762-10.351 10.605-18.369z" /><path d="m381.464 181.765c5.845-5.859 5.845-15.381.0-21.226-5.848-5.848-15.353-5.872-21.226.0-5.845 5.845-5.845 15.381.015 21.226 5.83 5.83 15.351 5.83 21.211.0z" /><path d="m286.879 30.213c-49.276 1.776-94.508 21.255-130.562 45.985 4.041 27.508 6.896 61.747 8.416 104.092 5.616-.67 11.36-.315 16.985 1.198 24.038 6.427 38.287 31.069 31.831 55.107-5.442 20.332-23.809 33.369-43.389 33.369-1.441.0-2.877-.432-4.318-.571-.181 23.992-.725 47.73-1.76 70.399 15.364 6.383 27.372 14.886 35.213 25.9 15.879 22.31 11.646 48.472 9.976 55.972-5.563 24.913 9.126 50.275 34.292 55.122 14.224 2.725 28.521 4.072 42.715 4.072 123.369.0 226.727-100.21 225.722-226.655-1.051-128.243-112.028-228.251-225.121-223.99zm52.134 109.116c17.578-17.549 46.113-17.549 63.662.0s17.549 46.099.0 63.647v.015c-17.547 17.518-46.099 17.52-63.647.0-17.535-17.564-17.535-46.113-.015-63.662zm-127.53 12.392c-6.385-23.714 7.54-48.604 31.816-55.093 23.862-6.401 48.662 7.837 55.107 31.816 6.443 23.989-7.773 48.671-31.816 55.107-23.981 6.427-48.663-7.729-55.107-31.83zm117.217 263.658c-23.976 6.423-48.677-7.857-55.107-31.816-6.443-23.989 7.773-48.671 31.816-55.107 24.144-6.423 48.693 7.841 55.107 31.831 6.462 24.026-7.825 48.677-31.816 55.092zm116.674-116.675c-6.426 24.038-31.126 38.265-55.107 31.816-23.974-6.418-38.286-31.024-31.816-55.107 6.493-24.258 31.34-38.185 55.107-31.816 23.98 6.43 38.248 31.157 31.816 55.107z" /><path d="m405.795 272.571c-7.857-2.119-16.177 2.459-18.369 10.605-2.166 8.082 2.655 16.236 10.591 18.369 8.214 2.122 16.256-2.692 18.384-10.605 2.138-7.983-2.623-16.23-10.606-18.369z" /><path d="m135.819 271.004c.042-5.019.181-9.959.181-15 0-116.323-7.808-256-45-256s-45 139.677-45 256c0 5.041.139 9.981.181 15z" /><path d="m91 331.004c15.63.0 30.121 4.362 42.942 11.398.648-13.462 1.143-27.328 1.489-41.398h-88.862c.346 14.07.84 27.936 1.489 41.398 12.821-7.037 27.312-11.398 42.942-11.398z" /></g></svg>
                            <svg className="h-12 mt-20" enable-background="new 0 0 286.054 286.054" version="1.1" viewBox="0 0 286.05 286.05" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#2394BC" d="M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027
                                s143.027-64.031,143.027-143.027C286.054,64.04,222.014,0,143.027,0z M143.027,259.236c-64.183,0-116.209-52.026-116.209-116.209
                                S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209S207.21,259.236,143.027,259.236z M167.717,137.637
                                c8.966-5.936,13.364-15.277,13.364-25.977c0-13.239-11.254-31.082-34.729-31.082c-18.093,0-35.542,14.276-35.542,27.515
                                c0,6.284,3.915,12.56,10.602,12.56c11.085,0,8.966-16.636,24.449-16.636c7.339,0,11.737,4.925,11.737,11.371
                                c0,18.853-23.152,6.794-23.152,24.627c0,20.033,27.72,2.548,27.72,26.317c0,9.002-6.856,15.796-15.331,15.796
                                c-18.424,0-15.813-19.872-26.898-19.872c-5.873,0-12.551,4.756-12.551,11.38c0,13.418,15,31.922,39.127,31.922
                                c23.152,0,41.084-17.154,41.084-37.527C187.598,154.621,179.445,143.25,167.717,137.637z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-center w-full">
                        <div style={{ width: 300 }} className="flex flex-col items-end pr-12 border-r-4 border-gray-300 relative">
                            <svg className="bg-blue-100 rounded-35 p-5 w-28" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m512 121V46c0-24.813-20.187-45-45-45H45C20.187 1 0 21.187.0 46v75zM346 61h90c8.284.0 15 6.716 15 15s-6.716 15-15 15h-90c-8.284.0-15-6.716-15-15s6.716-15 15-15zm-150 0c8.284.0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15zm-60 0c8.284.0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15zm-60 0c8.284.0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15z" /><path d="m0 151v315c0 24.813 20.187 45 45 45h422c24.813.0 45-20.187 45-45V151zm175.37 213.287c6.47 5.175 7.518 14.614 2.343 21.083-5.174 6.468-14.615 7.518-21.083 2.342l-75-60c-7.499-5.997-7.504-17.424.0-23.426l75-60c6.466-5.175 15.907-4.127 21.083 2.342 5.175 6.469 4.127 15.909-2.343 21.083L115.012 316zm139.417-147.378-90 210c-3.263 7.613-12.079 11.143-19.696 7.878-7.614-3.263-11.142-12.082-7.878-19.696l90-210c3.264-7.614 12.082-11.141 19.696-7.878s11.142 12.081 7.878 19.696zm115.583 110.804-75 60c-6.458 5.168-15.9 4.136-21.083-2.342-5.175-6.469-4.127-15.909 2.343-21.083l60.358-48.288-60.358-48.287c-6.47-5.175-7.518-14.614-2.343-21.083 5.174-6.469 14.614-7.518 21.083-2.342l75 60c7.499 5.997 7.504 17.423.0 23.425z" /></svg>
                            <svg className="h-12 mt-20" enable-background="new 0 0 286.054 286.054" version="1.1" viewBox="0 0 286.05 286.05" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#2394BC" d="M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027
                                s143.027-64.031,143.027-143.027C286.054,64.04,222.014,0,143.027,0z M143.027,259.236c-64.183,0-116.209-52.026-116.209-116.209
                                S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209S207.21,259.236,143.027,259.236z M175.065,155.122h-5.042v-52.607
                                c0-15.59-8.394-21.937-18.933-21.937c-9.449,0-14.535,3.093-18.531,9.94l-40.7,69.565c-1.091,1.707-2.548,3.772-2.548,7.545
                                c0,4.452,3.817,10.11,12.72,10.11h43.793V192.3c0,9.091,1.85,13.364,11.12,13.364s13.078-4.282,13.078-13.364v-14.562h5.042
                                c7.089,0,12.72-4.452,12.72-11.317C187.785,159.573,182.154,155.122,175.065,155.122z M146.379,155.122h-24.896l24.529-47.816
                                h0.367V155.122z"/>
                            </svg>
                            <div className="flex mt-12 flex-col items-end">
                                <h1 className="text-2xl tracking-wide font-semibold">Design</h1>
                            </div>

                        </div>
                        <div style={{ width: 300 }} className="flex flex-col items-start pl-12 border-gray-400 mt-20 mt-0">
                            <div className="flex my-12 flex-col items-start w-8/12">
                                <h1 className="text-2xl tracking-wide font-semibold">Wireframe</h1>
                            </div>
                            <svg className="bg-red-100 rounded-35 p-5 w-28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001" enable-background="new 0 0 512.001 512.001"><g><g><path d="M271 30c-2.388.0-33.217.0-45 0 0-16.569-13.431-30-30-30-16.569.0-30 13.431-30 30-10.884.0-17.016.0-45 0-8.284.0-15 7.716-15 16v15c0 16.569 13.431 30 30 30h120c16.569.0 30-13.431 30-30V46C286 37.716 279.284 30 271 30z" /></g></g><g><g><path d="M347 61h-30c0 33.091-27.909 60-61 60H136c-33.091.0-60-26.909-60-60H46C21.186 61 0 81.186.0 106v360c0 24.814 21.186 46 46 46h301c24.814.0 45-21.186 45-46V106C392 81.186 371.814 61 347 61zM65.395 176.605c-5.859-5.859-5.859-15.352.0-21.211s15.352-5.859 21.211.0L106 174.789l19.395-19.395c5.859-5.859 15.352-5.859 21.211.0s5.859 15.352.0 21.211L127.211 196l19.395 19.395c5.859 5.859 5.859 15.352.0 21.211-5.859 5.859-15.352 5.859-21.211.0L106 217.211l-19.395 19.395c-5.859 5.859-15.352 5.859-21.211.0-5.859-5.859-5.859-15.352.0-21.211L84.789 196 65.395 176.605zM176.606 386.605l-60 60c-2.93 2.93-6.768 4.395-10.605 4.395-3.837.0-7.676-1.465-10.605-4.395l-30-30c-5.861-5.859-5.861-15.351-.001-21.21 5.859-5.859 15.352-5.859 21.211.0L106 414.789l49.395-49.395c5.859-5.859 15.352-5.859 21.211.0S182.465 380.746 176.606 386.605zm0-105-60 60c-2.93 2.93-6.768 4.395-10.605 4.395-3.837.0-7.676-1.465-10.605-4.395l-30-30c-5.861-5.859-5.861-15.351-.001-21.21 5.859-5.859 15.352-5.859 21.211.0L106 309.789l49.395-49.395c5.859-5.859 15.352-5.859 21.211.0C182.465 266.253 182.465 275.746 176.606 281.605zM317 421h-91c-8.291.0-15-6.709-15-15 0-8.291 6.709-15 15-15h91c8.291.0 15 6.709 15 15C332 414.291 325.291 421 317 421zm0-105h-91c-8.291.0-15-6.709-15-15 0-8.291 6.709-15 15-15h91c8.291.0 15 6.709 15 15C332 309.291 325.291 316 317 316zm0-105h-91c-8.291.0-15-6.709-15-15s6.709-15 15-15h91c8.291.0 15 6.709 15 15S325.291 211 317 211z" /></g></g><g><g><path d="M467 91c-24.814.0-45 20.186-45 45v45h90v-45C512 111.186 491.814 91 467 91z" /></g></g><g><g><g><path d="M422.001 369.789v0H422z" /><path d="M422.001 211v158.788l4.394-4.394c22.383-22.383 58.828-22.383 81.211.0l4.395 4.395V211h-90z" /></g></g></g><g><g><path d="M486.395 386.605c-10.693-10.693-28.096-10.693-38.789.0l-17.157 17.157 22.328 66.984C454.813 476.869 460.54 481 467 481c6.46.0 12.188-4.131 14.224-10.254l22.328-66.984L486.395 386.605z" /></g></g><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /></svg>
                            <svg className="h-12 mt-20" enable-background="new 0 0 286.054 286.054" version="1.1" viewBox="0 0 286.05 286.05" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#2394BC" d="M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027
                                s143.027-64.031,143.027-143.027C286.054,64.04,222.014,0,143.027,0z M143.027,259.236c-64.183,0-116.209-52.026-116.209-116.209
                                S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209S207.21,259.236,143.027,259.236z M149.678,120.849
                                c-4.613,0-9.395,0.867-13.811,1.716l2.762-18.325h34.63c3.316,0,12.89-1.037,12.89-12.971c0-6.222-4.979-10.888-13.445-10.888
                                h-44.401c-8.832,0-12.712,2.941-14.365,16.43l-4.604,36.481c-0.188,1.895-0.554,3.629-0.554,5.873
                                c0,2.941,3.683,8.126,10.861,8.126c9.395,0,11.049-5.703,21.74-5.703c11.424,0,17.691,7.08,17.691,17.458
                                c0,10.897-6.633,22.643-19.523,22.643c-12.345,0-21.195-11.058-28.561-11.058c-6.812,0-12.515,5.364-12.515,11.755
                                c0,15.214,27.443,23.17,40.521,23.17c31.859,0,48.817-19.023,48.817-47.896C187.812,137.44,171.972,120.849,149.678,120.849z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-center w-full">
                        <div style={{ width: 300 }} className="flex flex-col items-end pr-12 border-r-4 border-gray-300 relative">
                            <svg className="bg-green-100 rounded-35 p-5 w-28" enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22.25.0H1.75C.785.0.0.785.0 1.75v2.5C0 5.215.785 6 1.75 6h20.5C23.215 6 24 5.215 24 4.25v-2.5C24 .785 23.215.0 22.25.0z" /><path d="m1.75 24h12.5c.965.0 1.75-.785 1.75-1.75V9.75C16 8.785 15.215 8 14.25 8H1.75C.785 8 0 8.785.0 9.75v12.5C0 23.215.785 24 1.75 24z" /><circle cx="21" cy="11" r="3" /><path d="m23.25 19h-4.5c-.414.0-.75.336-.75.75s.336.75.75.75h4.5c.414.0.75-.336.75-.75s-.336-.75-.75-.75z" /><path d="m23.25 22h-4.5c-.414.0-.75.336-.75.75s.336.75.75.75h4.5c.414.0.75-.336.75-.75s-.336-.75-.75-.75z" /><path d="m23.25 16h-4.5c-.414.0-.75.336-.75.75s.336.75.75.75h4.5c.414.0.75-.336.75-.75s-.336-.75-.75-.75z" /></svg>
                            <svg className="h-12 mt-20" enable-background="new 0 0 286.054 286.054" version="1.1" viewBox="0 0 286.05 286.05" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#2394BC" d="M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027
                                    s143.027-64.031,143.027-143.027C286.054,64.04,222.014,0,143.027,0z M143.027,259.236c-64.183,0-116.209-52.026-116.209-116.209
                                    S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209S207.21,259.236,143.027,259.236z M150.5,125.417
                                    c-3.915,0-8.01,0.679-11.228,2.047l-0.349-0.349c5.873-7.983,17.458-18.844,24.583-27.166c2.136-2.548,3.737-4.586,3.737-6.955
                                    c0-6.123-7.652-12.408-12.64-12.408c-1.43,0-3.388,0-5.346,1.198c-2.145,1.35-4.282,2.718-5.712,4.076
                                    c-17.995,15.956-45.25,51.955-45.25,77.61c0,22.58,17.288,42.112,44.723,42.112c26.371,0,44.723-20.042,44.723-42.112
                                    C187.741,143.411,171.892,125.417,150.5,125.417z M143.018,181.117c-10.691,0-16.931-8.153-16.931-17.664
                                    c0-10.021,6.776-17.673,16.931-17.673c11.228,0,16.931,8.671,16.931,17.673C159.949,173.304,153.173,181.117,143.018,181.117z"/>
                            </svg>
                            <div className="flex my-12 flex-col items-end">
                                <h1 className="text-2xl tracking-wide font-semibold">Test & Integrate</h1>
                            </div>

                            <svg className="bg-red-100 rounded-35 p-5 w-28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 210"><path d="M190.32 90.03L36.784 2.266C34.137.754 31.19 0 28.243 0l-.178.008-1.185.055-.533.053-.921.128-.334.046.006.008c-1.913.353-3.78 1.027-5.515 2.034-5.314 3.083-8.585 8.762-8.585 14.905v175.527c0 6.143 3.271 11.822 8.585 14.905a17.17 17.17 0 0 0 5.514 2.035l-.005.007c.1.019.201.025.3.041a15.8 15.8 0 0 0 .99.137l.497.049a17.49 17.49 0 0 0 1.167.054c.066.001.131.009.197.009 2.947 0 5.894-.754 8.541-2.266L190.32 119.97c5.368-3.069 8.681-8.777 8.681-14.962 0-6.2-3.313-11.908-8.681-14.978zm-60.718-17.429l-15.266 20.027-38.84-50.956 54.106 30.929zm53.274 34.346l-107.38 61.381 67.234-88.206 40.145 22.947a2.24 2.24 0 0 1 1.127 1.938c-.001.8-.433 1.544-1.126 1.94z" /></svg>                            <div className="flex my-12 flex-col items-end">
                                <h1 className="text-2xl tracking-wide font-semibold">Play Store</h1>
                            </div>
                        </div>
                        <div style={{ width: 300 }} className="flex flex-col items-start pl-12 border-gray-400 mt-20 mt-0">
                            <div className="flex my-12 flex-col items-start w-8/12">
                                <h1 className="text-2xl tracking-wide font-semibold">Develop</h1>
                            </div>
                            <svg className="bg-indigo-100 rounded-35 p-5 w-28" enable-background="new 0 0 512.007 512.007" viewBox="0 0 512.007 512.007" xmlns="http://www.w3.org/2000/svg"><g><path d="m151 421.004c0-33.091-26.909-60-60-60s-60 26.909-60 60v30c0 16.538-14.462 31-31 31v30h61c49.629.0 90-41.371 90-91z" /><path d="m251.063 125.603c-8.005 2.153-12.762 10.351-10.605 18.369 2.067 7.714 9.983 12.788 18.369 10.605 8.06-2.168 12.739-10.406 10.605-18.369-2.166-8.047-10.451-12.74-18.369-10.605z" /><path d="m166.205 239.436c7.96 2.111 16.196-2.521 18.369-10.605 2.166-8.082-2.655-16.236-10.591-18.369h-.015c-4.255-1.148-5.405-.284-8.414.698.17 9.04.289 18.419.352 28.129.11.032.187.118.299.147z" /><path d="m331.542 368.02c-2.17-8.066-10.448-12.728-18.369-10.591-8.143 2.19-12.722 10.499-10.605 18.369 2.139 7.983 10.283 12.7 18.369 10.605 8.005-2.153 12.762-10.351 10.605-18.369z" /><path d="m381.464 181.765c5.845-5.859 5.845-15.381.0-21.226-5.848-5.848-15.353-5.872-21.226.0-5.845 5.845-5.845 15.381.015 21.226 5.83 5.83 15.351 5.83 21.211.0z" /><path d="m286.879 30.213c-49.276 1.776-94.508 21.255-130.562 45.985 4.041 27.508 6.896 61.747 8.416 104.092 5.616-.67 11.36-.315 16.985 1.198 24.038 6.427 38.287 31.069 31.831 55.107-5.442 20.332-23.809 33.369-43.389 33.369-1.441.0-2.877-.432-4.318-.571-.181 23.992-.725 47.73-1.76 70.399 15.364 6.383 27.372 14.886 35.213 25.9 15.879 22.31 11.646 48.472 9.976 55.972-5.563 24.913 9.126 50.275 34.292 55.122 14.224 2.725 28.521 4.072 42.715 4.072 123.369.0 226.727-100.21 225.722-226.655-1.051-128.243-112.028-228.251-225.121-223.99zm52.134 109.116c17.578-17.549 46.113-17.549 63.662.0s17.549 46.099.0 63.647v.015c-17.547 17.518-46.099 17.52-63.647.0-17.535-17.564-17.535-46.113-.015-63.662zm-127.53 12.392c-6.385-23.714 7.54-48.604 31.816-55.093 23.862-6.401 48.662 7.837 55.107 31.816 6.443 23.989-7.773 48.671-31.816 55.107-23.981 6.427-48.663-7.729-55.107-31.83zm117.217 263.658c-23.976 6.423-48.677-7.857-55.107-31.816-6.443-23.989 7.773-48.671 31.816-55.107 24.144-6.423 48.693 7.841 55.107 31.831 6.462 24.026-7.825 48.677-31.816 55.092zm116.674-116.675c-6.426 24.038-31.126 38.265-55.107 31.816-23.974-6.418-38.286-31.024-31.816-55.107 6.493-24.258 31.34-38.185 55.107-31.816 23.98 6.43 38.248 31.157 31.816 55.107z" /><path d="m405.795 272.571c-7.857-2.119-16.177 2.459-18.369 10.605-2.166 8.082 2.655 16.236 10.591 18.369 8.214 2.122 16.256-2.692 18.384-10.605 2.138-7.983-2.623-16.23-10.606-18.369z" /><path d="m135.819 271.004c.042-5.019.181-9.959.181-15 0-116.323-7.808-256-45-256s-45 139.677-45 256c0 5.041.139 9.981.181 15z" /><path d="m91 331.004c15.63.0 30.121 4.362 42.942 11.398.648-13.462 1.143-27.328 1.489-41.398h-88.862c.346 14.07.84 27.936 1.489 41.398 12.821-7.037 27.312-11.398 42.942-11.398z" /></g></svg>
                            <svg className="h-12 mt-20" enable-background="new 0 0 286.054 286.054" version="1.1" viewBox="0 0 286.05 286.05" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#2394BC" d="M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027
                                    s143.027-64.031,143.027-143.027C286.054,64.04,222.014,0,143.027,0z M143.027,259.236c-64.183,0-116.209-52.026-116.209-116.209
                                    S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209S207.21,259.236,143.027,259.236z M175.047,80.39h-63.674
                                    c-9.672,0-13.007,5.927-13.007,12.041c0,5.936,3.522,12.041,13.007,12.041H156.4l-43.963,82.714
                                    c-1.243,2.431-1.761,4.005-1.761,6.105c0,5.06,4.925,12.39,14.598,12.39c7.92,0,9.851-3.486,14.768-13.257l43.614-87.944
                                    c2.11-4.362,4.049-8.018,4.049-11.514C187.705,88.409,184.013,80.39,175.047,80.39z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-16">
                <div className="py-12 bg-gray-100">
                    <h3 className="text-3xl font-semibold text-center mb-20">Technologies</h3>
                    <div className="max-w-8xl mx-auto container">
                        <div className="flex flex-wrap items-center justify-center sm:justify-between">
                            <div className="flex flex-col items-center px-6 w-full sm:w-1/2 md:w-1/4">
                                <div className="w-20 h-20 relative ml-6">
                                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                    <div className="text-white bg-white absolute bottom-0 left-0 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                        <svg className="w-12" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title /><path d="M1.3 24l11.3-11.5L24 24zM0 0h12L0 12.5zM13.4 0L0 14v10l12-12L24 0z" /></svg>
                                    </div>
                                </div>
                                <h4 className="text-lg font-bold leading-tight text-gray-800 text-center pt-5">
                                    Kotlin
                            </h4>
                            </div>
                            <div className="flex flex-col items-center px-6 w-full sm:w-1/2 md:w-1/4">
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
                            <div className="flex flex-col items-center px-6 w-full sm:w-1/2 md:w-1/4">
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
                            <div className="flex flex-col items-center px-6 w-full sm:w-1/2 md:w-1/4">
                                <div className="w-20 h-20 relative ml-6">
                                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                    <div className="text-white absolute bottom-0 left-0 bg-white rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                        <svg className="w-12" height="480pt" viewBox="-28 0 479 480" width="480pt" xmlns="http://www.w3.org/2000/svg"><path d="m80.5 48v32h24v32h-24v96h24v32h-24v32h336l-70-112 70-112zm0 0" fill="#78b9eb" /><path d="m355.941406 160 67.359375-107.761719c1.496094-2.472656 1.554688-5.5625.148438-8.089843-1.402344-2.53125-4.054688-4.113282-6.949219-4.148438h-336c-4.417969 0-8 3.582031-8 8v24h-32v-72h-16v72h-16c-4.417969 0-8 3.582031-8 8v32c0 4.417969 3.582031 8 8 8h16v80h-16c-4.417969 0-8 3.582031-8 8v32c0 4.417969 3.582031 8 8 8h16v232h16v-232h32v24c0 4.417969 3.582031 8 8 8h336c2.894531-.035156 5.546875-1.617188 6.949219-4.148438 1.40625-2.527343 1.347656-5.617187-.148438-8.089843zm-339.441406-72h80v16h-80zm24 32h32v80h-32zm-24 96h80v16h-80zm72 48v-16h16c4.417969 0 8-3.582031 8-8v-32c0-4.417969-3.582031-8-8-8h-16v-80h16c4.417969 0 8-3.582031 8-8v-32c0-4.417969-3.582031-8-8-8h-16v-16h313.601562l-62.402343 99.761719c-1.601563 2.597656-1.601563 5.878906 0 8.476562l62.402343 99.761719zm0 0" fill="#1a6fb0" /></svg>
                                    </div>
                                </div>
                                <h4 className="text-lg font-bold leading-tight text-gray-800 text-center pt-5">
                                    Flutter
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
