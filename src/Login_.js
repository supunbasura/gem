import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import React, { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import './Common.css';
import './Login_.css';
import LoginForm from './Login';

const LoginPage = () => {
    useEffect(() => {
        // When the component mounts, add the no-scroll class to the body
        document.body.classList.add('no-scroll');
    
        // Cleanup function to remove the class when the component unmounts
        return () => {
          document.body.classList.remove('no-scroll');
        };
      }, []);
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
    <div className="login-container">
      <div className="offer-section">
        <h1>THE BEST OFFER FOR <br></br>YOU BUSINESS</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.<br></br> Temporibus, expedita iusto veniam atque, magni tempora mollitia dolorum.</p>
        
      </div>
      <div className="form-section">
        <div className="content_con3">
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
            <button className="social-sign-in google">
                <FontAwesomeIcon icon={faGoogle} className='fagoogle'/><span className='gspan'>Sign in with Google</span>
            </button>
            <button className="social-sign-in facebook">
                <FontAwesomeIcon icon={faFacebookF} className='fafacebook'/> <span className='fspan'>Sign in with Facebook</span>
            </button>

            <div className="signup-link">
                Don’t have an account? <a href="/signup">Sign up</a>
            </div>
            <button type="submit" className="sign-in-button">Sign in</button>
            </form>
        </div>

      </div>
    </div>
  );
}

export default LoginPage;
