import React from "react";

const RestaurantPhotos = (props) => {
    return (
        <>
            <div className="flex gap-2 ">
                <div className="w-full md:w-2/3 h-80  overflow-hidden">
                    <img className="w-full h-full object-cover hover:scale-110 transform transition duration-500 ease-in-out" src={props.images[0]? props.images[0].location:"https://tse4.mm.bing.net/th?id=OIP.QGY3Pa_Tmwz9qeSNkWZkYwHaHa&pid=Api&P=0&h=180"}/>
                </div>

                <div className="hidden md:w-1/3 md:flex md:gap-2">
                    <div className="w-1/2 h-full flex flex-col gap-2">
                        <div className="w-full h-1/2 overflow-hidden">
                            <img className="w-full h-full object-cover hover:scale-110 transform transition duration-500 ease-in-out" src={props.images[1]? props.images[1].location:"https://tse4.mm.bing.net/th?id=OIP.QGY3Pa_Tmwz9qeSNkWZkYwHaHa&pid=Api&P=0&h=180"}/>
                        </div>
                        <div className="w-full h-1/2 overflow-hidden">
                            <img className="w-full h-full object-cover hover:scale-110 transform transition duration-500 ease-in-out" src={props.images[2]? props.images[2].location:"https://tse4.mm.bing.net/th?id=OIP.QGY3Pa_Tmwz9qeSNkWZkYwHaHa&pid=Api&P=0&h=180"}/>
                        </div>
                    </div>

                    <div className="w-1/2 h-full relative">
                        <img className="w-full h-full object-cover" src={props.images[3]? props.images[3].location:"https://tse4.mm.bing.net/th?id=OIP.QGY3Pa_Tmwz9qeSNkWZkYwHaHa&pid=Api&P=0&h=180"}/>
                        <div className="bg-black bg-opacity-70 absolute z-20 w-full h-full inset-0"/>
                        <p className=" absolute w-full z-20 top-20 left-5 lg:left-10 text-white text-lg">View Gallery</p>

                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default RestaurantPhotos;