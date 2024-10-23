import React, { useState } from 'react';

const VerificationCode = () => {
    const [code, setCode] = useState('');

    const handleCodeChange = (e) => setCode(e.target.value);

    const handleSubmit = () => {
        // Handle verification logic
        console.log(`Verification code entered: ${code}`);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <img src="your-image-path" alt="Illustration" className="w-32 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-center mb-6 text-teal-600">Recover your password!</h2>
                <input
                    type="text"
                    placeholder="Enter verification code"
                    value={code}
                    onChange={handleCodeChange}
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button
                    onClick={handleSubmit}
                    className="w-full bg-teal-500 text-white p-3 rounded-lg hover:bg-teal-600 transition-colors"
                >
                    Verify
                </button>
                <a href="/login" className="block mt-4 text-center text-teal-600 hover:underline">Back to login page</a>
            </div>
        </div>
    );
};

export default VerificationCode;
