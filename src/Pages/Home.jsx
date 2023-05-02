import React, { useContext } from 'react';
import Banner from './Shared/Banner';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefCard from './Shared/ChefCard';
import PopularRecipes from './Shared/PopularRecipes';
import { AuthContext } from '../Provider/AuthProvider';

const Home = () => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <progress className="progress w-56"></progress>
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
        </div>
    );
};

export default Home;