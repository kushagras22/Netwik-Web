import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';

const AuthPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUp(true);
    };

    const handleSignInClick = () => {
        setIsSignUp(false);
    };

    return (
        <div>
            {isSignUp ? (
                <SignUp onSignInClick={handleSignInClick} />
            ) : (
                <SignIn onSignUpClick={handleSignUpClick} />
            )}
        </div>
    );
};

export default AuthPage;