// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import './Common.css';
import BatchUpdate from './BatchUpdate';

const LoginForm = () => {
    
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const navigate = useNavigate();
  const [showBatchUpdate, setShowBatchUpdate] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here...
    // If successful, route to /batchUpdate
    navigate('/batchUpdate');
  };

  return (
    <div>
      <div className="content_con2">
        <form onSubmit={handleSubmit}>
          <div className="Gemlogo">GemStudio® 💎</div>
          <h2>Sign in to continue</h2>
          <input
          className='username'
            type="text"
            name="username"
            placeholder="Enter your username"
            value={inputs.username}
            onChange={handleChange}
          />
          <input
          className='email'
            type="email"
            name="email"
            placeholder="Enter your email"
            value={inputs.email}
            onChange={handleChange}
            
          />
          <div className="forgot-password">
            <a href="/reset">Forgot Password?</a>
          </div>
          <div className="divider">OR</div>
          <button className="social-sign-in google">Sign in with Google</button>
          <button className="social-sign-in facebook">Sign in with Facebook</button>
          <div className="signup-link">
            Don’t have an account? <a href="/signup">Sign up</a>
          </div>
          <button type="submit" className="sign-in-button">Sign in</button>
        </form>
        </div>
    </div>
  );
};

export default LoginForm;
