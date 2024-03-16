import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CategoryCard from "../Cards/CategoryCard";
import CategoryCarousal from "../Carousals/CategoryCarousal";
import FoodCard from "../Cards/RestaurantCard";


const CategoryDetails = [
    {
        image:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
        name:"Biryani"
    },
    {
        image:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
        name:"Pizza"
    },
    {
        image:"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
        name:"Chicken"
    },
    {
        image:"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
        name:"Dosa"
    },
    {
        image:"https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
        name:"Fried Rice"
    },
    {
        image:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
        name:"Burger"
    },
    {
        image:"https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png",
        name:"Idli"
    },
    {
        image:"https://b.zmtcdn.com/data/o2_assets/e1b5ebed94e25d832f8dea96824537521678798686.png",
        name:"South Indian"
    },
    {
        image:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
        name:"Paratha"
    },
    {
        image:"https://b.zmtcdn.com/data/dish_photos/03a/21948feb4ea122ab37acf633ed7ec03a.jpg",
        name:"Parotta"
    },
    {
        image:"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
        name:"Thali"
    },
    {
        image:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
        name:"Rolls"
    },
    
];

const BrandDetails = [
    {
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/23b16c7bbb727a8499309011f2e010b6_1684317946.png?output-format=webp",
        name:"Saveetha Veg Restaurant",
        duration:"20 min"
    },
    {
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875219.png?output-format=webp",
        name:"KFC",
        duration:"24 min"
    },
    {
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/979d427f19044ebe68404bd9429c8a3b_1629443003.png?output-format=webp",
        name:"Nithya Amirtham",
        duration:" 24 min"
    },
    {
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252640.png?output-format=webp",
        name:"Domino's Pizza",
        duration:"25 min"
    },
    {
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643984189.png?output-format=webp",
        name:"McDonald's",
        duration:"26 min"
    },
    {
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/28ff44c32a5aacf028b7867b6888e8a6_1652169738.png?output-format=webp",
        name:"Namme Veetu Vasantha Bavan",
        duration:"22 min"
    },
    {
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/1731bf308f200929a2657c5e922f65b2_1635754327.png?output-format=webp",
        name:"Ambur Star Biryani",
        duration:"31 min"
    },
    {
        image:"https://b.zmtcdn.com/data/brand_creatives/logos/367270a3a33c60e580e0e2848c098b97_1673722257.png?output-format=webp",
        name:"Geetha Veg Restuarant",
        duration:"40 min"
    },
    
    
    
]

const Delivery = () => {

    const [restaurantList, setRestaurantList] = useState([]);

    const reduxState = useSelector((globalStore) => globalStore.restaurant.restaurants);
    console.log({reduxState});

    useEffect(() => {
       reduxState.restaurants && setRestaurantList(reduxState.restaurants);
       reduxState.restaurants && console.log(restaurantList);
    },[reduxState.restaurants])

    return (
        <>
            <div className="md:bg-gray-100 ">
                <div className=" px-4 my-10 md:py-10  lg:container lg:mx-auto lg:px-52">
                    <h1 className="text-xl font-medium text-gray-600 my-4 md:text-3xl">Inspiration for your first Order</h1>
                    <CategoryCarousal content= {CategoryDetails}/>
                </div>
            </div>

            <div className="md:hidden">
                <img src="https://b.zmtcdn.com/web/assets/e80201cf2e86a49ce4722e9b5ddfab551620045350.png?output-format=webp" alt="Track delivery"/>
            </div>

            <div className="">
                <div className=" px-4 my-10 md:py-10 lg:container lg:mx-auto lg:px-52">
                    <h1 className="text-xl font-medium text-gray-600 my-4 md:text-3xl">Top brands for you</h1>
                    <CategoryCarousal content= {BrandDetails}/>
                </div>
            </div>

            <div className="mb-64">
                <div className=" px-4 my-10 md:py-10 lg:container lg:mx-auto lg:px-52">
                    <h1 className="text-xl font-medium text-gray-600 my-4 md:text-3xl">Delivery Restaurants in Mylapore</h1>
                    <div className="flex flex-wrap gap-12 justify-between">
                        {restaurantList.map((restaurant) => (
                            <FoodCard {...restaurant}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Delivery;