import React from 'react'

export default function WebDev() {
    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-3xl text-center my-24">Services</h1>
            <div className="xl:container xl:mx-auto px-4 flex flex-col md:items-center justify-between md:flex-row">
                <div className=" md:w-1/2 w-full mb-14 md:mb-0">
                    <div className="pl-4 border-l border-gray-800 mb-4">
                        <h5 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-10">Data Analytics</h5>
                    </div>
                    <div className="text-base leading-normal text-gray-600 lg:w-2/3 md:w-10/12 w-full">
                    Data visualization : Create insights, reports, and dashboards<br></br>
                    Embedded analytics : Integrate analytics into your product, portal, or app
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}
