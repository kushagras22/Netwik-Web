import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [formData, setFormData] = useState({
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
      const { data } = await axios.post('http://localhost:5000/api/users/login', formData);
      localStorage.setItem('token', data.token);
      navigate('/home');
    } catch (error) {
      setError('Login Please try again.');
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
         

          {/* Right Side - Sign Up Form */}
          
            <div className="w-1/2 p-12 flex flex-col justify-center">
              <div className="max-w-sm mx-auto w-full">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  Login
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
                 
                </p>

                {/* Sign Up Form */}
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                

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
                    Signin
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
          `
        </div>
      </div>
    </div>
  );
};

export default Signin;