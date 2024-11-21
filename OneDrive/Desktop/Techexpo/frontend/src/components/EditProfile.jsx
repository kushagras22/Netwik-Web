import React, { useState } from 'react';
import { Home, Edit3, Users, BarChart2, Settings, Phone } from 'lucide-react';
import img from '../assets/dp.jpg';

const EditProfile = () => {
  const [profileData, setProfileData] = useState({
    username: 'username',
    website: '',
    about: '',
    gender: '',
    links: '',
  });

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-teal-600 text-white p-6">
        {/* Profile Section */}
        <div className="mb-8">
          <div className="flex justify-center">
            <div className="relative w-24 h-24 rounded-full overflow-hidden">
              <img src={img} alt="Profile Picture" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gray-200 opacity-75 rounded-full"></div>
            </div>
          </div>
          <div className="text-center mb-4">
            <h2 className="text-xl">{profileData.username}</h2>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-4">
          <button className="flex items-center w-full p-2 bg-teal-700 rounded transition-colors">
            <Edit3 className="mr-3 h-5 w-5" />
            <span>Edit profile</span>
          </button>
          <button className="flex items-center w-full p-2 hover:bg-teal-700 rounded transition-colors">
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
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-teal-300 rounded-lg">
              <Edit3 className="mr-2 h-5 w-5 text-black" />
              <span className="text-xl font-semibold text-black">Edit Profile</span>
            </div>
          </div>

          {/* Profile Card */}
          <div className="p-6 mb-8 bg-gray-200 card text-black">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Reuse the image within a styled circle */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <img src={img} alt="Profile Picture" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gray-200 opacity-75 rounded-full"></div>
                </div>
                <span className="text-xl">{profileData.username}</span>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
                Change Photo
              </button>
            </div>

            {/* Form Fields */}
            <div className="space-y-6 mt-8">
              <div>
                <label className="block text-lg font-semibold mb-2">Website</label>
                <input
                  className="w-full bg-gray-200 p-2 rounded"
                  value={profileData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-lg font-semibold mb-2">About yourself</label>
                <textarea
                  className="w-full bg-gray-200 p-2 rounded"
                  value={profileData.about}
                  onChange={(e) => handleInputChange('about', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-lg font-semibold mb-2">Gender</label>
                <select
                  value={profileData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-full bg-gray-200 p-2 rounded"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>

              <div>
                <label className="block text-lg font-semibold mb-2">Add links</label>
                <input
                  className="w-full bg-gray-200 p-2 rounded"
                  value={profileData.links}
                  onChange={(e) => handleInputChange('links', e.target.value)}
                  placeholder="Add your social media links"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;