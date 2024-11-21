import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  HomeIcon, 
  SearchIcon, 
  UsersIcon, 
  MessageCircleIcon, 
  PlusCircleIcon, 
  FolderIcon, 
  UserIcon,
  Bluetooth 
} from 'lucide-react';

// Mock user database
const MOCK_USER_DATABASE = {
  "user1_device_id": {
    userId: "user1",
    name: "John Doe",
    interests: ["coding", "gaming"],
    skills: ["React", "Node.js"],
    lookingFor: ["project collaboration", "mentorship"]
  },
  "user2_device_id": {
    userId: "user2",
    name: "Jane Smith",
    interests: ["design", "art"],
    skills: ["UI/UX", "Figma"],
    lookingFor: ["job opportunities", "networking"]
  }
};

// Bluetooth service UUID - Replace with your actual UUID
const USER_SERVICE_UUID = '00000000-0000-1000-8000-00805f9b34fb';

const isWebBluetoothSupported = () => {
  return navigator?.bluetooth && 'requestDevice' in navigator.bluetooth;
};

const ProximityScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [nearbyUsers, setNearbyUsers] = useState([]);
  const [detectionHistory, setDetectionHistory] = useState([]);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    interests: [],
    skills: [],
    lookingFor: []
  });
  const [continuousScan, setContinuousScan] = useState(false);
  const [scanInterval, setScanInterval] = useState(null);

  useEffect(() => {
    return () => {
      if (scanInterval) {
        clearInterval(scanInterval);
      }
    };
  }, [scanInterval]);

  // Function to encode user data into Bluetooth advertisement data
  const encodeUserData = (userData) => {
    return new TextEncoder().encode(JSON.stringify(userData));
  };

  // Function to decode received Bluetooth advertisement data
  const decodeUserData = (advertisementData) => {
    try {
      return JSON.parse(new TextDecoder().decode(advertisementData));
    } catch (e) {
      console.error('Error decoding user data:', e);
      return null;
    }
  };

  const scanForNearbyUsers = async () => {
  try {
    // Request any Bluetooth device (no filters)
    const device = await navigator.bluetooth.requestDevice({
      acceptAllDevices: true // This will allow scanning for all Bluetooth devices nearby
    });

    console.log('Device found:', device.name);

    // Now you can connect to the device and handle it further (if needed)
    const server = await device.gatt.connect();
    console.log('Connected to device:', device.name);

    // Fetch services, characteristics, and other info as needed
    // For example, reading a characteristic:
    const service = await server.getPrimaryService(USER_SERVICE_UUID);
    const characteristic = await service.getCharacteristic(USER_DATA_CHARACTERISTIC_UUID);
    const userData = await characteristic.readValue();
    console.log('User data:', userData);

  } catch (error) {
    console.error('Error scanning for devices:', error);
  }
};
    
    
      

  const startContinuousScanning = async () => {
    try {
      // Request Bluetooth permission first
      await navigator.bluetooth.requestDevice({
        acceptAllDevices: true
      });
      
      // If permission granted, start scanning
      setContinuousScan(true);
      const interval = setInterval(() => {
        if (!isScanning) {
          scanForNearbyUsers();
        }
      }, 5000);
      setScanInterval(interval);
    } catch (error) {
      setError('Bluetooth permission denied');
      console.error('Permission error:', error);
    }
  };

  const stopContinuousScanning = () => {
    setContinuousScan(false);
    if (scanInterval) {
      clearInterval(scanInterval);
      setScanInterval(null);
    }
  };

  const checkUserMatchesFilters = (userData) => {
    if (Object.values(filters).every(f => f.length === 0)) return true;

    return Object.entries(filters).every(([category, filterValues]) => {
      if (filterValues.length === 0) return true;
      const userValues = userData[category] || [];
      return filterValues.some(filter => userValues.includes(filter));
    });
  };

  const showUserDetectedNotification = (userData) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('New User Nearby!', {
        body: `${userData.name} was just detected nearby. They're interested in: ${userData.interests.join(', ')}`
      });
    }
  };

  useEffect(() => {
    const requestNotificationPermission = async () => {
      if ('Notification' in window) {
        await Notification.requestPermission();
      }
    };
    requestNotificationPermission();
  }, []);

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title flex items-center gap-2">
          <Bluetooth className={`w-6 h-6 ${isWebBluetoothSupported() ? 'text-primary' : 'text-gray-400'}`} />
          Nearby User Detection
        </h2>

        {!isWebBluetoothSupported() && (
          <div className="alert alert-warning shadow-lg mb-4">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>Web Bluetooth is not supported in your browser. Please use Chrome or Edge.</span>
            </div>
          </div>
        )}

        {/* Filters Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Detection Filters</h3>
          <div className="flex flex-wrap gap-4">
            {Object.entries(filters).map(([category, selectedFilters]) => (
              <div key={category} className="form-control">
                <label className="label">
                  <span className="label-text capitalize">{category}</span>
                </label>
                <input 
                  type="text" 
                  placeholder={`Add ${category}...`}
                  className="input input-bordered w-full max-w-xs"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.target.value.trim()) {
                      setFilters(prev => ({
                        ...prev,
                        [category]: [...prev[category], e.target.value.trim()]
                      }));
                      e.target.value = '';
                    }
                  }}
                />
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedFilters.map((filter, index) => (
                    <span key={index} className="badge badge-primary gap-2">
                      {filter}
                      <button
                        onClick={() => setFilters(prev => ({
                          ...prev,
                          [category]: prev[category].filter((_, i) => i !== index)
                        }))}
                        type="button"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scan Controls */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={continuousScan ? stopContinuousScanning : startContinuousScanning}
            className={`btn ${continuousScan ? 'btn-error' : 'btn-primary'}`}
            disabled={!isWebBluetoothSupported()}
            type="button"
          >
            <Bluetooth className="mr-2 w-4 h-4" />
            {continuousScan ? 'Stop Scanning' : 'Start Continuous Scan'}
          </button>
          <button
            onClick={scanForNearbyUsers}
            disabled={isScanning || !isWebBluetoothSupported() || continuousScan}
            className={`btn btn-secondary ${isScanning ? 'loading' : ''}`}
            type="button"
          >
            Single Scan
          </button>
        </div>

        {/* Error Display */}
        {error && (
          <div className="alert alert-error shadow-lg mb-4">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{error}</span>
            </div>
          </div>
        )}

        {/* Nearby Users */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Currently Nearby Users</h3>
          {nearbyUsers.length === 0 ? (
            <div className="alert alert-info shadow-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>No users detected nearby. Start scanning to discover people.</span>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              {nearbyUsers.map((user) => (
                <div key={user.userId} className="card bg-base-200">
                  <div className="card-body p-4">
                    <h4 className="font-medium">{user.name}</h4>
                    <p className="text-sm opacity-70">Interests: {user.interests.join(', ')}</p>
                    <p className="text-sm opacity-70">Skills: {user.skills.join(', ')}</p>
                    <p className="text-sm opacity-70">Looking for: {user.lookingFor.join(', ')}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm opacity-70">
                        Signal strength: {user.signalStrength}dBm
                      </span>
                      <button 
                        className="btn btn-sm btn-primary"
                        type="button"
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Detection History */}
        {detectionHistory.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Detection History</h3>
            <div className="max-h-40 overflow-y-auto">
              {detectionHistory.map((detection, index) => (
                <div key={index} className="text-sm opacity-70 mb-1">
                  {new Date(detection.detectedAt).toLocaleTimeString()}: Detected {detection.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Main HomePage Component
const Home = () => {
  const navigationLinks = [
    { to: "/home", icon: HomeIcon, label: "Home" },
    { to: "/search", icon: SearchIcon, label: "Search" },
    { to: "/clubs", icon: UsersIcon, label: "Clubs" },
    { to: "/chats", icon: MessageCircleIcon, label: "Chats" },
    { to: "/create", icon: PlusCircleIcon, label: "Create" },
    { to: "/projects", icon: FolderIcon, label: "Projects" },
    { to: "/profile", icon: UserIcon, label: "Profile" }
  ];

  return (
    <div className="flex h-screen bg-base-100 overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-primary text-primary-content p-4">
        {/* Logo */}
        <div className="mb-8">
          <img src="/logo.png" alt="Logo" className="w-24 h-auto mb-2 rounded-full mx-auto" />
          <div className="text-xl font-bold text-center">Netwik</div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-4 mx-4">
          {navigationLinks.map(({ to, icon: Icon, label }) => (
            <Link
              key={to}
              to={to}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary-focus transition-colors"
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto bg-base-200">
        <ProximityScanner />
      </div>
    </div>
  );
};

export default Home;