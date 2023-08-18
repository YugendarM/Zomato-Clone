import React,{useState} from "react";
import CollectionCarousal from "../Carousals/CollectionCarousal";
import DiningCollection from "../DataSet/DiningCollection.dataset";
import FoodCard from "../Cards/RestaurantCard";



const Dining = () => {

    const [restaurantList, setRestaurantList] = useState([
        {
            _id:1234,
            photos:["https://b.zmtcdn.com/data/pictures/1/18959411/042cc523b6bed9180d5c55ba7c01f8e3_featured_v2.jpg?output-format=webp"],
            name:"Lassi Shop",
            rating:4.1,
            cuisine:["Beverages","Shake","Juices"],
            averageCost: 100,
            duration: 36,
            isProOff: 90,
            time:"12Noon"
    
        },
        {
            _id:1234,
            photos:["https://b.zmtcdn.com/data/pictures/chains/7/18529497/356dba8618c661f83b17c5e3dd1fd02f_o2_featured_v2.jpg?output-format=webp"],
            name:"Lassi Shop",
            rating:4.1,
            cuisine:["Beverages","Shake","Juices"],
            averageCost: 100,
            duration: 36,
            isProOff: 90,
            time:"12Noon"
    
        },
        {
            _id:1234,
            photos:["https://b.zmtcdn.com/data/pictures/chains/7/18529497/356dba8618c661f83b17c5e3dd1fd02f_o2_featured_v2.jpg?output-format=webp"],
            name:"Lassi Shop",
            rating:4.1,
            cuisine:["Beverages","Shake","Juices"],
            averageCost: 100,
            duration: 36,
            isProOff: 90,
            time:"12Noon"
        },
        {
            _id:1234,
            photos:["https://b.zmtcdn.com/data/pictures/chains/7/18529497/356dba8618c661f83b17c5e3dd1fd02f_o2_featured_v2.jpg?output-format=webp"],
            name:"Lassi Shop",
            rating:4.1,
            cuisine:["Beverages","Shake","Juices"],
            averageCost: 100,
            duration: 36,
            isProOff: 90,
            time:"12Noon"
    
        },
        {
            _id:1234,
            photos:["https://b.zmtcdn.com/data/pictures/chains/7/18529497/356dba8618c661f83b17c5e3dd1fd02f_o2_featured_v2.jpg?output-format=webp"],
            name:"Lassi Shop",
            rating:4.1,
            cuisine:["Beverages","Shake","Juices"],
            averageCost: 100,
            isProOff: 90,
            time:"12Noon"
    
        },
        {
            _id:1234,
            photos:["https://b.zmtcdn.com/data/pictures/chains/7/18529497/356dba8618c661f83b17c5e3dd1fd02f_o2_featured_v2.jpg?output-format=webp"],
            name:"Lassi Shop",
            rating:4.1,
            cuisine:["Beverages","Shake","Juices"],
            averageCost: 100,
            duration: 36,
            isOff: 90
    
        },
        
    ]);

    return (
        <>
            <div className="px-4 md:px-0 ">
                <div className="px-3 md:hidden container mx-auto">
                    <img src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png" alt="dine out"/>
                </div>

                <div className="md:bg-gray-100">
                    <div className="md:bg-gray-100 md:p-4 lg:container lg:mx-auto lg:px-48 ">
                        <div className=" flex flex-col gap-3 my-3 md:bg-gray-100 ">
                            <div className="px-3">
                                <h1 className="text-xl font-medium text-gray-800  md:text-3xl">Collections</h1>
                            </div>
                            <div className="px-3">
                                <p className="text-xs font-light md:text-xl lg:text-lg">
                                    Explore curated lists of top restaurants, cafes, pubs, and baars in Chennai, based on trends.
                                </p>
                            </div>

                            <div>
                                <CollectionCarousal contents= {DiningCollection}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-3 hidden md:block lg:container lg:mx-auto lg:px-52  mx-auto my-10">
                    <img src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png" alt="dine out"/>
                </div>

                <div className="md:p-4 lg:container lg:mx-auto lg:px-48">
                    <div className="flex flex-col gap-3 my-3 ">
                        <div className="px-3">
                            <h1 className="text-xl font-medium text-gray-800  md:text-3xl">Trending Dining Restaurants in Mylapore</h1>
                        </div>
                        <div className="flex flex-wrap gap-10 justify-between">
                            {restaurantList.map((restaurant) => (
                                <FoodCard {...restaurant}/>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            
        </>
    );
};

export default Dining;