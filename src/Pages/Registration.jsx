import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Registration = () => {
    const { createUser, settingDataToProfile } = useContext(AuthContext);
    const [regError, setRegError] = useState('');
    const handleUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.imgURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        if (password > 6) {
            setRegError('enter at least 6 character of password')
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                settingDataToProfile(name, photo)
                    .then(() => {
                        console.log("Profile updated");
                    }).catch((error) => {
                        setRegError(error.message)
                    });
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <div className='my-12'>
            <div className='lg:w-1/3 mx-auto'>
                <form onSubmit={handleUser}>
                    <input type="text" name='name' placeholder="Your name" className="input input-bordered input-primary w-full mb-2" /> <br />
                    <input type="text" name='imgURL' placeholder="Your Image URL" className="input input-bordered input-primary w-full mb-2" /><br />
                    <input type="email" required name='email' placeholder="Your email" className="input input-bordered input-primary w-full mb-2" /><br />
                    <input type="password" name='password' required placeholder="Your password" className="input input-bordered input-primary w-full mb-4" /><br />
                    <button className='btn btn-primary w-full'>Register</button>
                </form>
                <p className='my-4'>Already have an account? <span className='text-primary underline font-semibold'><Link to='/login'>Login</Link></span></p>
                <p className='text-red-600 font-semibold'>{regError}</p>
            </div>
        </div>
    );
};

export default Registration;