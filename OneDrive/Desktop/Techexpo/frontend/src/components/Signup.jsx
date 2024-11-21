import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('http://localhost:5000/api/users/register', formData);
      localStorage.setItem('token', data.token);
      navigate('/home');
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.error('Error signing up:', error);
    }
  };

  const handleSignInClick = () => {
    navigate('/login');
  };

  const toggleSignupForm = () => {
    setIsSignupVisible(!isSignupVisible);
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-[1000px] h-[600px] bg-white rounded-2xl shadow-lg overflow-hidden relative">
        {/* Background Shapes */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-400 rounded-tr-full"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-400 rounded-bl-full"></div>

        <div className="flex h-full">
          {/* Left Side - Welcome Message */}
          {!isSignupVisible && (
            <div className="w-1/2 bg-teal-500 p-12 flex flex-col justify-between relative">
              <div className="text-white">
                <h1 className="text-5xl font-bold mb-4">Welcome Back!</h1>
                <p className="text-teal-50 text-lg mb-8">
                  To keep connected with us please login with your personal info
                </p>
                <div className="flex space-x-4">
                  <button
                    onClick={toggleSignupForm}
                    className="px-12 py-3 border-2 border-white text-white rounded-full hover:bg-teal-600 transition-colors"
                  >
                    SIGN UP
                  </button>
                  <button
                    onClick={handleSignInClick}
                    className="px-12 py-3 border-2 border-white text-white rounded-full hover:bg-teal-600 transition-colors"
                  >
                    SIGN IN
                  </button>
                </div>
              </div>

              {/* Small Person Illustration */}
              <div className="absolute bottom-12 right-12">
                <div className="w-16 h-24 relative">
                  <div className="absolute bottom-0 w-full">
                    <div className="w-8 h-8 bg-teal-700 rounded-full mx-auto"></div>
                    <div className="w-12 h-16 bg-teal-600 rounded-t-2xl mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Right Side - Sign Up Form */}
          {isSignupVisible && (
            <div className="w-1/2 p-12 flex flex-col justify-center">
              <div className="max-w-sm mx-auto w-full">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  Create Account
                </h2>

                {/* Social Icons */}
                <div className="flex justify-center space-x-4 mb-8">
                  {['Google', 'Instagram', 'LinkedIn'].map((platform) => (
                    <button
                      key={platform}
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                    >
                      <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                    </button>
                  ))}
                </div>

                <p className="text-center text-gray-600 mb-8">
                  or use your email for registration
                </p>

                {/* Sign Up Form */}
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Username"
                      className="w-full px-4 py-3 border-b border-gray-300 focus:border-teal-500 outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full px-4 py-3 border-b border-gray-300 focus:border-teal-500 outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                      className="w-full px-4 py-3 border-b border-gray-300 focus:border-teal-500 outline-none transition-colors"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors"
                  >
                    Sign up
                  </button>

                  <button
                    type="button"
                    onClick={toggleSignupForm}
                    className="w-full py-3 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Back to Welcome
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;