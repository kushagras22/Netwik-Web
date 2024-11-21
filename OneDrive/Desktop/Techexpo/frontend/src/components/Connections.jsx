import React, { useState } from 'react';
import { Home, Edit3, Users, BarChart2, Settings, Phone } from 'lucide-react';
import img from '../assets/dp.jpg';

const Connections = () => {
  const [requests, setRequests] = useState([
    { id: 1, username: "Aman" },
    { id: 2, username: "Harsh" },
    { id: 3, username: "Aditya" },
    { id: 4, username: "Kushagra" }
  ]);

  const [suggestions] = useState([
    { id: 1, username: "Shubham" },
    { id: 2, username: "Pragati" },
    { id: 3, username: "Arav" }
  ]);

  const handleAccept = (id) => {
    setRequests(requests.filter(request => request.id !== id));
    // Implement logic to add accepted connection
  };

  const handleDecline = (id) => {
    setRequests(requests.filter(request => request.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-teal-600 text-white p-6">
        {/* Profile Section */}
        <div className="mb-8">
          <img src={img} alt="Profile Picture" className="w-24 h-auto mb-2 rounded-full ml-16" />
          <div className="text-center mb-4">
            <h2 className="text-xl">username</h2>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-4">
          <button className="flex items-center w-full p-2 hover:bg-teal-700 rounded transition-colors">
            <Edit3 className="mr-3 h-5 w-5" />
            <span>Edit profile</span>
          </button>
          <button className="flex items-center w-full p-2 bg-teal-700 rounded transition-colors">
            <Users className="mr-3 h-5 w-5" />
            <span>Connections</span>
          </button>
          <button className="flex items-center w-full p-2 hover:bg-teal-700 rounded transition-colors">
            <BarChart2 className="mr-3 h-5 w-5" />
            <span>Portfolio</span>
          </button>
          <div className="pt-8">
            <button className="flex items-center w-full p-2 hover:bg-teal-700 rounded transition-colors">
              <Settings className="mr-3 h-5 w-5" />
              <span>Settings</span>
            </button>
            <button className="flex items-center w-full p-2 hover:bg-teal-700 rounded transition-colors">
              <Phone className="mr-3 h-5 w-5" />
              <span>Contact Info</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-8 text-black">
            <h1 className="text-2xl font-semibold">Connections</h1>
            <Users className="ml-3 h-6 w-6" />
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Requests and Suggestions Section */}
            <div className="col-span-2 space-y-8">
              {/* Requests Section */}
              <div>
                <div className="inline-flex items-center px-6 py-2 bg-teal-200 rounded-lg mb-4">
                  <span className="text-lg font-medium text-black">Requests</span>
                </div>
                <div className="space-y-4">
                  {requests.map(request => (
                    <div key={request.id} className="flex items-center justify-between p-4 bg-gray-300 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <img src={img} alt="Profile Picture" className="w-10 h-10 rounded-full" />
                        <span className='text-black'>{request.username}</span>
                      </div>
                      <div className="flex space-x-3">
                        <button 
                          className="btn btn-outline"
                          onClick={() => handleDecline(request.id)}
                        >
                          Decline
                        </button>
                        <button 
                          className="btn btn-primary"
                          onClick={() => handleAccept(request.id)}
                        >
                          Accept
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggestions Section */}
              <div>
                <div className="inline-flex items-center px-6 py-2 bg-teal-200 rounded-lg mb-4">
                  <span className="text-lg font-medium text-black">Suggestions</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {suggestions.map(suggestion => (
                    <div key={suggestion.id} className="p-4 bg-gray-300 rounded-lg text-center">
                      <div className="flex flex-col items-center space-y-3">
                        <img src={img} alt="Profile Picture" className="w-16 h-16 rounded-full" />
                        <span className='text-black'>{suggestion.username}</span>
                        <button className="btn btn-primary w-full">
                          Connect
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Connections List Section */}
            <div className="col-span-1">
              <div className="bg-teal-200 rounded-lg p-4 mb-4">
                <span className="text-lg font-medium text-black">My connections</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border-b">
                  <h3 className="font-medium text-black">People I follow</h3>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connections;