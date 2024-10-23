import { useState } from 'react';
import { FaGoogle, FaGithub, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignIn = ({ onSignUpClick }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignIn = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);
        // Implement actual sign-in logic here
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-animated px-4 md:px-0">
            <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
                {/* Left Section: Login Form */}
                <div className="w-full md:w-2/3 p-10 md:p-16 bg-white">
                    <h2 className="text-3xl font-extrabold mb-6 const handleSignIn = async (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);

    // Add your form submission logic here
    const response = await fetch('/api/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
        // Handle successful submission
        console.log('Form submitted successfully');
        // You can redirect the user to another page or show a success message
    } else {
        // Handle error response
        console.error('Failed to submit form');
        // You can show an error message to the user
    }
};text-center text-gray-800">Welcome Back!</h2>
                    <p className="mb-6 text-gray-500 text-center">Login using social networks or your credentials</p>

                    {/* Social media login buttons */}
                    <div className="flex justify-center space-x-6 mb-8">
                        <button
                            aria-label="Sign in with Google"
                            className="p-3 bg-gray-200 rounded-full shadow-md hover:shadow-xl transform hover:scale-110 transition-transform duration-300"
                        >
                            <FaGoogle className="text-2xl"/>
                        </button>
                        <button
                            aria-label="Sign in with GitHub"
                            className="p-3 bg-gray-200 rounded-full shadow-md hover:shadow-xl transform hover:scale-110 transition-transform duration-300"
                        >
                            <FaGithub className="text-2xl text-black"/>
                        </button>
                    </div>

                    {/* OR separator */}
                    <div className="relative flex items-center justify-center mb-8">
                        <div className="w-full border-t border-gray-300"></div>
                        <span className="absolute bg-white px-4 text-gray-500">OR</span>
                    </div>

                    {/* Sign-in form */}
                    <form onSubmit={handleSignIn}>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2">Email</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 shadow-sm"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <FaEnvelope className="absolute right-4 top-4 text-gray-400"/>
                            </div>
                        </div>

                        <div className="mb-8">
                            <label className="block text-gray-700 font-semibold mb-2">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 shadow-sm"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                {showPassword ? (
                                    <FaEyeSlash
                                        className="absolute right-4 top-4 text-gray-400 cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    />
                                ) : (
                                    <FaEye
                                        className="absolute right-4 top-4 text-gray-400 cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    />
                                )}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
                        >
                            Sign In
                        </button>
                    </form>

                    <Link to="/forgot-password" className="block text-center mt-6 text-gray-500 hover:text-gray-700 transition-colors">Forgot password?</Link>
                </div>

                {/* Right Section: Sign-Up Prompt */}
                <div className="hidden md:flex w-1/3 bg-gradient-to-br from-teal-500 to-teal-400 text-white p-16 flex-col justify-center items-center">
                    <h2 className="text-3xl font-bold mb-4">New Here?</h2>
                    <p className="mb-8 text-center text-lg">Sign up and discover a great amount of new opportunities!</p>
                    <button
                        className="bg-white text-teal-500 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300"
                        onClick={onSignUpClick}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
