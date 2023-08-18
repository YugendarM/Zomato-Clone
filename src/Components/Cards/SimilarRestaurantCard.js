import React from "react";
import { Link } from "react-router-dom";
import {AiFillStar} from "react-icons/ai"

const SimilarRestaurantCard = (props) => {
    return (
        <>
            <Link to={`/restaurant/${123}`}>
                <div className="w-full shadow-lg rounded-xl md:w-60 lg:p-2 lg:shadow-none lg:hover:shadow-lg ">
                    <div className="h-48 w-full relative">
                        <img className="h-full w-full object-cover rounded-t-xl" src={props.photos.length && props.photos[0]}/>
                        <div className="absolute bottom-2">
                            {props.isOff && (
                            <span className=" px-2 bg-blue-600 text-white  text-sm font-medium">{`${props.isOff}`}% OFF up to 100</span>
                            )}
                        </div>
                    </div>
                    

                    <div className="p-2 flex flex-col gap-1 ">
                        <div className="flex justify-between items-center ">
                            <h4 className="text-xl font-medium text-gray-700">{props.name}</h4>
                            {/* <p className="bg-green-500 px-1 rounded-md text-white font-medium flex items-center">{props.RestaurantReviewValue}<span><AiFillStar/></span></p> */}
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 border-r border-gray-300 pr-3">
                                {props.isDiningRating && (<p className="bg-green-500 px-1 rounded-md text-white font-medium flex items-center">{props.isDiningRating}<span><AiFillStar/></span></p>)}
                                <p className="text-xs">DINING</p>
                            </div>
                            <div className="flex items-center gap-2">
                                {props.isDeliveryRating && (<p className="bg-green-500 px-1 rounded-md text-white font-medium flex items-center">{props.isDeliveryRating}<span><AiFillStar/></span></p>)}
                                <p  className="text-xs">DELIVERY</p>
                            </div>
                        </div>

                        <div className=" justify-between items-center text-md text-gray-700">
                            <p className="">{props.cuisine.join(", ")}</p>
                            <p className="text-md text-gray-400">{props.address}</p>
                        </div>
                   
                    </div>

                    
                </div>
            </Link>
        
        </>
    );
};

export default SimilarRestaurantCard;