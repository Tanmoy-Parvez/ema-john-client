import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <h1>Login Now</h1>
            <form>
                <input type="email" placeholder="Enter your email" />
                <br />
                <input type="password" placeholder="Enter your password" />
                <br />
                <input type="password" placeholder="Re-enter your password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>

            --------------------- or ---------------------
            <br />
            <button className="regular-btn">Google Sign In</button>
        </div>
    );
};

export default Register;