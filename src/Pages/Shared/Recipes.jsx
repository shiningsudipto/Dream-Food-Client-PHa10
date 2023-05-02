import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaStar, FaRegStar, FaHeart } from "react-icons/fa";
import Rating from 'react-rating';

const Recipes = ({ recipe }) => {
    const { name, cooking_method, rating } = recipe;
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const notify = () => {
        toast("Recipe added to the favorite!")
        setButtonDisabled(true);
    };
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold underline">{name}</h2>
                    <div>
                        <h3 className='text-xl font-semibold mt-5 mb-4'>Ingredients:</h3>
                        {
                            recipe?.ingredients?.map((ingredient, index) =>
                                <p key={index}>
                                    {index + 1}. {ingredient}
                                </p>)
                        }
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold mt-6'>Cooking method:</h3>
                        <p style={{ whiteSpace: "pre-line" }}>
                            {cooking_method.replace(/(\d+\.\s+[a-zA-Z])/g, '\n$1')}
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>{rating}
                            <Rating
                                placeholderRating={rating}
                                emptySymbol={<FaRegStar />}
                                placeholderSymbol={<FaStar className='text-yellow-300' />}
                                fullSymbol={<FaStar />}
                            />
                        </p>
                        <button onClick={notify} disabled={isButtonDisabled} className="btn btn-outline outline rounded-lg  "><FaHeart className='text-red-600 text-xl' /></button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;