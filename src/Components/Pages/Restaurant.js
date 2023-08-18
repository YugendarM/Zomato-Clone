import React from "react";
import { useParams,Route, Redirect } from "react-router-dom";


//tabs
import Overview from "../Restaurant/Overview";
import OrderOnline from "../Restaurant/OrderOnline";
import Reviews from "../Restaurant/Reviews";
import Photos from "../Restaurant/Photos";
import Menu from "../Restaurant/Menu";

const Restaurant = () => {
    const {route} = useParams();
    return (
        <>

        {/* <Route path="">
            <Redirect/>
        </Route> */}


        {route === "overview" && <Overview/>}
        {route === "order-online" && <OrderOnline/>}
        {route === "reviews" && <Reviews/>}
        {route === "photos" && <Photos/>}
        {route === "menu" && <Menu/>}
        </>
    );
};

export default Restaurant;