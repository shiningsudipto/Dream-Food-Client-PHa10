import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Registration = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const { createUser, settingDataToProfile, logOut } = useContext(AuthContext);
    const [regError, setRegError] = useState('');
    const [successful, setSuccessful] = useState('');
    const handleUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.imgURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        if (password < 6) {
            setRegError('enter at least 6 character of password')
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                setSuccessful('')
                settingDataToProfile(name, photo)
                    .then(() => {
                        console.log("Profile updated");
                    })
                    .catch((error) => {
                        setRegError(error.message)
                    });
                setSuccessful('Account created successfully')
                form.reset();
                // ===log-out method===
                // logOut()
                //     .then(() => {
                //         // Sign-out successful.
                //     }).catch((error) => {
                //         // An error happened.
                //         console.log(error);
                //     }); 
                navigate(from, { replace: true })
                // console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                // console.log(errorMessage);
                setRegError(errorMessage)
            });
    }
    return (
        <div className='my-12'>
            <div className='lg:w-1/3 mx-auto'>
                <h3 className='text-3xl font-semibold mb-6'>Please register your account!</h3>
                <form onSubmit={handleUser}>
                    <input type="text" name='name' placeholder="Your name" className="input input-bordered input-primary w-full mb-2" /> <br />
                    <input type="text" name='imgURL' placeholder="Your Image URL" className="input input-bordered input-primary w-full mb-2" /><br />
                    <input type="email" required name='email' placeholder="Your email" className="input input-bordered input-primary w-full mb-2" /><br />
                    <input type="password" name='password' required placeholder="Your password" className="input input-bordered input-primary w-full mb-4" /><br />
                    <button className='btn btn-primary w-full'>Register</button>
                </form>
                <p className='my-4'>Already have an account? <span className='text-primary underline font-semibold'><Link to='/login'>Login</Link></span></p>
                <p className='text-red-600 font-semibold'>{regError}</p>
                <p className='text-red-600 font-semibold'>{successful}</p>
            </div>
        </div>
    );
};

export default Registration;