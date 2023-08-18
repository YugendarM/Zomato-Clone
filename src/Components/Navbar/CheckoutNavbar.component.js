import React from "react";
import {Link} from "react-router-dom";
import {FaPizzaSlice} from "react-icons/fa";
import {BsChevronDown} from "react-icons/bs";
import {IoArrowBackOutline} from "react-icons/io5";

const CheckoutNavbar = () => {
    return ( 
        <>
            <div className="shadow-lg md:shadow-none flex w-full items-center justify-between container mx-auto px-3 lg:px-52 gap-8 py-4 ">
                <div className="md:w-1/3 text-2xl">
                    <IoArrowBackOutline/>
                </div>
                <div className="md:w-1/3 flex justify-center">
                    <div className="w-24 md:w-36 justify-center">
                        <img className="h-full w-full" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="logo"/>
                    </div>
                </div>

                <div className="flex items-center justify-end md:w-1/3">
                    <div className="flex items-center text-xl gap-10 text-gray-500">
                        <div className="text-3xl  text-blue-400 bg-blue-100 rounded-full border-gray-200 border-2 p-1.5"><FaPizzaSlice/></div>
                        <h3 className="hidden md:flex justify-center items-center text-lg gap-1">Yugendar <span><BsChevronDown/></span></h3>
                        
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default CheckoutNavbar;