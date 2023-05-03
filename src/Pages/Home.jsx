import React, { useContext } from 'react';
import Banner from './Shared/Banner';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefCard from './Shared/ChefCard';
import PopularRecipes from './Shared/PopularRecipes';
import { AuthContext } from '../Provider/AuthProvider';
import OurStory from './Shared/OurStory';

const Home = () => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className='text-center'>
            <progress className="progress w-96"></progress>
        </div>
    }
    return (
        <div>
            {/* banner */}
            <Banner />
            {/* chef card */}
            <div className='container mx-auto my-10'>
                <h3 className='lg:text-5xl text-2xl lg:font-semibold font-bold text-center my-6'>Our Best Chef</h3>
                <ChefCard />
            </div>
            {/* Popular recipe */}
            <div>
                {
                    loading ? <progress className="progress w-56"></progress>
                        :
                        <PopularRecipes />
                }
            </div>
            <div>
                <OurStory />
            </div>
        </div>
    );
};

export default Home;