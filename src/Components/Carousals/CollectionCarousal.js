import React from "react";
import { Link } from "react-router-dom";
import CollectionCard from "../Cards/CollectionCard";
import setting from "../Settings/settings";
import Slider from "react-slick";
import settings from "../Settings/settings";
import DiningCollection from "../DataSet/DiningCollection.dataset";

const CollectionCarousal = (props) => {
    return(
        <>
        <div>
            <Slider {...settings}>
                {props.contents.map((collection) => (
                    <Link>
                        <CollectionCard {...collection}/>
                    </Link>
                ))}
            </Slider>
        </div>
        </>
    );
};

export default CollectionCarousal;