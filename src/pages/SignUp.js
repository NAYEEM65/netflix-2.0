/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, signUp } = UserAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUp(email, password);
            navigate('/');
        } catch (error) {}
        setEmail('');
        setPassword('');
    };
    return (
        <div className="w-full h-screen">
            <img
                className="hidden sm:block absolute w-full h-full object-cover"
                src="https://assets.nflxext.com/ffe/siteui/vlv3/b321426e-35ae-4661-b899-d63bca17648a/044b9365-d6b8-4e45-98b0-3ace7d99ffd3/BD-en-20220926-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                alt=""
            />
            <div className="bg-black/50 fixed top-0 left-0 w-full h-screen"></div>
            <div className="fixed w-full px-4 py-24 z-50">
                <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
                    <div className="max-w-[320px] mx-auto py-16">
                        <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    type="email"
                                    name="floating_email"
                                    id="floating_email"
                                    className="block py-3 px-0 w-full text-sm text-gray-900 bg-gray-400/50 rounded border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label
                                    htmlFor="floating_email"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 bg scale-75 top-4 -z-10 origin-[0] peer-focus:left-1 peer-focus:top-5 peer-focus:text-gray-200 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Email address
                                </label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    type="password"
                                    name="floating_password"
                                    id="floating_password"
                                    className="block py-3 px-0 w-full text-sm text-gray-900 bg-gray-400/50 rounded border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label
                                    htmlFor="floating_password"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-1 peer-focus:top-5 peer-focus:text-gray-200 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Password
                                </label>
                            </div>
                            <button className="bg-red-600 py-3 my-6 font-bold w-full rounded">
                                Sign Up
                            </button>
                            <div className="flex justify-between items-center text-sm text-gray-600">
                                <p>
                                    <input className="mr-2" type="checkbox" />
                                    Remember me
                                </p>
                                <p>Need Help?</p>
                            </div>
                            <p className="py-8">
                                <span className="text-gray-600">
                                    Already subscribe to Netflix?{' '}
                                </span>
                                <Link to="/login">Sign In</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
