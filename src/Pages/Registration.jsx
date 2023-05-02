import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='my-12'>
            <div className='lg:w-1/3 mx-auto'>
                <form >
                    <input type="text" name='name' placeholder="Your name" className="input input-bordered input-primary w-full mb-2" /> <br />
                    <input type="text" name='imgURL' placeholder="Your Image URL" className="input input-bordered input-primary w-full mb-2" /><br />
                    <input type="email" name='email' placeholder="Your email" className="input input-bordered input-primary w-full mb-2" /><br />
                    <input type="password" name='password' placeholder="Your password" className="input input-bordered input-primary w-full mb-4" /><br />
                    <button className='btn btn-primary w-full'>Submit</button>
                </form>
                <p className='my-4'>Already have an account? <span className='text-primary underline font-semibold'><Link to='/login'>Login</Link></span></p>
            </div>
        </div>
    );
};

export default Registration;