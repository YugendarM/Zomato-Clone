import React from "react";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { RiDirectionLine } from "react-icons/ri";
import { BsBookmarkPlus } from "react-icons/bs";
import { PiShareFatLight } from "react-icons/pi";


const RestaurantDetails = (props) => {
    return (
        <>
            <div className="px-3 py-3 md:py-0  flex flex-col gap-3 my-6 sticky top-0 right-0 z-20 bg-white">
                <div className="md:flex justify-between items-center">
                    <h1 className="text-4xl font-normal">{props.name}</h1>
                    <div className="my-3 md:my-0 flex items-center gap-10">
                        <div className="dining reveiw flex items-center  gap-2">
                            <p className="bg-green-600 text-white flex items-center rounded-lg px-1 py-0.5">{props.rating || 0}<AiFillStar/> </p>
                            <div className="text-sm">
                                <p>{props.rating || 0}</p>
                                <p className="border-dashed border-b-2 text-gray-500">Dining Reviews</p>
                            </div>
                        </div>

                        <div className="delivery reveiw flex items-center gap-2">
                            <p className="bg-green-700 text-white flex items-center rounded-lg px-1 py-0.5">4.3<AiFillStar/> </p>
                            <div className="text-sm">
                                <p>{props.rating || 0}</p>
                                <p className="border-dashed border-b-2 text-gray-500">Delivery Reviews</p>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div>
                    <p className="text-md font-normal text-gray-500">{props.cuisine}</p>
                    <p className="text-md font-normal text-gray-400">{props.address}</p>
                </div>

                <p className="text-md text-gray-500 flex items-center gap-2"><span className="text-yellow-500 ">Open Now</span> <span className="flex items-center gap-2">- {props.restaurantTimings} (Today) <HiOutlineInformationCircle className="text-gray-400 cursor-pointer"/></span> </p>

                <div className="flex gap-3">
                    <button className="flex gap-2 items-center border border-gray-500 rounded-lg px-2.5 py-1.5 text-gray-700 hover:bg-gray-100"><RiDirectionLine className="text-zomato-btnpink"/> Direction</button>
                    <button className="flex gap-2 items-center border border-gray-500 rounded-lg px-2.5 py-1.5 text-gray-700 hover:bg-gray-100"><BsBookmarkPlus className="text-zomato-btnpink"/> Bookmark</button>
                    <button className="flex gap-2 items-center border border-gray-500 rounded-lg px-2.5 py-1.5 text-gray-700 hover:bg-gray-100"><PiShareFatLight className="text-zomato-btnpink"/> Share</button>
                </div>

            </div>
        </>
    );
};

export default RestaurantDetails;