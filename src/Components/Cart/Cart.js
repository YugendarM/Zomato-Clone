import React, { useState } from "react";
import {IoMdArrowDropup,IoMdArrowDropright,IoMdArrowDropdown} from "react-icons/io";
import { GrFormClose } from "react-icons/gr";


import CartContainer from "./CartContainer";
import CartItemCard from "../Cards/CartItemCard";

const SmCart = ({toggle, open}) => {

    

    return(
        <>
        <div className="bg-white z-30 w-full flex  items-center justify-between  py-3 px-4" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <div className="">
                <p className="flex items-center gap-2">1 ITEM 
                    <button onClick={toggle}>
                        {open ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}
                    </button></p>
                <div className="flex items-center gap-1"><p className="font-medium">₹300</p><small>(plus tax)</small></div>
            </div>
            <div>
                <button className="flex items-center gap-2 bg-zomato-btnpink rounded-md text-white px-10 py-2">Continue<IoMdArrowDropright/></button>
            </div>
        </div>
        </>
    );
}

const LgCart = ({toggle,open}) => {
    return(
        <>
            <div>
                <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-2 font-medium text-xl">
                        <button className="border p-1 rounded-sm" onClick={toggle}>
                            {open ? <IoMdArrowDropup/>:<IoMdArrowDropdown/>}
                        </button>
                        <p className="">Your Orders (1)</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="text-xl font-medium">Subtotal:₹300 </p>
                        <button className="flex items-center gap-2 bg-zomato-btnpink rounded-md text-white px-3 py-2">Continue<IoMdArrowDropright/></button>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
    );
}

const Cart = () =>{

    const [isCartContainerOpen, setIsCartContainerOpen] = useState(false);

    const closeCartContainer = () => {
        setIsCartContainerOpen(false);
    }

    const toggleCart = () => {
        setIsCartContainerOpen((prev) => !prev);
    }

    return(
        <>
        <div className="md:hidden">
            <SmCart toggle = {toggleCart} open={isCartContainerOpen}/>
        </div>
        <div className="relative hidden md:block">
            <LgCart toggle={toggleCart} open={isCartContainerOpen}/>
        </div>
        <div className="absolute -top-56 inset-x-0 lg:px-52">
            {
                isCartContainerOpen && (
                    <CartContainer close={closeCartContainer}/>
                )
            }
        </div>
        </>
    );
};

export default Cart;


