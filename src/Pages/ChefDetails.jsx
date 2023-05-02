import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Recipes from './Shared/Recipes';

const ChefDetails = () => {
    const [details, setDetails] = useState([])
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        fetch(`http://localhost:5000/chef/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    console.log(details);
    const { name, picture, num_recipes, likes, experience_years, bio, recipes } = details;
    return (
        <div>
            <div className='container mx-auto my-10'>
                <div className="grid grid-cols-3 shadow-xl rounded-lg">
                    <figure><img src={picture} className='rounded-lg h-96' alt="Movie" /></figure>
                    <div className="card-body col-span-2">
                        <h2 className="card-title text-3xl mb-4">{name}</h2>
                        <p className='text-xl'>{bio}</p>
                        <p className='text-xl font-semibold'>Total Recipe: {num_recipes}</p>
                        <p className='text-xl font-semibold'>Year of Experience: {experience_years}</p>
                        <p className='text-xl font-semibold'>Likes: {likes}</p>
                    </div>
                </div>
                <div>
                    <h3 className='text-3xl font-bold mt-10 my-4'>Top 3 recipe:</h3>
                    <div className='grid grid-cols-3 gap-4'>
                        {
                            details?.recipes?.map(recipe => <Recipes
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