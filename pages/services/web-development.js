import React from 'react'

export default function WebDev() {
    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-3xl text-center my-24">Services</h1>
            <div className="xl:container xl:mx-auto px-4 flex flex-col md:items-center justify-between md:flex-row">
                <div className=" md:w-1/2 w-full mb-14 md:mb-0">
                    <div className="pl-4 border-l border-gray-800 mb-4">
                        <h5 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-10">Web Development</h5>
                    </div>
                    <p className="text-base leading-normal text-gray-600 lg:w-2/3 md:w-10/12 w-full">
                    First Step for your online presence ,we create beautiful websites for all types of 
                    businesses. We create static and dynamic wesites, inegrate with server and databse to provide you real time 
                    interaction and insights. All websites use cloud based solution to keep your data safe, secure, reliable and portable.
                    </p>
                    <p className="text-base leading-normal text-gray-600 lg:w-2/3 md:w-10/12 w-full mt-10">
                    Our websites are optimize for millions of customers. Customes could access pages without delay.
                    Our Webites are well designed, Easy to Use, Optimize for Mobile, Optimize for Search and Social Web, 
                    Social Media Integration and Clear call to Action
                    </p>
                </div>
                <div className="md:w-1/2">
                    <h4 className="text-xl font-semibold mb-12">Our Website Features</h4>
                    <div role="list" aria-label="Features" className="grid grid-cols-1 sm:grid-cols-2 lg:gap-20 gap-6 flex-wrap justify-center items-start">
                        <div role="listitem" className="flex items-center">
                            <img className="w-10" src="https://image.flaticon.com/icons/png/512/98/98677.png" alt />
                            <div className="pl-5">
                                <h5 className="text-base font-semibold leading-none text-gray-800 mb-2">Beautifully Designed / Attrective / High Performance</h5>
                            </div>
                        </div>
                        <div role="listitem" className="flex items-center">
                            <img className="w-10" src="https://image.flaticon.com/icons/png/512/98/98677.png" alt />
                            <div className="pl-5">
                                <h5 className="text-base font-semibold leading-none text-gray-800 mb-2">Responsive / A Mobile-Ready Version</h5>
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
                                <h5 className="text-base font-semibold leading-none text-gray-800 mb-2">Dedicated Hosting</h5>
                            </div>
                        </div>
                        <div role="listitem" className="flex items-center">
                            <img className="w-10" src="https://image.flaticon.com/icons/png/512/98/98677.png" alt />
                            <div className="pl-5">
                                <h5 className="text-base font-semibold leading-none text-gray-800 mb-2">SEO Enabled</h5>
                            </div>
                        </div>
                        <div role="listitem" className="flex items-center">
                            <img className="w-10" src="https://image.flaticon.com/icons/png/512/98/98677.png" alt />
                            <div className="pl-5">
                                <h5 className="text-base font-semibold leading-none text-gray-800 mb-2">Social Media Integration</h5>
                            </div>
                        </div>
                        <div role="listitem" className="flex items-center">
                            <img className="w-10" src="https://image.flaticon.com/icons/png/512/98/98677.png" alt />
                            <div className="pl-5">
                                <h5 className="text-base font-semibold leading-none text-gray-800 mb-2">Secure, Reliable and Portable</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
