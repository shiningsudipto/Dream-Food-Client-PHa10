import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaThumbsUp } from "react-icons/fa";
import LazyLoad from 'react-lazyload';


const ChefCard = ({ chef }) => {

    const [chefs, setChef] = useState([]);

    useEffect(() => {
        fetch("https://assignment-10-server-azure.vercel.app/chef")
            .then(res => res.json())
            .then(data => setChef(data))
    }, [])
    return (
        <LazyLoad placeholder={
            <div className='text-center'>
                <progress className="progress w-96"></progress>
            </div>
        }>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-2'>
                {
                    chefs.map(chef => (

                        <div key={chef.id} className="card bg-base-100 shadow-xl">

                            <figure className="px-10 pt-10">
                                <img src={chef.picture} loading='lazy' key={chef.id} alt="chef" className="rounded-xl h-52" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{chef.name} </h2>
                                <div>
                                    <p >Number of recipes: {chef.num_recipes}</p>
                                    <p >Year of experience: {chef.experience_years}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className='flex items-center'><FaThumbsUp className='text-blue-600' />  {chef.likes}</p>
                                    <Link to={`/chef/${chef.id}`}>
                                        <button className="btn btn-primary" >{chef.view_recipes}</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </LazyLoad>

    );
};

export default ChefCard;