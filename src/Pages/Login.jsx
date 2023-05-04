import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const [error, setError] = useState('');
    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);

    const handleUser = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        // email, password login
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true })
                // console.log(user);
                form.reset();
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    // Google login handel
    const handelGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                navigate(from, { replace: true })
                // console.log("route", from);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                // console.log(errorMessage);
            })
    };
    // github login
    const handleGithubLogin = () => {
        githubSignIn()
            .then((result) => {
                const user = result.user;
                // console.log(user);
                navigate(from, { replace: true })
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                // console.log(errorMessage);
            });
    }

    return (
        <div className='my-12'>
            <div className='lg:w-1/3 mx-auto'>
                <h3 className='text-3xl font-semibold mb-6'>Login to your account!</h3>
                <form onSubmit={handleUser}>
                    <input type="email" required name='email' placeholder="Your email" className="input input-bordered input-primary w-full mb-4" /><br />
                    <input type="password" name='password' required placeholder="Your password" className="input input-bordered input-primary w-full mb-4" /><br />
                    <button type='submit' className='btn btn-primary w-full'>Login</button>
                </form>
                <p className='my-4'>Do not have any account? Please <span className='text-primary underline font-semibold'><Link to='/registration'> Register</Link></span></p>
                <p className='text-red-600 font-semibold'>{error}</p>
                <div className='flex'>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                    </div>
                </div>
                <div>
                    <button onClick={handelGoogleLogin} className='btn btn-outline btn-primary w-full mb-4'>Login with Google <FaGoogle className='ms-2' /></button>
                    <button onClick={handleGithubLogin} className='btn btn-outline btn-primary w-full'>Login with Github <FaGithub className='ms-2' /></button>
                </div>
            </div>
        </div>
    );
};

export default Login;