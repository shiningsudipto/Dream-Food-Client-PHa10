import React from 'react';
import Banner from './Shared/Banner';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './Shared/ChefCard';

const Home = () => {
    const chefs = useLoaderData();
    console.log(chefs);
    return (
        <div>
            {/* banner */}
            <Banner />
            {/* chef card */}
            <div className='container mx-auto my-10'>
                <h3 className='text-5xl font-semibold text-center my-6'>Our Best Chef</h3>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 '>
                    {
                        chefs.map(chef => <ChefCard
                            chef={chef}
                            key={chef.id}
                        ></ChefCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;