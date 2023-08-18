import React from "react";
import { GrFormClose } from "react-icons/gr";

import CartItemCard from "../Cards/CartItemCard";

const CartContainer = ({close}) => {


    return(
        <>
        <div className="bg-white  flex flex-col gap-2 h-56 overflow-y-scroll px-2" style={{boxShadow: "0px -5px 10px rgba(0, 0, 0, 0.2)"}}>
            <div className="text-xl font-semibold flex items-center justify-between px-2 py-2 bg-white">
                <h1>Your Orders</h1>
                <button onClick={close}><GrFormClose className="text-2xl"/></button>
            </div>
            <hr/>
            <div className="">
                <CartItemCard/>
                <CartItemCard/>
                <CartItemCard/>
                <CartItemCard/>
                <CartItemCard/>
                <CartItemCard/>
            </div>
        </div>
        </>
    );
};

export default CartContainer;