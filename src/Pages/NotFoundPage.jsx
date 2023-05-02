import React from 'react';
import notFount from '../../public/404notfound.jpg'
import Header from './Shared/Header';
import Footer from './Shared/Footer';

const NotFoundPage = () => {
    return (
        <div className=''>
            <Header />
            <div className='flex justify-center'>
                <img className='lg:w-1/2 pb-5' src={notFount} alt="" />
            </div>
            <Footer />
        </div>
    );
};

export default NotFoundPage;