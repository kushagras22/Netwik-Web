import { useState } from 'react';
import { FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SignUp = ({ onSignInClick }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from reloading the page
        console.log("Form submitted with values:", { username, email, password });
        // You can add your form submission logic here
    };

    return (
        <div className="flex flex-col md:flex-row h-screen items-center justify-center bg-gray-100">
            {/* Left Side: Welcome Message */}
            <div className="bg-teal-500 w-full md:w-1/2 h-full flex items-center justify-center text-white p-8">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
                    <p className="mb-8">To keep connected with us please login with your personal info</p>
                    <button
                        className="bg-transparent border-2 border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-teal-500 transition"
                        onClick={onSignInClick}
                    >
                        SIGN IN
                    </button>
                </div>
            </div>

            {/* Right Side: Sign Up Form */}
            <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-teal-500 mb-6">Create Account</h2>
                <div className="flex justify-center mb-6">
                    {/* Social Icons */}
                    <FaGoogle className="text-gray-600 text-2xl mx-2 cursor-pointer hover:text-teal-500" />
                    <FaInstagram className="text-gray-600 text-2xl mx-2 cursor-pointer hover:text-teal-500" />
                    <FaLinkedin className="text-gray-600 text-2xl mx-2 cursor-pointer hover:text-teal-500" />
                </div>
                <p className="text-gray-500 text-center mb-6">or use your email for registration</p>

                {/* Form Fields */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-teal-500 w-full text-white py-2 rounded-lg hover:bg-teal-600 transition"
                    >
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
