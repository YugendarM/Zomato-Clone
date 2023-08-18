import React from "react";

const CategoryCard = (props) => {
    return (
        <>
        <div className="h-full w-20 md:w-40 md:mx-4">
            <div className="w-20 h-20 md:w-40 md:h-40">
                <img
                    src={props.image}
                    className="w-full h-full  object-cover rounded-full"
                />
            </div>
            <p className="text-md text-center md:text-xl md:py-2">{props.name}</p>
            <p className="text-center font-light text-sm">{props.duration}</p>
        </div>
        </>
    );
};

export default CategoryCard;