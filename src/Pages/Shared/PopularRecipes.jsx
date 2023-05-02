import React, { useContext, useEffect, useState } from 'react';
import { FaHatCowboy, FaStar } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';

const PopularRecipes = () => {
    const [dishes, setDishes] = useState([]);

    const { loading } = useContext(AuthContext);
    const handleLoading = () => {
        if (loading) {
            return <progress className="progress w-56"></progress>
        }
    }

    useEffect(() => {
        fetch("http://localhost:5000/dishes")
            .then(res => res.json())
            .then(data => setDishes(data))
    }, [])
    console.log(dishes);
    return (
        <div className='my-16'>
            <div className='w-1/2 mx-auto text-center'>
                <h2 className='text-5xl font-semibold '>Most Popular Recipes</h2>
                <h4 className='my-6 font-semibold text-xl'>Discover our most popular recipes, as rated by our community of food lovers. From mouth-watering mains to indulgent desserts, our top recipes are guaranteed to impress.
                </h4>
            </div>
            <div className='grid grid-cols-4 gap-2' >
                {
                    dishes.map((dish, index) => (
                        <div key={index} className="card bg-base-100 shadow-xl image-full">
                            <figure><img src={dish.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{dish.name}</h2>
                                <div>
                                    <p className='flex items-center'> <FaHatCowboy /> {dish.chef}</p>
                                </div>
                                <p></p>
                                <div className="card-actions justify-end">
                                    <div className='bg-yellow-500 py-1 px-2 rounded-2xl'>
                                        <p className="flex items-center">5.0 <FaStar className='' /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PopularRecipes;