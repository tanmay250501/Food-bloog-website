import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Loginform = ({ onClose }) => {
    const LoginformRef = useRef();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const closeLoginform = (e) => {
        if (LoginformRef.current === e.target) {
            onClose(); 
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/login`, { email, password });
            localStorage.setItem("token", response.data.token);
            navigate("/Admineditcategory");
        } catch (error) {
            setError("Invalid credentials");
        }
    };

    return (
        <div ref={LoginformRef} onClick={closeLoginform} className="fixed flex inset-0 bg-opacity-30 backdrop-blur-sm z-20 bg-white">
            <div className="fixed bg-white z-10 w-full max-w-md p-4 bg-white rounded-lg shadow-md md:right-96 md:top-16 mt-12">
                <div className="text-end mb-8">
                    <button className="text-2xl font-bold text-gray-800" onClick={() => onClose()}><i className="fa-regular fa-x text-red-700"></i></button>
                </div>
                <form className="space-y-4" onSubmit={handleLogin}>
                    <div className="flex items-center">
                        <button
                            type="button"
                            className="flex items-center justify-center px-4 py-2 mr-2 text-sm font-medium text-center text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none"
                        >
                            <i className="fab fa-google"></i>
                            <span className="ml-2">Log in with Google</span>
                        </button>
                        <button
                            type="button"
                            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-center text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none"
                        >
                            <i className="fab fa-apple"></i>
                            <span className="ml-2">Log in with Apple</span>
                        </button>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    id="remember"
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label htmlFor="remember" className="text-sm ml-2 text-gray-700">Remember me</label>
                            </div>
                            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                        </div>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <button
                        type="submit"
                        className="w-full px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500"
                    >
                        Sign in to your account
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                        Don't have an account yet? <a href="#" className="text-sm text-blue-600 hover:underline">Sign up here</a>
                    </p>
                </div>
            </div>
        </div>
    );
};
