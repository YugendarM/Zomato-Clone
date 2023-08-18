import React from "react";
import { Link, useParams } from "react-router-dom";

//icons
import { BsHandbag } from "react-icons/bs";
import { IoFootstepsOutline,IoBeerOutline } from "react-icons/io5";



const SmallTab = () => {

    const smallTypes = [
        {
            id: "delivery",
            name: "Delivery",
            icon: <BsHandbag/>
        },

        {
            id: "dining",
            name: "Dining Out",
            icon:<IoFootstepsOutline/>
        },

        {
            id: "night",
            name: "Night Life",
            icon: <IoBeerOutline/>
        }
    ];

    const { type } = useParams();

    return (
        <>
            <div className="z-30 bg-white fixed bottom-0 flex items-center w-full justify-between  border-2">
                { smallTypes.map((item) => (
                    <Link to={`/${item.id}`}>
                        <div className={`flex flex-col justify-center items-center py-3 w-32 ${type === item.id ? "text-black inner border-t-2 border-zomato-btnpink":"text-gray-400" }`}>
                            <div className="text-3xl">{item.icon}</div>
                            <h5>{item.name}</h5>
                        </div>

                    </Link>
                ))}
            </div>
        </>


    );
}

const MediumTab = () => {

    return(
        <>
            <SmallTab/>
        </>
    );
    
}

const LargeTab = () => {
    const bw1 = "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"; 
    const color1 = "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"; 

    const bw2 ="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png";
    const color2 =  "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png";

    const bw3 = "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png";
    const color3 = "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png";

    const LargeTypes = [
        {
            id: "delivery",
            name: "Delivery",
            bw: bw1,
            color: color1,
            bg: "bg-zomato-bgLightYellow"
        },

        {
            id: "dining",
            name: "Dining Out",
            bw: bw2,
            color: color2,
            bg: "bg-zomato-bgLightGreen"
        },

        {
            id: "night",
            name: "Night Life",
            bw: bw3,
            color: color3,
            bg: "bg-zomato-bgLightBlue"
        }
    ];

    const { type } = useParams();



    return (
        <>
            <div className="flex items-center gap-3 container mx-auto px-52 ">
                {LargeTypes.map((item) => (
                    <Link to={`/${item.id}`} className={type === item.id ? "text-zomato-btnpink": "text-gray-400"} >
                        <div className={`flex items-center gap-2 py-4 px-4 ${type === item.id ? "border-b-2 border-zomato-btnpink": "border-none"}` }>
                            <div className={`h-16 w-16 rounded-full p-4 ${type === item.id ? item.bg : "bg-zomato-bgTransparent"}`}>
                                <img className="w-full h-full" src={type === item.id ? item.color : item.bw}/>
                            </div>
                            <span className="text-xl font-semibold">{item.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}

const Tab = () => {

    return (
        <>
            <div className="md:hidden ">
                <SmallTab/>
            </div>

            <div className="hidden md:block lg:hidden">
                <SmallTab/>
            </div>

            <div className="hidden lg:block">
                <LargeTab/>
            </div>
        </>
    );
    
};

export default Tab;
