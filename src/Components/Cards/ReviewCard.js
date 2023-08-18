import React from "react";
import {PiShareFatBold} from "react-icons/pi";
import {BsHandThumbsUp} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai";
import {BiCommentDetail} from "react-icons/bi";


const ReviewCard = () => {
    return(
        <>
            <div>
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10">
                        <img className="h-full w-full rounded-full" src="https://b.zmtcdn.com/data/user_profile_pictures/dd3/44ca69e7c5537a58df32847f23ceadd3.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"/>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">Swapna Ravichandran</h3>
                        <p className="text-sm font-light text-gray-500">11 reviews</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <p className="bg-green-500 px-1 rounded-md text-sm text-white font-medium flex items-center">4<span><AiFillStar/></span></p>
                    <p className="font-light">DELIVERY</p>
                    <p className="text-gray-500">Jun 16, 2021</p>
                </div>

                <div>
                    <p className="text-lg text-gray-500">The quantity was really good and there was a good meat to rice ratio as well. SS has consistently been a family favourite for a while now!</p>
                </div>

                <div className="">
                    {true && (
                        <div className="w-60 h-40 overflow-hidden rounded-lg"> 
                            <img className="w-full h-full object-cover hover:scale-110 transform transition duration-500 ease-in-out" src="https://b.zmtcdn.com/data/reviews_photos/6e9/af6f273245547725b7628b41ef2fc6e9_1623830336.jpg?output-format=webp"/>
                        </div>

                    )}
                </div>
                <div>
                    <p className="text-gray-300">0 Votes for helpful, 1 Comment</p>
                </div>

                <div className="flex gap-8">
                    <button className="flex items-center gap-1 text-gray-400 text-md rounded-md py-1 px-1.5 hover:bg-gray-100"><BsHandThumbsUp/>Helpful</button>
                    <button className="flex items-center gap-1 text-gray-400 text-md rounded-md py-1 px-1.5 hover:bg-gray-100"><BiCommentDetail/>Comment</button>
                    <button className="flex items-center gap-1 text-gray-400 text-md rounded-md py-1 px-1.5 hover:bg-gray-100"><PiShareFatBold/>Share</button>
                </div>
            </div>
        </>
    );
};

export default ReviewCard;