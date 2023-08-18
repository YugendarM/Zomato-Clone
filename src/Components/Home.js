import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Temp from "./temp.component";
import Navbar from "./Navbar/Navbar.component";

import Delivery from "./Pages/Delivery";
import Dining from "./Pages/Dining";
import NightLife from "./Pages/NightLife";

import { getRestaurant } from "../Redux/Reducer/Restaurant/restaurant.action";

const Home = () => {
    const { type } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestaurant())
    }, [])

    return(
        <>
            {type === "delivery" && <Delivery/>}
            {type === "dining" && <Dining/>}
            {type === "night" && <NightLife/>}
        </>
    );
};

export default Home;