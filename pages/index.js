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
          <div className="flex justify-between items-center gap-x-px container my-16 mx-auto px-4">
            <div className="">
              <div className="">
                <svg className="inline" height="5rem" viewBox="0 0 512 512" width="5rem" xmlns="http://www.w3.org/2000/svg"><path d="m416 512h-320c-53.023438 0-96-42.976562-96-96v-320c0-53.023438 42.976562-96 96-96h320c53.023438 0 96 42.976562 96 96v320c0 53.023438-42.976562 96-96 96zm0 0" fill="#e3f8fa"/><path d="m348.816406 265.121094-5.726562-16.273438-61.792969 61.792969c-6.050781 6.03125-14.097656 9.359375-22.625 9.359375-8.542969 0-16.574219-3.328125-22.625-9.375l-45.328125-45.328125c-6.046875-6.050781-9.375-14.082031-9.375-22.625s3.328125-16.574219 9.375-22.625c6.050781-6.046875 14.082031-9.375 22.625-9.375s16.578125 3.328125 22.625 9.375l22.703125 22.707031 60.847656-60.851562-4.09375-11.628906-1.890625-11.28125c-1.199218-7.230469-5.949218-13.230469-12.734375-16.046876-6.800781-2.832031-14.402343-1.953124-20.367187 2.335938l-29.648438 21.453125-29.96875-21.503906c-6.015625-4.238281-13.632812-5.085938-20.402344-2.253907-6.71875 2.816407-11.4375 8.800782-12.621093 15.984376l-5.808594 36.128906-36.335937 6.03125c-7.234376 1.183594-13.214844 5.949218-16.03125 12.734375-2.816407 6.785156-1.953126 14.402343 2.335937 20.367187l21.453125 29.648438-21.503906 29.96875c-4.238282 6.015625-5.085938 13.648437-2.253906 20.398437 2.816406 6.722657 8.800781 11.441407 15.984374 12.625l36.128907 5.808594 6.046875 36.335937c1.183594 7.214844 5.902344 13.199219 12.625 16.015626 6.765625 2.832031 14.398437 1.984374 20.460937-2.304688l29.648438-21.453125 29.890625 21.453125c3.664062 2.609375 7.917968 3.953125 12.238281 3.953125 2.734375 0 5.488281-.542969 8.128906-1.632813 6.785157-2.816406 11.535157-8.800781 12.734375-16.015624l5.808594-36.128907 36.335938-6.03125c7.214843-1.183593 13.183593-5.902343 16.015624-12.625 2.832032-6.75 1.984376-14.382812-2.304687-20.460937zm0 0" fill="#26c6da"/><path d="m258.671875 298.671875c-2.734375 0-5.457031-1.039063-7.535156-3.121094l-45.328125-45.328125c-4.160156-4.160156-4.160156-10.910156 0-15.085937s10.910156-4.160157 15.085937 0l37.792969 37.792969 107.121094-107.121094c4.160156-4.160156 10.910156-4.160156 15.085937 0s4.160157 10.910156 0 15.085937l-114.671875 114.671875c-2.09375 2.050782-4.832031 3.105469-7.550781 3.105469zm0 0" fill="#8ce1eb"/></svg>
                <span className="ml-6 font-semibold text-xl">We Automate businesses</span>                            
              </div>
              <div className="py-6">
                <svg className="inline" height="5rem" viewBox="0 0 512 512" width="5rem" xmlns="http://www.w3.org/2000/svg"><path d="m416 512h-320c-53.023438 0-96-42.976562-96-96v-320c0-53.023438 42.976562-96 96-96h320c53.023438 0 96 42.976562 96 96v320c0 53.023438-42.976562 96-96 96zm0 0" fill="#e3f8fa"/><path d="m348.816406 265.121094-5.726562-16.273438-61.792969 61.792969c-6.050781 6.03125-14.097656 9.359375-22.625 9.359375-8.542969 0-16.574219-3.328125-22.625-9.375l-45.328125-45.328125c-6.046875-6.050781-9.375-14.082031-9.375-22.625s3.328125-16.574219 9.375-22.625c6.050781-6.046875 14.082031-9.375 22.625-9.375s16.578125 3.328125 22.625 9.375l22.703125 22.707031 60.847656-60.851562-4.09375-11.628906-1.890625-11.28125c-1.199218-7.230469-5.949218-13.230469-12.734375-16.046876-6.800781-2.832031-14.402343-1.953124-20.367187 2.335938l-29.648438 21.453125-29.96875-21.503906c-6.015625-4.238281-13.632812-5.085938-20.402344-2.253907-6.71875 2.816407-11.4375 8.800782-12.621093 15.984376l-5.808594 36.128906-36.335937 6.03125c-7.234376 1.183594-13.214844 5.949218-16.03125 12.734375-2.816407 6.785156-1.953126 14.402343 2.335937 20.367187l21.453125 29.648438-21.503906 29.96875c-4.238282 6.015625-5.085938 13.648437-2.253906 20.398437 2.816406 6.722657 8.800781 11.441407 15.984374 12.625l36.128907 5.808594 6.046875 36.335937c1.183594 7.214844 5.902344 13.199219 12.625 16.015626 6.765625 2.832031 14.398437 1.984374 20.460937-2.304688l29.648438-21.453125 29.890625 21.453125c3.664062 2.609375 7.917968 3.953125 12.238281 3.953125 2.734375 0 5.488281-.542969 8.128906-1.632813 6.785157-2.816406 11.535157-8.800781 12.734375-16.015624l5.808594-36.128907 36.335938-6.03125c7.214843-1.183593 13.183593-5.902343 16.015624-12.625 2.832032-6.75 1.984376-14.382812-2.304687-20.460937zm0 0" fill="#26c6da"/><path d="m258.671875 298.671875c-2.734375 0-5.457031-1.039063-7.535156-3.121094l-45.328125-45.328125c-4.160156-4.160156-4.160156-10.910156 0-15.085937s10.910156-4.160157 15.085937 0l37.792969 37.792969 107.121094-107.121094c4.160156-4.160156 10.910156-4.160156 15.085937 0s4.160157 10.910156 0 15.085937l-114.671875 114.671875c-2.09375 2.050782-4.832031 3.105469-7.550781 3.105469zm0 0" fill="#8ce1eb"/></svg>
                <span className="ml-6 font-semibold text-xl">We move your business to online and help in sale by Digital Marketing</span>
              </div>
              <div className="">
                <svg className="inline" height="5rem" viewBox="0 0 512 512" width="5rem" xmlns="http://www.w3.org/2000/svg"><path d="m416 512h-320c-53.023438 0-96-42.976562-96-96v-320c0-53.023438 42.976562-96 96-96h320c53.023438 0 96 42.976562 96 96v320c0 53.023438-42.976562 96-96 96zm0 0" fill="#e3f8fa"/><path d="m348.816406 265.121094-5.726562-16.273438-61.792969 61.792969c-6.050781 6.03125-14.097656 9.359375-22.625 9.359375-8.542969 0-16.574219-3.328125-22.625-9.375l-45.328125-45.328125c-6.046875-6.050781-9.375-14.082031-9.375-22.625s3.328125-16.574219 9.375-22.625c6.050781-6.046875 14.082031-9.375 22.625-9.375s16.578125 3.328125 22.625 9.375l22.703125 22.707031 60.847656-60.851562-4.09375-11.628906-1.890625-11.28125c-1.199218-7.230469-5.949218-13.230469-12.734375-16.046876-6.800781-2.832031-14.402343-1.953124-20.367187 2.335938l-29.648438 21.453125-29.96875-21.503906c-6.015625-4.238281-13.632812-5.085938-20.402344-2.253907-6.71875 2.816407-11.4375 8.800782-12.621093 15.984376l-5.808594 36.128906-36.335937 6.03125c-7.234376 1.183594-13.214844 5.949218-16.03125 12.734375-2.816407 6.785156-1.953126 14.402343 2.335937 20.367187l21.453125 29.648438-21.503906 29.96875c-4.238282 6.015625-5.085938 13.648437-2.253906 20.398437 2.816406 6.722657 8.800781 11.441407 15.984374 12.625l36.128907 5.808594 6.046875 36.335937c1.183594 7.214844 5.902344 13.199219 12.625 16.015626 6.765625 2.832031 14.398437 1.984374 20.460937-2.304688l29.648438-21.453125 29.890625 21.453125c3.664062 2.609375 7.917968 3.953125 12.238281 3.953125 2.734375 0 5.488281-.542969 8.128906-1.632813 6.785157-2.816406 11.535157-8.800781 12.734375-16.015624l5.808594-36.128907 36.335938-6.03125c7.214843-1.183593 13.183593-5.902343 16.015624-12.625 2.832032-6.75 1.984376-14.382812-2.304687-20.460937zm0 0" fill="#26c6da"/><path d="m258.671875 298.671875c-2.734375 0-5.457031-1.039063-7.535156-3.121094l-45.328125-45.328125c-4.160156-4.160156-4.160156-10.910156 0-15.085937s10.910156-4.160157 15.085937 0l37.792969 37.792969 107.121094-107.121094c4.160156-4.160156 10.910156-4.160156 15.085937 0s4.160157 10.910156 0 15.085937l-114.671875 114.671875c-2.09375 2.050782-4.832031 3.105469-7.550781 3.105469zm0 0" fill="#8ce1eb"/></svg>
                <span className="ml-6 font-semibold text-xl">We help management in decisions by analyzing data</span>
              </div>
              <div className="py-6">
                <svg className="inline" height="5rem" viewBox="0 0 512 512" width="5rem" xmlns="http://www.w3.org/2000/svg"><path d="m416 512h-320c-53.023438 0-96-42.976562-96-96v-320c0-53.023438 42.976562-96 96-96h320c53.023438 0 96 42.976562 96 96v320c0 53.023438-42.976562 96-96 96zm0 0" fill="#e3f8fa"/><path d="m348.816406 265.121094-5.726562-16.273438-61.792969 61.792969c-6.050781 6.03125-14.097656 9.359375-22.625 9.359375-8.542969 0-16.574219-3.328125-22.625-9.375l-45.328125-45.328125c-6.046875-6.050781-9.375-14.082031-9.375-22.625s3.328125-16.574219 9.375-22.625c6.050781-6.046875 14.082031-9.375 22.625-9.375s16.578125 3.328125 22.625 9.375l22.703125 22.707031 60.847656-60.851562-4.09375-11.628906-1.890625-11.28125c-1.199218-7.230469-5.949218-13.230469-12.734375-16.046876-6.800781-2.832031-14.402343-1.953124-20.367187 2.335938l-29.648438 21.453125-29.96875-21.503906c-6.015625-4.238281-13.632812-5.085938-20.402344-2.253907-6.71875 2.816407-11.4375 8.800782-12.621093 15.984376l-5.808594 36.128906-36.335937 6.03125c-7.234376 1.183594-13.214844 5.949218-16.03125 12.734375-2.816407 6.785156-1.953126 14.402343 2.335937 20.367187l21.453125 29.648438-21.503906 29.96875c-4.238282 6.015625-5.085938 13.648437-2.253906 20.398437 2.816406 6.722657 8.800781 11.441407 15.984374 12.625l36.128907 5.808594 6.046875 36.335937c1.183594 7.214844 5.902344 13.199219 12.625 16.015626 6.765625 2.832031 14.398437 1.984374 20.460937-2.304688l29.648438-21.453125 29.890625 21.453125c3.664062 2.609375 7.917968 3.953125 12.238281 3.953125 2.734375 0 5.488281-.542969 8.128906-1.632813 6.785157-2.816406 11.535157-8.800781 12.734375-16.015624l5.808594-36.128907 36.335938-6.03125c7.214843-1.183593 13.183593-5.902343 16.015624-12.625 2.832032-6.75 1.984376-14.382812-2.304687-20.460937zm0 0" fill="#26c6da"/><path d="m258.671875 298.671875c-2.734375 0-5.457031-1.039063-7.535156-3.121094l-45.328125-45.328125c-4.160156-4.160156-4.160156-10.910156 0-15.085937s10.910156-4.160157 15.085937 0l37.792969 37.792969 107.121094-107.121094c4.160156-4.160156 10.910156-4.160156 15.085937 0s4.160157 10.910156 0 15.085937l-114.671875 114.671875c-2.09375 2.050782-4.832031 3.105469-7.550781 3.105469zm0 0" fill="#8ce1eb"/></svg>
                <span className="ml-6 font-semibold text-xl">We provide solutions to expend on E-Commerce Mobile</span>
              </div>
              <button className="bg-blue-500 mt-10 hover:bg-blue-700 text-xl text-white font-bold py-5 px-20 rounded-lg">Start With Us</button>
            </div>
            <div>
              {/* <Teamwork /> */}
              <img src="img/Teamwork-&-Discussion.svg" alt="" style={{width: 600}}/>
            </div>    
        </div>                             
      </>
    );
}
