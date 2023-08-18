import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";



const Tab = (props) => {

    const {id} = useParams();
    return (
        <Link to={`/restaurant/${id}/${props.route}`}>
            <div className="relative w-full">
            <h1 className={`w-32 md:w-full  text-center text-md md:text-xl px-4 py-4 ${props.isActive? "text-zomato-btnpink ": "text-gray-600 "}`}>{props.title}</h1>
            {props.isActive && (
                <div className="absolute w-full z-20 -bottom-0.5 bg-zomato-btnpink" style={{height:"2px"}}/>
            )}
            </div>
        </Link>
    );
}

const RestaurantTabs = (props) => {


    const currentPath = useLocation().pathname;


    const RestaurantTypes =[
        {
            route:"overview",
            title:"Overview",
            isActive: currentPath.includes("overview")
        },
        {
            route:"order-online",
            title:"Order Online",
            isActive: currentPath.includes("order-online")
        },
        {
            route:"reviews",
            title:"Reviews",
            isActive: currentPath.includes("reviews")
        },
        {
            route:"photos",
            title:"Photos",
            isActive: currentPath.includes("photos")
        },
        {
            route:"menu",
            title:"Menu",
            isActive: currentPath.includes("menu")
        },
    ];


    return (
        <>
            <div className="relative overflow-x-scroll md:overflow-visible flex gap-6 py-2 ">
                {RestaurantTypes.map((type) => (
                    <Tab {...type}/>
                ))}
                <div className="absolute bottom-1.5 w-full bg-gray-200 " style={{height:"2px"}}/>
            </div>
        </>
    )
};

export default RestaurantTabs;