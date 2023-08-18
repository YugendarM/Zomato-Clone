import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import CategoryCard from "../Cards/CategoryCard";
import settings from "../Settings/settings";

const SmCategoryCarousal = (props) => {
    return (
        <>
            <div className="md:hidden flex flex-wrap gap-4 justify-between">
                {props.contents.map((food) => (
                    <Link>
                        <CategoryCard {...food}/>
                    </Link>
                ))}
            </div>
        </>
    );
};

const MdCategoryCarousal = (props) => {
    return (
        <>
            <div className="hidden md:block lg:hidden">
                <Slider {...settings}>
                    {props.contents.map((food) => (
                        <Link>
                            <CategoryCard {...food}/>
                        </Link>
                    ))}
                </Slider>
            </div>
        </>
    );
};

const LgCategoryCarousal = (props) => {
    const LgSettings = {...settings, slidesToShow: 5}
    return (
        <>
            <div className="hidden lg:block ">
                <Slider {...LgSettings}>
                    {props.contents.map((food) => (
                        <Link>
                            <CategoryCard {...food}/>
                        </Link>
                    ))}
                </Slider>
            </div>
        </>
    );
};



const CategoryCarousal = (props) => {
    return (
        <>
        

        <div >
            <SmCategoryCarousal contents= {props.content}/>
        </div>

        <div >
            <MdCategoryCarousal contents= {props.content}/>
        </div>

        <div >
            <LgCategoryCarousal contents= {props.content}/>
        </div>

        </>
    );

};

export default CategoryCarousal;