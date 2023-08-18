import React, { useState } from "react";
import { Link } from "react-router-dom";

const Category = (props) => {


    return(
        <>
            <div  className={`text-lg text-gray-600 px-3 py-2 max-h-fit cursor-pointer ${props.isActive ? "text-lg border-r-4 border-zomato-btnpink bg-gradient-to-l from-zomato-btnpink/10 to-zomato-btnpink/0" : "border-none"}` }>
                <h1 id={props.name} onClick={props.onClickHandler}>{props.name} ({props.items.length})</h1>
            </div>
        </>
    );
};

const CategoryList = (props) => {

    const [selected, setSelected] = useState("");


    const onClickHandler = (event) => {
        if(event.target.id){
            setSelected(event.target.id)
        };
        return;
    }


    return(
        <>
            <div className=" ml-3 bg-white ">
               {props.menu.map((item) => (
                <Category onClickHandler={onClickHandler} isActive={selected === item.name} {...item} />
                ))} 
            </div>
        </>
    );
};

export default CategoryList