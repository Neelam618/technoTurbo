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
                  <svg xmlns="http://www.w3.org/2000/svg" width={43} height={44} viewBox="0 0 43 44" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M37.8735 0C36.1688 0 34.7818 1.37956 34.7818 3.0751C34.7818 4.77063 36.1688 6.15019 37.8735 6.15019C39.5782 6.15019 40.9653 4.77063 40.9653 3.0751C40.9653 1.37956 39.5782 0 37.8735 0ZM37.8735 4.61264C37.021 4.61264 36.3277 3.92305 36.3277 3.0751C36.3277 2.22714 37.021 1.53755 37.8735 1.53755C38.7261 1.53755 39.4194 2.22714 39.4194 3.0751C39.4194 3.92305 38.7261 4.61264 37.8735 4.61264ZM26.6663 1.0513C26.1828 1.0513 25.7909 1.44107 25.7909 1.92193C25.7909 2.4028 26.1828 2.79238 26.6663 2.79238C27.1497 2.79238 27.5416 2.40261 27.5416 1.92193C27.5416 1.44107 27.1497 1.0513 26.6663 1.0513ZM43 13.4535C43 13.9342 42.6081 14.324 42.1247 14.324C41.6412 14.324 41.2493 13.9342 41.2493 13.4535C41.2493 12.9727 41.6412 12.5829 42.1247 12.5829C42.6081 12.5829 43 12.9729 43 13.4535ZM18.1654 2.59019L35.1698 12.4044C35.4079 12.5418 35.5548 12.7951 35.5548 13.0692V33.0573C35.5548 33.3273 35.4123 33.5772 35.1803 33.7161L18.1758 43.8901C18.0533 43.9633 17.915 44 17.7774 44C17.6398 44 17.5016 43.9633 17.3789 43.8901L0.374484 33.7161C0.142219 33.5772 0 33.3271 0 33.0573V13.0692C0 12.7951 0.146857 12.5418 0.384919 12.4044L17.3894 2.59019C17.6296 2.45124 17.9254 2.45124 18.1654 2.59019ZM17.7774 4.14388L33.2524 13.0751L23.0207 19.0887L18.5503 16.4735V12.3004C18.5503 11.8758 18.2042 11.5316 17.7774 11.5316C17.3505 11.5316 17.0044 11.8758 17.0044 12.3004V16.4735L11.9752 19.4158C11.7389 19.554 11.5939 19.8057 11.5939 20.0783V25.8047L1.54586 31.7102V13.5118L17.7774 4.14388ZM2.28227 33.0632L17.7774 42.3341L34.0091 32.6225V14.4162L23.961 20.322V26.4081C23.961 26.6807 23.8161 26.9325 23.5798 27.0706L18.5505 30.0125V33.826C18.5505 34.2506 18.2044 34.5948 17.7776 34.5948C17.3507 34.5948 17.0046 34.2506 17.0046 33.826V30.0125L12.2274 27.2182L2.28227 33.0632Z" fill="#667EEA"/></svg>
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
              <img src="img/Business-Meeting.svg" alt="" style={{width: 600}}/>
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
                <img src="img/automation.svg" alt="" className="bg-green-100 rounded-35 p-5 w-28"/>
                <div className="text-lg mt-5">We Automate businesses</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="img/advertising.svg" alt="" className="bg-indigo-100 rounded-35 p-5 w-28"/>
                <div className="text-lg mt-5">We move your business to online and help in sale by Digital Marketing</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="img/monitor.svg" alt="" className="bg-purple-100 rounded-35 p-5 w-28"/>
                <div className="text-lg mt-5">We help management in decisions by analyzing data</div>
              </div>
              <div className="flex flex-col items-center justify-content-center text-center">
                <img src="img/online-shopping.svg" alt="" className="bg-blue-100 rounded-35 p-5 w-28"/>
                <div className="text-lg mt-5">We provide solutions to expend on E-Commerce</div>
              </div>
            </div>
        </div>
        <div className="container mx-auto">
          {/* <div className="font-bold text-5xl text-center">Services</div> */}
          {/* <div className="grid grid-flow-col grid-cols-3 gap-24 justify-center">
            <div className="bg-card-pattern">
              <h6 className="">Android Apps</h6> */}
              {/* <img src="img/card-bg.png" className="opacity-90 mx-auto w-72" alt="" /> */}
            {/* </div>
            <div className="bg-gray-100">
              <h6 className="text-xl mb-6">Android Apps</h6>
              <img src="img/undraw_Mobile_apps.svg" className="w-52" alt="" />
            </div>
            <div className="bg-gray-100">
              <h6 className="text-xl mb-6">Android Apps</h6>
              <img src="img/undraw_Mobile_apps.svg" className="w-52" alt="" />
            </div>
            
          </div> */}
        </div>

      </>
    );
}
