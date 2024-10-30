import { useState } from 'react';
import { FaGoogle, FaGithub, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';

const SignIn = ({ onSignUpClick }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignIn = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);
    };

    const handleForgotPassword = () => {
        // Logic to handle redirect to forgot password page
        console.log("Redirecting to Forgot Password page");
    };

    return (
        <div className='flex-grow mt-52  flex-col h-full rounded-lg'>
            <div className="flex h-1/2 w-1/2 bg-gray-100 mx-auto justify-center">
                {/* Left Side */}
                <div className="w-1/2 p-10 flex flex-col justify-center">
                    <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Welcome Back!</h2>
                    <p className="mb-6 text-gray-500 text-center">Login using social networks or your credentials</p>

                    <div className="flex justify-center space-x-6 mb-8">
                        <FaGoogle className="text-2xl text-gray-600 hover:text-teal-500 cursor-pointer"/>
                        <FaGithub className="text-2xl text-black hover:text-teal-500 cursor-pointer"/>
                    </div>

                    <div className="flex items-center my-1">
                        <hr className="flex-grow border-t border-black"/>
                        <span className="mx-2 text-gray-500">OR</span>
                        <hr className="flex-grow mx-2 border-t border-black"/>
                    </div>

                    <form onSubmit={handleSignIn}>
                        <div className="mb-6">
                            <label className="block text-gray-700">Email</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <FaEnvelope className="absolute right-3 top-3 text-gray-400"/>
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                {showPassword ? (
                                    <FaEyeSlash
                                        className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    />
                                ) : (
                                    <FaEye
                                        className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    />
                                )}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-teal-500 w-full text-white py-2 rounded-lg hover:bg-teal-600"
                        >
                            Sign In
                        </button>
                        <div className="pt-2">
                            <a href="#" onClick={handleForgotPassword} className="flex justify-center hover:underline">
                                Forgot Password?
                            </a>
                        </div>
                    </form>
                </div>

                {/* Right Side */}
                <div className="bg-teal-500 w-1/2 flex flex-col justify-center items-center text-white">
                    <h2 className="text-3xl font-bold mb-4">New Here?</h2>
                    <p className="mb-8 text-center">Sign up and discover new opportunities!</p>
                    <button
                        className="bg-white text-teal-500 px-8 py-3 rounded-lg hover:bg-gray-200"
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
