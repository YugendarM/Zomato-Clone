import React from "react";
import MenuList from "./OrderOnlineComponents/MenuList";
import { FaRegCompass } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import CategoryList from "./OrderOnlineComponents/CategoryList";
import FloatingBtn from "./OrderOnlineComponents/FloatingBtn";

const categoryList =[
    {
        name:"Best in Biryani",
        items:["Chicken Bucket Biryani Combo [Serves 8]","Chicken Bucket Biryani Combo [Serves 5]","Chicken Biryani Executive Pack","Hyderabadi Chicken Dum Biryani"]
    },

    {
        name:"Starters",
        items:["Gobi Manchurian","Gobi 65","Paneer Chilli Dry","Paneer 65","Mushroom 65"]
    },

    {
        name:"Starters",
        items:["Gobi Manchurian","Gobi 65","Paneer Chilli Dry","Paneer 65","Mushroom 65"]
    },
    {
        name:"Starters",
        items:["Gobi Manchurian","Gobi 65","Paneer Chilli Dry","Paneer 65","Mushroom 65"]
    },
    {
        name:"ashdkjadfd",
        items:["Gobi Manchurian","Gobi 65","Paneer Chilli Dry","Paneer 65","Mushroom 65"]
    },
    {
        name:"asdffasdf",
        items:["Gobi Manchurian","Gobi 65","Paneer Chilli Dry","Paneer 65","Mushroom 65"]
    },
    {
        name:"adsfasdf",
        items:["Gobi Manchurian","Gobi 65","Paneer Chilli Dry","Paneer 65","Mushroom 65"]
    },
    {
        name:"thafc",
        items:["Gobi Manchurian","Gobi 65","Paneer Chilli Dry","Paneer 65","Mushroom 65"]
    },
    {
        name:"atryqewfv a",
        items:["Gobi Manchurian","Gobi 65","Paneer Chilli Dry","Paneer 65","Mushroom 65"]
    },
    {
        name:"wrgabvc",
        items:["Gobi Manchurian","Gobi 65","Paneer Chilli Dry","Paneer 65","Mushroom 65"]
    },
    

];

const OrderOnline = () => {
    return (
        <>
        <div className="mb-20">
        <div className="flex relative gap-4">
            <aside className="w-1/4 relative hidden md:block border-r border-gray-200">
                <div className="sticky left-0 top-72"><CategoryList menu={categoryList}/></div>
            </aside>
            <section className="px-3 w-full md:w-3/4">
                <h1 className="text-2xl font-medium">Order Online</h1>
                <div className="flex items-center gap-2">
                    <p className="flex gap-2 items-center text-gray-400 border-r pr-2 border-gray-400"><FaRegCompass/>Live track your order</p>
                    <p className="flex gap-2 items-center text-gray-400"><BiTimeFive/> 41 min</p>
                </div>
                <div className="flex flex-wrap gap-3">
                    <div className="bg-blue-700 px-2 py-1 ">
                        <p className="text-sm text-white font-medium">50% OFF up to ₹100</p>
                        <p className="text-xs text-white">use code WELCOME50</p>
                    </div>
                    <div className="bg-blue-700 px-2 py-1 ">
                        <p className="text-sm text-white font-medium">10% OFF up to ₹150</p>
                        <p className="text-xs text-white">use code DIGISMART</p>
                    </div>
                    <div className="bg-blue-700 px-2 py-1 ">
                        <p className="text-sm text-white font-medium">Free Delivery</p>
                        <p className="text-xs text-white">exclusively for you</p>
                    </div>
                    <div className="bg-blue-700 px-2 py-1 ">
                        <p className="text-sm text-white font-medium">25% OFF up to ₹250</p>
                        <p className="text-xs text-white">use code UTKARSHC...</p>
                    </div>
                </div>

                <div>
                    <MenuList/>
                    <MenuList/>
                </div>
            </section>
            <div className="fixed bottom-3 right-3 md:hidden z-20">
                <FloatingBtn/>
            </div>
        </div>
        </div>
        </>
    );
};

export default OrderOnline;