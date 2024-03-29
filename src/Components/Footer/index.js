import React from "react";
import {BiChevronDown} from "react-icons/bi";
import {GrLanguage} from "react-icons/gr";
import {AiFillLinkedin, AiFillYoutube, AiFillFacebook, AiFillTwitterCircle, AiFillInstagram} from "react-icons/ai";


const Footer = () => {
    return(
        <div className="bg-zomato-lightGrayBg py-5 mt-10">
            <div className="container md:mx-auto lg:px-52 px-2">
            <div className="md:flex items-center justify-between my-8  ">
                <div className="w-32 my-4 md:my-0">
                    <img className="h-full w-full" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="logo"/>
                </div>
                <div className="flex items-center gap-4">
                    <div className="border border-gray-400 py-2 px-2 flex items-center rounded-md gap-2">
                        <div>
                            <img src="https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp" className="h-6 "/>
                        </div>
                        <p>India</p>
                        <BiChevronDown/>
                    </div>
                    <div className="border border-gray-400 py-2 px-2 flex items-center rounded-md gap-2">
                        <GrLanguage/>
                        <p>English</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between flex-wrap">
                <div className="w-1/2 md:w-1/5 mt-4 md:mt-0 flex flex-col items-start gap-1">
                    <h3 className="font-semibold">ABOUT ZOMATO</h3>
                    <p className="text-zomato-fontGray">Who We Are </p>
                    <p className="text-zomato-fontGray">Blog</p>
                    <p className="text-zomato-fontGray">Work with us</p>
                    <p className="text-zomato-fontGray">Invester Relation</p>
                    <p className="text-zomato-fontGray">Report Fraud</p>
                    <p className="text-zomato-fontGray">Press Kit</p>
                    <p className="text-zomato-fontGray">Contact Us</p>
                </div>

                <div className="w-1/2 md:w-1/5 mt-4 md:mt-0  flex flex-col items-start gap-1">
                    <h3 className="font-semibold">ZOMAVERSE</h3>
                    <p className="text-zomato-fontGray">Zomato </p>
                    <p className="text-zomato-fontGray">Blinkit</p>
                    <p className="text-zomato-fontGray">Feeding India</p>
                    <p className="text-zomato-fontGray">Hyperpure</p>
                    <p className="text-zomato-fontGray">Zomaland</p>
                </div>

                <div className=" w-1/2 md:w-1/5 mt-4 md:mt-0  flex flex-col items-start gap-1">
                    <div className="flex flex-col items-start gap-1">
                        <h3 className="font-semibold">FOR RESTAURANTS</h3>
                        <p className="text-zomato-fontGray">Partner With Us </p>
                        <p className="text-zomato-fontGray">Apps For You</p>
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <h3 className="font-semibold">FOR ENTERPRISES</h3>
                        <p className="text-zomato-fontGray">Zomato For Enterprises </p>
                    </div>
                </div>

                <div className="w-1/2 md:w-1/5 mt-4 md:mt-0  flex flex-col items-start gap-1">
                    <h3 className="font-semibold">LEARN MORE</h3>
                    <p className="text-zomato-fontGray">Privacy </p>
                    <p className="text-zomato-fontGray">Security</p>
                    <p className="text-zomato-fontGray">Terms</p>
                    <p className="text-zomato-fontGray">Sitemap</p>
                </div>

                <div className="w-1/2 md:w-1/5 mt-4 md:mt-0  flex flex-col items-start gap-1">
                    <h3 className="font-semibold">SOCIAL LINKS</h3>
                    <div className="flex gap-2 items-center text-2xl my-2">
                        <AiFillInstagram/>
                        <AiFillTwitterCircle/>
                        <AiFillFacebook/>
                        <AiFillYoutube/>
                        <AiFillLinkedin/>
                    </div>
                    <div className="flex flex-col gap-3 my-3">
                        <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" className="h-9"/>
                        <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" className="h-9"/>
                    </div>
                </div>


            </div>
            </div>
        </div>
    );
};

export default Footer;