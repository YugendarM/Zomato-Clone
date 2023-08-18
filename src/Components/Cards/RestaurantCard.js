import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai"
import { RiVipCrownFill } from "react-icons/ri"
import {useDispatch } from "react-redux";

import { getImages } from "../../Redux/Reducer/Images/Image.action";

const FoodCard = (props) => {

    const [image,setImage] = useState({
        images: []
    });

    const dispatch = useDispatch();

    useEffect(()=> {
        props.photos && dispatch(getImages(props.photos)).then((data)=> setImage(data.payload.image));
    },[props.photos]);

    return (
        <>
            <Link to={`/restaurant/${props._id}/overview`}>
                <div className="w-full shadow-lg rounded-xl md:w-80 lg:p-2 lg:shadow-none lg:hover:shadow-lg ">
                    <div className="h-48 w-full relative">
                        <img className="h-full w-96 md:w-80 object-cover rounded-t-xl" src={image.images.length && image.images[0].location}/>
                        <div className="absolute bottom-2">
                            {props.isOff && (
                            <span className=" px-2 bg-blue-600 text-white  text-sm font-medium">{`${props.isOff}`}% OFF up to 100</span>
                            )}
                        </div>

                        <div className="absolute bottom-2  flex justify-stretch">
                            {props.isProOff && (
                            <span className=" px-2 pr-20 bg-gradient-to-r from-black to-gray-700/10 text-white text-sm font-medium flex items-center gap-2"><RiVipCrownFill className="text-yellow-300 "/>Flat {`${props.isProOff}`}% OFF </span>
                            )}
                        </div>
                    </div>

                    

                    <div className="p-2 flex flex-col gap-1 lg:border-b-2 border-gray-200">
                        <div className="flex justify-between items-center ">
                            <h4 className="text-lg font-medium text-gray-700">{props.name}</h4>
                            <p className="bg-green-500 px-1 rounded-md text-white font-medium flex items-center">{props.RestaurantReviewValue}<span><AiFillStar/></span></p>
                        </div>
                        <div className="flex justify-between items-center text-xs text-gray-700">
                            <p className="">{props.cuisine.join(", ")}</p>
                            <p className="">₹{props.averageCost} for one</p>
                        </div>
                        <div className={`flex items-center text-gray-700 w-full ${props.time ? "justify-between": "justify-end"}`}>
                            {
                                props.time && (
                                    <p className="text-zomato-btnpink font-light text-sm">Opens at {props.time}</p>
                                )
                            }
                            <p className="text-sm font-medium flex justify-self-end">{props.duration} min</p>
                        </div>
                    </div>

                    <div className="px-2 lg:px-0 py-3 flex items-center gap-5">
                        <div className="w-10">
                            <img src="https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png?output-format=webp"/>
                        </div>
                        <p className="text-xs w-full text-gray-400">Restaurant partner follows WHO protocol</p>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default FoodCard;