import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 lg:text-5xl text-3xl font-bold">It is even better than
                            an expensive cookery book</h1>
                        <p className="mb-5">
                            Our website is dedicated to showcasing some of the best and most beloved American recipes, providing step-by-step instructions and helpful tips for making these dishes in your own kitchen
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;