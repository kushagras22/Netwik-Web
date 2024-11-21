import React, { useState } from 'react';
import { X, Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Landing = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-50">
      <div className="w-[800px] h-[500px] bg-white rounded-lg shadow-lg flex overflow-hidden">
        {/* Left Side - Login Form */}
        <div className="w-1/2 p-12">
          <div className="max-w-sm mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Login to Your Account
            </h1>
            <p className="text-gray-600 text-sm mb-8">
              Login using social networks
            </p>

            {/* Social Login Buttons */}
            <div className="flex justify-center space-x-4 mb-8">
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
              </button>
            </div>

            {/* OR Divider */}
            <div className="flex items-center mb-8">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">OR</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email</label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Enter your email"
                      required
                    />
                    <Mail className="absolute right-3 top-2.5 text-gray-400" size={20} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Enter your password"
                      required
                    />
                    <Lock className="absolute right-3 top-2.5 text-gray-400" size={20} />
                  </div>
                </div>
<Link to={"/home"} >
                <button
                  type="submit"
                  className=" mt-4 w-full py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
                >
                  Sign in
                </button>
                </Link>
              </div>
            </form>

            {/* Forgot Password */}
            <div className="text-center mt-6">
              <a 
                href="#" 
                className="text-sm text-gray-600 hover:text-teal-500"
              >
                Forgot password?
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Sign Up Prompt */}
        <div className="w-1/2 bg-teal-500 p-12 relative">
          {/* Close Button */}
          <button className="absolute top-4 right-4 text-white hover:bg-teal-600 rounded-full p-1">
            <X size={24} />
          </button>

          <div className="h-full flex flex-col items-center justify-center text-white">
            <h2 className="text-3xl font-bold mb-4">New Here?</h2>
            <p className="text-center mb-8 text-teal-50">
              Sign up and discover a great amount of new opportunities!
            </p>
            <button className="px-8 py-2 bg-white text-teal-500 rounded-full hover:bg-teal-50 transition-colors">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing