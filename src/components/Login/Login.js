import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();

    const history = useHistory()
    const redirect_uri = location.state?.from || '/shop';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri)
        })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to ema-john? <Link to="/register">Create Account</Link></p>
                <div>----------or-----------</div>
                <button 
                className="btn-regular" 
                onClick={signInUsingGoogle}
                >Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;