import React from 'react';
import Banner from './Shared/Banner';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefCard from './Shared/ChefCard';
import PopularRecipes from './Shared/PopularRecipes';

const Home = () => {
    return (
        <div>
            {/* banner */}
            <Banner />
            {/* chef card */}
            <div className='container mx-auto my-10'>
                <h3 className='text-5xl font-semibold text-center my-6'>Our Best Chef</h3>
                <ChefCard />
            </div>
            {/* Popular recipe */}
            <div>
                <PopularRecipes />
            </div>
        </div>
    );
};

export default Home;