import React from "react";
import Navbar from "../Components/Navbar/Navbar.component";
import Tab from "../Components/Tab";
import { useParams,useLocation } from "react-router-dom";
import Lander from "../Components/Lander Page";
import CheckoutNavbar from "../Components/Navbar/CheckoutNavbar.component";

const CheckoutLayout = (props) => {
    const location = useLocation();
    const currentPath = location.pathname;

    if(currentPath === "/") return <Lander/>;

    return (
        <>
            <CheckoutNavbar/>
            {props.children}
        </>
    );
};

export default CheckoutLayout;