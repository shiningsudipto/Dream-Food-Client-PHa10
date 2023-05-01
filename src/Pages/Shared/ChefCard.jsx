import React from 'react';

const ChefCard = ({ chef }) => {
    const { name, picture, num_recipes, likes, experience_years, view_recipes } = chef;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="chef" className="rounded-xl h-52" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div>
                        <p>Number of recipes: {num_recipes}</p>
                        <p>Year of experience: {experience_years}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Likes: {likes}</p>
                        <button className="btn btn-primary">{view_recipes}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;