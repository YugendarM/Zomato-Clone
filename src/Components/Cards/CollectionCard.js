import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";

const CollectionCard = (props) => {
    return(
        <>
            <div className="rounded-md h-60 w-full relative px-2 md:h-80 lg:px-4" >
                <div className="w-full h-full">
                    <img className="h-full w-full object-cover rounded-md" src={props.image}/>
                </div>  
                <div className="text-white font-medium w-full h-full absolute bottom-0 z-20 text-sm flex flex-col justify-end p-2 " >
                    <p className="text-lg font-normal">{props.description}</p>
                    <p className="flex items-center gap-2">{props.places} places <span className="text-xs"><BiSolidRightArrow/></span></p>
                </div>
            </div>
        </>
    );
};

export default CollectionCard;



//bg-gradient-to-b from-gray-100/5 to-gray-900/90 bg-gray-100/50