import React from 'react';
import LazyLoad from 'react-lazyload';
import storyImg from '../../../public/img-6.jpg'

const OurStory = () => {
    return (
        <LazyLoad threshold={-100} placeholder={<div className='text-center'>
            <progress className="progress w-96"></progress>
        </div>}>
            <div className='container mx-auto my-16'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 lg:px-0 px-4'>
                    <div>
                        <img className='rounded-xl' loading='lazy' src={storyImg} alt="" />
                    </div>
                    <div>
                        <h3 className='lg:text-5xl text-2xl font-bold mb-4'> Our Goal</h3>
                        <h4 className='lg:text-2xl text-xl font-semibold lg:mb-6 mb-4'> Cooking dream food with love, makes it delicious.</h4>
                        <p className='text-lg'>The American cuisine is a melting pot of different cultures and influences, resulting in a wide range of delicious and unique dishes. From Southern comfort food to Northeastern seafood classics, American cuisine offers something for everyone. Our website is dedicated to showcasing some of the best and most beloved American recipes, providing step-by-step instructions and helpful tips for making these dishes in your own kitchen. Whether you're looking to whip up a classic mac and cheese, grill the perfect burger, or make a mouth-watering apple pie, our website is the perfect resource for all your American food cravings. Explore our collection of recipes today and get cooking!</p>
                    </div>
                </div>
            </div>
        </LazyLoad >

    );
};

export default OurStory;