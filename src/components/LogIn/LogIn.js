import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./LogIn.css"

const LogIn = () => {
    const { user, signInUsingGoogle } = useAuth();

    const location = useLocation();
    const redirect_url = location.state?.from || "/shop";
    const history = useHistory();

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_url);
            })
    }
    return (
        <div className="login-form">
            <h1>Login Now</h1>
            <form>
                <input type="email" placeholder="Enter your email" />
                <br />
                <input type="password" placeholder="Enter your password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>New to ema-john? <Link to="/register">Create Account</Link></p>

            --------------------- or ---------------------
            <br />
            <button onClick={handleGoogleLogIn} className="regular-btn">Google Sign In</button>
        </div>
    );
};

export default LogIn;