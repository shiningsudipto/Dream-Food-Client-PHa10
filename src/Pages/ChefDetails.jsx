import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipes from './Shared/Recipes';
import { FaThumbsUp } from "react-icons/fa";

const ChefDetails = () => {
    const { id } = useParams();
    const details = useLoaderData();
    // console.log(details);
    const { name, picture, num_recipes, likes, experience_years, bio, recipes } = details;
    return (
        <div>
            <div className='container mx-auto my-10'>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 shadow-xl rounded-lg">
                    <figure><img src={picture} className='rounded-lg h-96' alt="Movie" /></figure>
                    <div className="card-body col-span-2">
                        <h2 className="card-title text-3xl mb-4">{name}</h2>
                        <p className='text-xl'>{bio}</p>
                        <p className='text-xl font-semibold'>Total Recipe: {num_recipes}</p>
                        <p className='text-xl font-semibold'>Year of Experience: {experience_years}</p>
                        <p className='text-xl font-semibold flex items-center'><FaThumbsUp className='text-blue-600' /> {likes}</p>
                    </div>
                </div>
                <div>
                    <h3 className='text-3xl font-bold mt-10 my-4'>Top 3 recipe:</h3>
                    {/* Chef and Recipe Details */}
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                        {
                            details?.recipes?.map((recipe, index) => <Recipes
                                key={index}
                                recipe={recipe}
                            ></Recipes>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;