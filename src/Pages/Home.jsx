import React from 'react';
import Banner from './Shared/Banner';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefCard from './Shared/ChefCard';

const Home = () => {
    // const chefs = useLoaderData();
    // console.log(chefs);
    // const { id } = useParams();
    return (
        <div>
            {/* banner */}
            <Banner />
            {/* chef card */}
            <div className='container mx-auto my-10'>
                <h3 className='text-5xl font-semibold text-center my-6'>Our Best Chef</h3>
                {/* {
                        chefs.map(chef => <ChefCard
                            id={id}
                            chef={chef}
                            key={chef.id}
                        ></ChefCard>)
                    } */}
                <ChefCard />
            </div>
        </div>
    );
};

export default Home;