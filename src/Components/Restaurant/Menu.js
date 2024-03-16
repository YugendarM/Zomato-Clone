import React from "react";
import MenuCard from "../Cards/MenuCard";

const Menu = () => {
    return(
        <>
            <div className="flex flex-col gap-3 border-b border-gray-100 pt-5 pb-10 px-3 md:px-0 mb-20">
            <h1 className="text-2xl font-medium">SS Hyderabad Biryani Menus</h1>
            <div>
                <div className="flex gap-10">
                    <MenuCard image={["https://b.zmtcdn.com/data/menus/607/68607/dcd9399bf1e3c08a9bc637c80ca3eb1a.jpg?"]} title="Food Menu" pages="2" />
                    <MenuCard image={["https://b.zmtcdn.com/data/menus/607/68607/dcd9399bf1e3c08a9bc637c80ca3eb1a.jpg?"]} title="Food Menu" pages="2" />
                </div>
            </div>
            </div>
        </>
    );
};

export default Menu;