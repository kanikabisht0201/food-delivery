import React, { useState } from 'react';
import './Login.css';
import { assets } from '../../assets/assets';

export default function Login({ setShowLogin }) {
    const [currentState, setCurrentState] = useState("Login");

    const handleToggleState = () => {
        setCurrentState(currentState === "Login" ? "Sign Up" : "Login");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className='login'>
            <form className="login-container" onSubmit={handleSubmit}>
                <div className="login-title">
                    <h2>{currentState}</h2>
                    <img className="cross" onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
                </div>
                <div className="login-inputs">
                    {currentState === "Sign Up" && <input type="text" placeholder='Your Name' required />}
                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button type="submit">{currentState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                <p>
                    {currentState === "Login"
                        ? <span>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click here</span></span>
                        : <span>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></span>
                    }
                </p>
            </form>
        </div>
    );
}
