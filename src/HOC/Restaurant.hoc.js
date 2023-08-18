import React, {Component} from "react";
import { Route,Routes } from "react-router-dom";

//Layouts
import RestaurantLayout from "../Layout/Restaurant.layout";

const RestaurantLayoutHOC = ({Component:Component, ...rest}) => {
    return (
        <>
            <Routes>
            <Route
                {...rest}
                Component = {(props) => (
                    <RestaurantLayout>
                        <Component {...rest}/>
                    </RestaurantLayout>
                )}
            />
            </Routes>
        </>
    );
};

export default RestaurantLayoutHOC;