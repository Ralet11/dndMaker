import React, { useState } from 'react';
import getParamsEnv from '../functions/getParamsEnv';
import axios from 'axios'
import { setUser } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom/dist';

const { API_URL_BASE } = getParamsEnv()

function LoginForm() {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: ""
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // Previene el comportamiento predeterminado del formulario
        try {
            const response = await axios.post(`${API_URL_BASE}/api/user/login`, userInfo)
            if(response.status === 200) {
                dispatch(setUser(response.data))
                navigate("/home")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="max-w-lg w-full">
            <div
                style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className="bg-gray-800 rounded-lg shadow-xl overflow-hidden"
            >
                <div className="p-8">
                    <h2 className="text-center text-3xl font-extrabold text-white">Welcome Back</h2>
                    <p className="mt-4 text-center text-gray-400">Sign in to continue</p>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm">
                            <div>
                                <label className="sr-only" htmlFor="email">Email address</label>
                                <input
                                    placeholder="Email address"
                                    className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    required=""
                                    autoComplete="email"
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mt-4">
                                <label className="sr-only" htmlFor="password">Password</label>
                                <input
                                    placeholder="Password"
                                    className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    required=""
                                    autoComplete="current-password"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center">
                                <input
                                    className="h-4 w-4 text-indigo-500 focus:ring-indigo-400 border-gray-600 rounded"
                                    type="checkbox"
                                    name="remember-me"
                                    id="remember-me"
                                />
                                <label className="ml-2 block text-sm text-gray-400" htmlFor="remember-me">Remember me</label>
                            </div>

                            <div className="text-sm">
                                <a className="font-medium text-indigo-500 hover:text-indigo-400" href="#">Forgot your password?</a>
                            </div>
                        </div>

                        <div>
                            <button
                                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                type="submit"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
                <div className="px-8 py-4 bg-gray-700 text-center">
                    <span className="text-gray-400">Don't have an account?</span>
                    <a className="font-medium text-indigo-500 hover:text-indigo-400" href="#">Sign up</a>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
