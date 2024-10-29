import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const AuthPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUp(true);
    };

    const handleSignInClick = () => {
        setIsSignUp(false);
    };

    return (
        <div className="flex h-screen">
            {isSignUp ? (
                <SignUp onSignInClick={handleSignInClick} />
            ) : (
                <SignIn onSignUpClick={handleSignUpClick} />
            )}
        </div>
    );
};

export default AuthPage;
