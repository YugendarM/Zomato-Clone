import React, {Component} from "react";
import { Route,Routes } from "react-router-dom";

//Layouts
import CheckoutLayout from "../Layout/Checkout.layout";

const CheckoutLayoutHOC = ({Component:Component, ...rest}) => {
    return (
        <>
            <Routes>
            <Route
                {...rest}
                Component = {(props) => (
                    <CheckoutLayout>
                        <Component {...rest}/>
                    </CheckoutLayout>
                )}
            />
            </Routes>
        </>
    );
};

export default CheckoutLayoutHOC;