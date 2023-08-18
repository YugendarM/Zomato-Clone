import React from "react";
import StarRatings from "react-star-ratings";
import ReadMoreReact from 'read-more-react';
import {BiPlus} from "react-icons/bi";

const Menu = () => {
    return(
        <>
            <div className="flex items-start  ">
                <div className="food flex items-center gap-3">
                    <div className="h-36 w-2/5 md:h-36 md:w-36">
                        <img className="h-full w-full rounded-xl object-cover" src="https://b.zmtcdn.com/data/dish_photos/b65/4b532c6f76e0dcadbe9f71a61059eb65.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*"/>
                    </div>
                    <div className="food_details flex flex-col w-3/5 gap-1 items-start">
                        <div className="">
                            <h3 className="text-lg font-medium">Hyderabad Mutton Dum Biryani</h3>
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <p className="bg-red-300 px-1 py-0.5 text-white text-xs font-normal rounded-md w-">BESTSELLER</p>
                            <div className=" md:hidden">
                                <button className=" flex gap-1 items-center text-sm md:text-lg text-zomato-btnpink border bg-zomato-btnpink/10 border-zomato-btnpink rounded-lg px-3 py-2  hover:bg-gray-100"> <BiPlus/> Add</button>
                            </div>
                        </div>
                        <div className="flex items-end gap-2">
                            <StarRatings
                                rating={2.403}
                                starRatedColor="#f3c117"
                                starDimension="18px"
                                starSpacing="1px"
                                svgIconPath="m25,1 9,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            />
                            <p className="text-sm text-gray-400">423 votes</p>
                        </div>
                        {/* <ReactStars count={5} value={3}/> */}
                        <p className="text-md text-gray-600"> ₹300</p>
                        <p className="text-sm text-gray-500 max-w-2xl">
                            <ReadMoreReact text={"Chicken Biryani (Serves 2) + Egg + Onion raitha + Brinjal Curry + Bread Halwa. Served in microwaveable container, with sweet somph, toothpicks and water bottle (500 ml)"}
                                min={25}
                                ideal={50}
                                max={250}
                                readMoreText={"...read more"}/>
                        </p>
                    </div>
                </div>
                <div className="hidden md:block">
                    <button className=" flex gap-1 items-center text-zomato-btnpink border bg-zomato-btnpink/10 border-zomato-btnpink rounded-lg px-3 py-2  hover:bg-gray-100"> <BiPlus/> Add</button>
                </div>
            </div>
        </>
    );
}

const MenuList = () => {
    return(
        <>
            <section className="flex flex-col gap-2 border-b py-10 relative border-gray-200">
                <h3 className="text-2xl font-medium sticky top-72 z-10 py-2 bg-white">Biryani</h3>
               <div className="flex flex-col gap-4">
                    <Menu/>
                    <Menu/>
                    <Menu/>
                    <Menu/>
                    <Menu/>
               </div>
            </section>
        </>
    );
};

export default MenuList;