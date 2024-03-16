import React from "react";

const Photos = (props) => {

    const photo ="https://b.zmtcdn.com/data/pictures/chains/1/71181/fe25be4517894a3c6f8b70feff4b1e45.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A";
    return(
        <>
            <div className="flex flex-col gap-3 px-3 pt-5 pb-10 md:px-0 mb-20">
                <h1 className="text-2xl font-medium">SS Hyderabad Biryani Photos</h1>

                <div className="flex gap-4">
                    <button className="bg-zomato-btnpink rounded-lg text-white px-4 py-2">
                        All ({"8"})
                    </button>
                    <button className=" text-gray-300 border-gray-400 border rounded-lg px-4 py-2">
                        Food ({"2"})
                    </button>
                </div>
                
                <div className="flex flex-wrap gap-4 justify-between md:justify-normal">
                {[photo,photo,photo,photo,photo,photo,photo,photo,photo,photo,photo,photo,photo,photo,photo,photo,photo,photo,photo,photo,photo,photo,photo,photo,photo,photo,photo,photo,].map((photo) => (
                    <div className="h-44 w-44 md:h-52 md:w-52 rounded-lg overflow-hidden">
                        <img className="h-full w-full rounded-lg object-cover hover:scale-110 transform transition duration-500 ease-in-out" src={photo}/>
                    </div>
                ))}
                </div>
                
            </div>
        </>
    );
};

export default Photos;