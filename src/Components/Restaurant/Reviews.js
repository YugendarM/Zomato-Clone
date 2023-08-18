import React, { useState } from "react";
import ReviewCard from "../Cards/ReviewCard";
import StarRatings from "react-rating-stars-component";
import {IoMdArrowDropdown} from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import ReviewModalCard from "../Cards/ReviewModalCard";

 const Reviews = () => {

    const [reviews, Setreviews] = useState(["","",""]);
    const [isOpen,setIsOpen] = useState(false);

    const OpenReviewModal = () => {
        setIsOpen(true);
    }
    

    return (
        <>
        <ReviewModalCard isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-medium">SS Hyderabad Biryani Reviews</h1>
                <button className="flex items-center text-xl text-gray-500">All Reviews<IoMdArrowDropdown/></button>
            </div>
            <div className="relative flex flex-col-reverse md:flex-row">
                <div className="md:w-4/6 flex flex-col gap-10 px-3 md:px-0">
                    {reviews.map((review) =>(
                        <ReviewCard/>
                    ))}
                </div>
                <aside style={{height:"fit-content"}} className="bg-white flex flex-col gap-2 md:sticky md:right-0 md:top-72 h-full w-full md:w-2/6 py-4 md:m-3 md:rounded-xl md:shadow-lg ">
                    <div>
                        <h1 className="text-xl text-zomato-btnpink px-3 py-2">Add Review of your experience for</h1>
                        <div className="text-lg flex items-center gap-4 px-3">
                            <div className="flex items-center gap-2">
                                <input type="radio" name="review" id="dining"/>
                                <label htmlFor="dining">Dining</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="radio" name="review" id="delivery"/>
                                <label htmlFor="delivery">Dining</label>
                            </div>
                        </div>
                        <div className="px-3 py-3">
                            <StarRatings count={5} size={24}/>
                        </div>
                        <div className="px-3 ">
                            <button className="text-zomato-btnpink flex items-end" onClick={OpenReviewModal}>Write a Review<IoMdArrowDropright className="text-xl"/></button>
                        </div>
                    </div>
                </aside>
            </div>
        </div>

        </>
    );
};

export default Reviews;