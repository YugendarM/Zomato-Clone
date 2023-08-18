import React from "react";
import {BsChevronLeft,BsChevronRight} from "react-icons/bs";

export const PosterPrevArrow = (props) => {
    return (
        <>
        <div
            className={props.className}
            style = {{...props.style,backgroundColor:"#999999",height:"40px", width:"40px", color:"white" , borderRadius:"50%", padding:"8px"}}        
            onClick = {props.onClick}
        >
            <BsChevronLeft className="text-2xl"></BsChevronLeft>
        </div>
            
        </>
    );
}

export const PosterNextArrow = (props) => {
    return (
        <>
        <div
            className={props.className}
            style = {{...props.style,backgroundColor:"#999999",height:"40px", width:"40px", color:"white" , borderRadius:"50%", padding:"8px"}}        
            onClick = {props.onClick}
        >
            <BsChevronRight className="text-2xl"></BsChevronRight>
        </div>
            
        </>
    );
}