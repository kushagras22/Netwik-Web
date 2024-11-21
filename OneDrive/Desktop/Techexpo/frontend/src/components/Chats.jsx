import React, { useState } from 'react';
import { Search, Mic, Image, Smile, Send } from 'lucide-react';
import img from '../assets/dp.jpg'; // Adjust the path to your image

const names = [
  'John Doe',
  'Jane Smith',
  'Mike Johnson',
  'Sarah Wilson',
  'David Brown',
  'Emma Davis',
  'James Miller',
  'Lisa Anderson',
  // Add more names as needed
];

const Chats = () => {
  const [message, setMessage] = useState('');
  const [messages] = useState([
    { id: 1, text: 'Hello how are you?', sender: 'other', time: '10:00 AM' },
    { id: 2, text: 'I am fine!', sender: 'self', time: '10:01 AM' },
    { id: 3, text: 'How are you?', sender: 'self', time: '10:01 AM' },
  ]);

  const [recentChats] = useState(() => {
    // Generate random indices for names
    const randomIndices = Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * names.length)
    );

    return randomIndices.map((index) => ({
      id: index + 1, // Ensure unique IDs
      name: names[index],
      lastMessage: 'This is a random message',
      time: '10:00 AM', // Adjust time as needed
    }));
  });

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-teal-700 text-white">
        {/* Logo */}
        <div className="p-4">
          <div className="w-24 h-24 bg-white rounded-full mb-2 flex items-center justify-center">
            <img src={img} alt="Logo" className="w-24 h-auto  rounded-full " />
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-4 mb-4">
          <div className="flex items-center space-x-2 text-gray-300">
            <Search size={20} />
            <span>Search</span>
          </div>
        </div>

        {/* Recent Chats */}
        <div className="px-4">
          <h2 className="text-sm font-semibold mb-4">Recent chats</h2>
          <div className="space-y-2">
            {recentChats.map((chat) => (
              <div
                key={chat.id}
                className="p-2 rounded hover:bg-teal-600 cursor-pointer transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white rounded-full">
                    <img src={img} alt="Profile Picture" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div>
                    <p className="text-white">{chat.name}</p>
                    <p className="text-gray-300 text-sm">{chat.lastMessage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full">
              <img src={img} alt="Profile Picture" className="w-full h-full rounded-full object-cover" />
            </div>
            <span className="text-lg font-semibold text-gray-800">Username</span>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'self' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                    msg.sender === 'self'
                      ? 'bg-gray-200 rounded-tr-none'
                      : 'bg-gray-200 rounded-tl-none'
                  }`}
                >
                  <p className="text-gray-800">{msg.text}</p>
                  <p className="text-gray-400 text-xs">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="p-4 bg-gray-100">
          <div className="flex items-center space-x-2 bg-gray-200 rounded-full px-4 py-2">
            <Mic size={20} className="text-black cursor-pointer" />
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write something....."
              className="flex-1 bg-transparent outline-none placeholder-gray-500 text-black"
            />
            <div className="flex items-center space-x-2">
              <Image size={20} className="text-gray-500 cursor-pointer" />
              <Smile size={20} className="text-gray-500 cursor-pointer" />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600"
                disabled={!message.trim()}
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chats;