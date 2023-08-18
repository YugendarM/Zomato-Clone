import React from "react";
import { Link } from "react-router-dom";
import Tab from "./Tab";

const Temp = () => {
    return (
        <>
        <h1>This is the entry page</h1>

        <Tab/>

        <Link to={"/order"}>
            Deliveryyyyyy
        </Link>

        <Link to={"/dining"}>
            Dining
        </Link>

        <Link to={"/night"}>
            Night Life
        </Link>
        </>
    );
};

export default Temp;