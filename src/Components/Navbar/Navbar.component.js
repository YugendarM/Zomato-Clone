import React, { useState } from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import {BsChevronDown} from "react-icons/bs";
import {AiFillCaretDown} from "react-icons/ai";
import {LuSearch} from "react-icons/lu";

//component
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";


const SmallNav = ({SignIn,SignUp}) => {

    const [isDropDown, setIsDropDown] = useState(false);

    const openDropDown = () => setIsDropDown((prev)=>!prev);

    return (
        <>
            <div className="flex justify-between items-center px-3 py-3 mx-1 shadow-md">
                <div className="w-28">
                    <img className="h-full w-full" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="logo"/>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-zomato-btnpink text-white text-sm font-semibold rounded-full px-2 py-1.5">Use App</button>
                    <div onClick={openDropDown} className="relative   text-xl text-blue-400 bg-blue-100 rounded-full border-gray-200 border-2 p-1.5">
                        <FaPizzaSlice/>
                        {
                            isDropDown && (
                                <div className="z-20 flex flex-col gap-3 absolute rounded-xl shadow-lg py-2 px-3 text-gray-700 bg-white w-40 top-12 -right-2">
                                    <button onClick={SignIn}>Sign In</button>
                                    <button onClick={SignUp}>Sign Up</button>
                                </div>
                            )
                        } 
                     </div>
                </div>
            </div>
        </>
    );
};

const MediumNav = () => {
    return (
        <>
            <div className=" mx-2">
                <div className="flex justify-between items-center  px-2 py-5">
                    <div className="w-32">
                        <img className="h-full w-full" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="logo"/>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="text-3xl  text-blue-400 bg-blue-100 rounded-full border-gray-200 border-2 p-1.5"><FaPizzaSlice/></div>
                        <h3 className="flex justify-center items-center text-lg gap-1">Yugendar <span><BsChevronDown/></span></h3>
                    </div>
                </div>

                <div className="px-2 py-4 rounded-md flex items-center gap-3" style={{boxShadow: "rgba(28, 28, 28, 0.1) 0px 1px 8px"}}>
                    <div className=" flex items-center justify-between w-1/3">
                        <div className="flex items-center gap-1">
                            <MdLocationOn className="text-zomato-btnpink text-2xl"/>
                            <p className="text-gray-500">Periyamet, Chennai</p>
                        </div>
                        <AiFillCaretDown/>
                    </div>
                    <div className="border-l-2 border-gray-300 flex justify-center items-center px-3">
                        <LuSearch className="text-2xl text-gray-400"/>
                    </div>
                    <div className="w-2/3">
                        <input className="w-full" type="text" placeholder="Search for restaurant, cuisine or a dish"/>
                    </div>
                </div>
            </div>
        </>
    );
};

const LargeNav = ({SignIn,SignUp}) => {
    return (
        <>
            
            <div className="flex items-center  container mx-auto px-52 gap-8 py-4">
                <div className="w-36">
                    <img className="h-full w-full" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="logo"/>
                </div>

                <div className="flex items-center justify-between w-full">

                    <div className="px-2 h-12 rounded-md flex items-center gap-3 w-2/3" style={{boxShadow: "rgba(28, 28, 28, 0.1) 0px 1px 8px"}}>
                        <div className=" flex items-center justify-between w-1/3">
                            <div className="flex items-center gap-1">
                                <MdLocationOn className="text-zomato-btnpink text-2xl"/>
                                <p className="text-gray-500">Periyamet, Chennai</p>
                            </div>
                            <AiFillCaretDown/>
                        </div>
                        <div className="border-l-2 border-gray-300 flex justify-center items-center px-3">
                            <LuSearch className="text-2xl text-gray-400"/>
                        </div>
                        <div className="w-2/3">
                            <input className="w-full" type="text" placeholder="Search for restaurant, cuisine or a dish"/>
                        </div>
                    </div>

                    
                    <div className="flex items-center text-xl gap-10 text-gray-500">
                        {/* <div className="text-3xl  text-blue-400 bg-blue-100 rounded-full border-gray-200 border-2 p-1.5"><FaPizzaSlice/></div>
                        <h3 className="flex justify-center items-center text-lg gap-1">Yugendar <span><BsChevronDown/></span></h3> */}
                        <button onClick={SignIn}>Log in</button>
                        <button onClick={SignUp}>Sign up</button>
                    </div>
                </div>
            </div>
        </>
    );
};






const Navbar = () => {


    const [signInOpen,setsignInOpen] = useState(false);
    const [signUpOpen,setsignUpOpen] = useState(false);

    const OpenSignInModal = () => setsignInOpen(true);
    const OpenSignUpModal = () => setsignUpOpen(true);

    return (
        <>
            <SignIn isOpen={signInOpen} setIsOpen={setsignInOpen}/>
            <SignUp isOpen={signUpOpen} setIsOpen={setsignUpOpen}/>
            <div className="md:hidden">
                <nav>
                    <SmallNav SignIn={OpenSignInModal} SignUp = {OpenSignUpModal}/>
                </nav>
            </div>

            <div className="hidden md:block lg:hidden">
                <nav>
                    <MediumNav/>
                </nav>
            </div>

            <div className="hidden lg:block ">
                <nav>
                    <LargeNav SignIn={OpenSignInModal} SignUp = {OpenSignUpModal}/>
                </nav>
            </div>
        </>
    );
};

export default Navbar;