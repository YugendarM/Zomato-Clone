import React,{useEffect, useState} from "react";
import Navbar from "../Components/Navbar/Navbar.component";
import { useParams,useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import Lander from "../Components/Lander Page";
import RestaurantPhotos from "../Components/Restaurant/RestaurantPhotos.grid";
import RestaurantDetails from "../Components/Restaurant/RestaurantDetails";
import RestaurantTabs from "../Components/Restaurant/RestaurantTabs";
import Cart from "../Components/Cart/Cart";

//Redux actions
import { getSpecificRestaurant } from "../Redux/Reducer/Restaurant/restaurant.action";
import { getImages } from "../Redux/Reducer/Images/Image.action";

const RestaurantLayout = (props) => {

    const [restaurant, setRestaurant] = useState(
        {
            images:["https://tse2.mm.bing.net/th?id=OIP.2iWS4NJfB5y_mu30Nsq_bwHaHa&pid=Api&P=0&h=180","https://tse2.mm.bing.net/th?id=OIP.2iWS4NJfB5y_mu30Nsq_bwHaHa&pid=Api&P=0&h=180","https://tse2.mm.bing.net/th?id=OIP.2iWS4NJfB5y_mu30Nsq_bwHaHa&pid=Api&P=0&h=180"], 
            name:"",
            cuisine:"",
            address:"",
            rating:"",
            restaurantTiming:"",
        }
    );


    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getSpecificRestaurant(id)).then((data)=>{
            setRestaurant((prev)=>({...prev, ...data.payload.restaurant}));
            dispatch(getImages(data.payload.restaurant.photos)).then((data)=>setRestaurant((prev)=>({...prev, ...data.payload.image})))
        });
    },[])

    

    const location = useLocation();
    const currentPath = location.pathname;

    if(currentPath === "/") return <Lander/>;

    return (
        <>
        <Navbar/>
        <div className="container lg:mx-auto lg:px-52 relative w-full">
            
            <RestaurantPhotos images={restaurant.images}/>
            <div className="sticky top-0 right-0 z-20 bg-white">
                <RestaurantDetails
                    name={restaurant?.name}
                    cuisine={restaurant?.cuisine}
                    address={restaurant?.address}
                    rating={restaurant?.rating}
                    restaurantTimings={restaurant?.restaurantTimings}
                />
                <RestaurantTabs/>
            </div>
            {props.children}
            <div className="container z-40 bg-white lg:mx-auto  lg:px-52 w-full fixed bottom-0 inset-x-0" >
                <Cart/>
            </div>
        </div>
        
        
            
        </>
    );
};

export default RestaurantLayout;