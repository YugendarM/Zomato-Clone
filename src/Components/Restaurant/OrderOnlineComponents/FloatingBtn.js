import React, { useState } from "react";
import CategoryList from "./CategoryList";
import {BiMenu} from "react-icons/bi";
import {IoMdClose} from "react-icons/io";

const FloatingBtn = () => {

    const [isClicked, setIsClicked] = useState("");

    const handleToggle = () => {
        setIsClicked((pre) => !pre);
    }
    return(
        <>
            <div className="flex flex-col items-end">
                <div className="h-72 overflow-y-scroll py-2 shadow-lg rounded-lg m-0 bg-white">
                {
                    isClicked && (
                        <CategoryList menu={[
                            {
                                name:"adsfasdf",
                                items:["Gobi Manchurian","Gobi 65","Paneer Chilli Dry","Paneer 65","Mushroom 65"]
                            },
                            {
                                name:"starter",
                                items:["Gobi Manchurian","Gobi 65","Paneer Chilli Dry","Paneer 65","Mushroom 65"]
                            },
                            {
                                name:"maincourse",
                                items:["Gobi Manchurian","Gobi 65","Paneer Chilli Dry","Paneer 65","Mushroom 65"]
                            },
                            {
                                name:"thandoori",
                                items:["Gobi Manchurian","Gobi 65","Paneer Chilli Dry","Paneer 65","Mushroom 65"]
                            },
                            {
                                name:"anything",
                                items:["Gobi Manchurian","Gobi 65","Paneer Chilli Dry","Paneer 65","Mushroom 65"]
                            },
                            {
                                name:"anything",
                                items:["Gobi Manchurian","Gobi 65","Paneer Chilli Dry","Paneer 65","Mushroom 65"]
                            },
                            {
                                name:"anything",
                                items:["Gobi Manchurian","Gobi 65","Paneer Chilli Dry","Paneer 65","Mushroom 65"]
                            },
                            {
                                name:"anything",
                                items:["Gobi Manchurian","Gobi 65","Paneer Chilli Dry","Paneer 65","Mushroom 65"]
                            },
                            {
                                name:"anything",
                                items:["Gobi Manchurian","Gobi 65","Paneer Chilli Dry","Paneer 65","Mushroom 65"]
                            },
                            {
                                name:"anything",
                                items:["Gobi Manchurian","Gobi 65","Paneer Chilli Dry","Paneer 65","Mushroom 65"]
                            },
                            {
                                name:"anything",
                                items:["Gobi Manchurian","Gobi 65","Paneer Chilli Dry","Paneer 65","Mushroom 65"]
                            },
                            {
                                name:"anything",
                                items:["Gobi Manchurian","Gobi 65","Paneer Chilli Dry","Paneer 65","Mushroom 65"]
                            },

                        ]}/>
                    )
                }
                </div>
                <button className=" max-w-xl flex items-center bg-yellow-700 text-white text-lg p-2 rounded-full" onClick={handleToggle}>
                    {isClicked?<IoMdClose/>:<BiMenu/>}<p>Menu</p>
                </button>
            </div>
        </>
    );
};

export default FloatingBtn;