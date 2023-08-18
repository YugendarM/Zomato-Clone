import React from "react";
import {BiMinus} from "react-icons/bi";
import {AiOutlinePlus} from "react-icons/ai";


const CartItemCard = () => {

    return(
        <div className="py-3  bg-white ">
            <div className="flex items-center justify-between   ">
                <div className="flex items-start gap-2 w-4/5">
                    <div className="w-4 h-4  my-1.5">
                        <img className="w-full h-full rounded" src="https://n3.sdlcdn.com/imgs/d/g/8/Veg_symbol_svg-f30b6.png"/>
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg">Cheese n Tomato</h2>
                        <p className=" text-gray-400 text-sm">Curst: New Hand Tossed, Size: Regular</p>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <p className="text-md font-medium">₹300</p>
                    <div className="flex items-center gap-4 bg-zomato-btnpink py-1 rounded-lg px-1.5 text-white">
                        <button><BiMinus/></button>
                        <p>1</p>
                        <button><AiOutlinePlus/></button>
                    </div>
                </div>
            </div>
            <hr className="my-3"/>
        </div>
    );
};

export default CartItemCard;