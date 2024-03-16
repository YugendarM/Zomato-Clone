import React, { useState, useEffect } from "react";
import {BiSolidRightArrow} from "react-icons/bi";
import {AiOutlineCheckCircle} from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import {FaRegCopy,FaDirections} from "react-icons/fa";
import SimilarRestaurantCard from "../Cards/SimilarRestaurantCard";
import Slider from "react-slick";
import settings from "../Settings/settings";
import ReviewCard from "../Cards/ReviewCard";
import MenuCard from "../Cards/MenuCard";

import { UseSelector, useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { getImages } from "../../Redux/Reducer/Images/Image.action";
import { getReviews } from "../../Redux/Reducer/Reviews/Reviews.action";

// import classnames from "classnames";

// console.log(classnames);

//openStreet Map
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'




const Overview = () => {

    const [menuImages,setMenuImages] = useState({images:[]});
    const [Reviews,setReviews] = useState([]);

    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
    );

    const dispatch = useDispatch();

    useEffect(()=>{
       if(reduxState){
        console.log(reduxState);
        dispatch(getImages(reduxState?._id)).then((data)=>{
            //instead of _id, menuImages shld come
            // console.log(data.payload.images);
            const images = [];
            data.payload.image?.image?.map(({location}) => images.push(location));
            setMenuImages(images);
        });
        dispatch(getReviews(reduxState?._id)).then((data)=>{
            console.log(data.payload.reveiws);
            setReviews(data.payload.reviews);
        })

       }
    },[]);

    const {id} =useParams();

    const similarRestaurant = [
        {
            photos:["https://b.zmtcdn.com/data/pictures/chains/8/18567738/d923bcbc97078856eb8661d7ef1a3c4b_featured_v2.jpg"],
            name:"Salem RR Biryani",
            cuisine:["Biryani","South Indian"],
            address:"Triplicane,Chennai",
            isDiningRating: 4.4,
            isDeliveryRating: 3.4 
        },
        {
            photos:["https://b.zmtcdn.com/data/pictures/chains/8/18567738/d923bcbc97078856eb8661d7ef1a3c4b_featured_v2.jpg"],
            name:"Salem RR Biryani",
            cuisine:["Biryani","South Indian"],
            address:"Triplicane,Chennai",
            isDiningRating: 4.4,
            isDeliveryRating: 3.4 
        },
        {
            photos:["https://b.zmtcdn.com/data/pictures/chains/8/18567738/d923bcbc97078856eb8661d7ef1a3c4b_featured_v2.jpg"],
            name:"Salem RR Biryani",
            cuisine:["Biryani","South Indian"],
            address:"Triplicane,Chennai",
            isDiningRating: 4.4,
            isDeliveryRating: 3.4 
        },
        {
            photos:["https://b.zmtcdn.com/data/pictures/chains/8/18567738/d923bcbc97078856eb8661d7ef1a3c4b_featured_v2.jpg"],
            name:"Salem RR Biryani",
            cuisine:["Biryani","South Indian"],
            address:"Triplicane,Chennai",
            isDiningRating: 4.4,
            isDeliveryRating: 3.4 
        },
        {
            photos:["https://b.zmtcdn.com/data/pictures/chains/8/18567738/d923bcbc97078856eb8661d7ef1a3c4b_featured_v2.jpg"],
            name:"Salem RR Biryani",
            cuisine:["Biryani","South Indian"],
            address:"Triplicane,Chennai",
            isDiningRating: 4.4,
            isDeliveryRating: 3.4 
        },
        {
            photos:["https://b.zmtcdn.com/data/pictures/chains/8/18567738/d923bcbc97078856eb8661d7ef1a3c4b_featured_v2.jpg"],
            name:"Salem RR Biryani",
            cuisine:["Biryani","South Indian"],
            address:"Triplicane,Chennai",
            isDiningRating: 4.4,
            isDeliveryRating: 3.4 
        },
        {
            photos:["https://b.zmtcdn.com/data/pictures/chains/8/18567738/d923bcbc97078856eb8661d7ef1a3c4b_featured_v2.jpg"],
            name:"Salem RR Biryani",
            cuisine:["Biryani","South Indian"],
            address:"Triplicane,Chennai",
            isDiningRating: 4.4,
            isDeliveryRating: 3.4 
        },

    ];

    const arr = reduxState?.mapLocation.split(",").map((item)=>(parseFloat(item)));
    // const parsedArr = arr.map((item)=>(
    //     item + 1
    // ))

    console.log(arr)


    // const arr = [1,2,3,4,5];
    // const arr2 = arr.map((item)=> (
    //     item+10
    // ))

    // console.log(arr2);


    const getLatLong = (mapAddress) => {
        return mapAddress?.split(",").map((item)=>(parseFloat(item)));
    }

    const updateSettings = {...settings, slidesToShow:3};

    return(
        <>
        <div className="px-3 md:px-0 border-b-2 border-gray-100 mb-20">
            <div className="md:hidden">
               <Link> <p className="flex items-center gap-1 text-zomato-btnpink ">More Info <BiSolidRightArrow className="text-xs"/> </p></Link>
            </div>

            <div className="md:flex w-full relative">
                <div className="w-full md:w-4/6 flex flex-col gap-5">
                    <h1 className="text-2xl font-medium">About the place</h1>

                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between ">
                            <h3 className="text-xl font-medium">Menu</h3>
                            <Link to={`/restaurant/${id}/menu`}><p className="flex items-center text-sm text-zomato-btnpink gap-1">See all menus <BiSolidRightArrow/></p></Link>
                        </div>

                        <div className="flex gap-10">
                            <MenuCard image={[menuImages]} title="Food Menu" pages="2" />
                            <MenuCard image={["https://b.zmtcdn.com/data/menus/607/68607/dcd9399bf1e3c08a9bc637c80ca3eb1a.jpg?"]} title="Food Menu" pages="2" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-medium">Cuisines</h3>
                        <div className="flex items-center gap-3">
                            {reduxState?.cuisine.map((data) => (
                                <div>
                                    <p className="text-green-600 font-light px-2.5 py-1.5 border border-gray-300 rounded-full">{data}</p>
                                </div>

                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-medium">Average Cost</h3>
                        <div className="flex flex-col gap-1 items-start">
                            <p className="text-lg text-gray-500">₹{reduxState?.averageCost} for two people (approx.)</p>
                            <p className="text-md text-gray-400">Exclusive of applicable taxes and charges, if any</p>
                            <span className="text-xs py-1 text-gray-300 border-b border-dashed border-gray-300">How do we calculate cost for two?</span>
                            <div>
                            <p className="text-lg text-gray-500">Cash and Card accepted</p>
                            <p className="text-lg text-gray-500">Digital payments accepted</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-medium">More Info</h3>
                        <div className="flex flex-wrap gap-2 ">
                            {["Home Delivery","Takeaway Available","Indoor Seating"].map((info) => (
                                <span className="flex text-gray-500 text-md items-center w-2/5  gap-2"><AiOutlineCheckCircle className=" text-xl text-green-700"/>{info}</span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h1 className="text-xl font-medium">Similar Restaurants</h1>
                        <div>
                            <Slider {...updateSettings}>
                            {similarRestaurant.map((restaurant) => (
                                <SimilarRestaurantCard {...restaurant}/>
                            )) }
                            </Slider>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 border-y-2 py-6 border-gray-100">
                        <h1 className="text-xl font-medium">Review Highlights</h1>
                        <div className="flex flex-wrap gap-3">
                            {["Good Delivery","Fast Delivery","Portion Size","Value for Money","Good Taste","Quantity","Quality"].map((highlight) => (
                                <p className="py-1.5 px-3 text-md text-gray-500 border border-gray-300 rounded-full">{highlight}</p>
                            ))}
                        </div>
                        
                    </div>

                    <div>
                        <ReviewCard/>
                    </div>

                    <div>
                        <Link to={`/restaurant/${id}/reviews`}><p className="flex items-center text-md text-zomato-btnpink gap-1">View all reviews <BiSolidRightArrow/></p></Link>
                    </div>

                
                </div>


                <aside style={{height:"fit-content"}} className="sticky right-0 top-72 h-full w-full md:w-2/5 md:m-3 rounded-xl shadow-lg ">
                    <div className="w-full p-3  flex flex-col gap-3">
                        <div>
                            <h3 className="text-xl font-medium">Call</h3>
                            <p className="text-zomato-btnpink">+91 {reduxState?.contactNumber}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium">Direction</h3>
                            <div className="w-full h-48">
                                <MapContainer center={getLatLong(reduxState?.mapLocation)} zoom={13} scrollWheelZoom={false}>
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={getLatLong(reduxState?.mapLocation)}>
                                        <Popup>
                                        {reduxState?.name}
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                            <p className="text-lg">{reduxState?.address}</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="p-2 border border-gray-500 text-lg rounded-xl flex items-center gap-2"><FaRegCopy className="text-gray-500 text-xl"/> Copy</button>
                            <button className="p-2 border border-gray-500 text-lg rounded-xl flex items-center gap-2"><FaDirections className="text-zomato-btnpink text-xl"/> Direction</button>
                        </div>
                        <Link  className=""><p className="text-sm font-light text-zomato-btnpink flex items-center gap-1">{"See all 24 SS Hyderabad Biryani outlets in Chennai".slice(0,46)+"..."}<BiSolidRightArrow/></p></Link>
                    </div>
                </aside>

            </div>

        </div>
        </>
    );
};

export default Overview;