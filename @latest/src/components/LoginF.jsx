import React, { useState } from 'react';
import '../styles/LoginForm.css';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';

const LoginForm = () => {

    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
  
    const handleLogin = () => {
      // Add your login logic here
      console.log('Logging in with', { email, password });
    };
  
    const handleRegister = () => {
      // Add your register logic here
      console.log('Registering with', { username, email, password });
    };
  
    const handleSocialLogin = (provider) => {
      // Add your social login logic here
      console.log(`Logging in with ${provider}`);
    };
  
    const toggleMode = () => {
      setIsLogin(!isLogin);
      setEmail('');
      setPassword('');
      setUsername('');
    };
  
    return (
      <div className="auth-container">
        <div className="auth-box">
          <h2>{isLogin ? 'Login' : 'Register'}</h2>
          {!isLogin && (
            <div className="input-container">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          )}
          <div className="input-container">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={isLogin ? handleLogin : handleRegister}>
            {isLogin ? 'Login' : 'Register'}
          </button>
          <p onClick={toggleMode} className="toggle-text">
            {isLogin ? 'Don\'t have an account? Register here' : 'Already have an account? Login here'}
          </p>
          <div className="social-login">
            <p>Or login with</p>
            <div className="social-icons">
              <FaGoogle onClick={() => handleSocialLogin('Google')} className="social-icon google" />
              <FaFacebook onClick={() => handleSocialLogin('Facebook')} className="social-icon facebook" />
              <FaTwitter onClick={() => handleSocialLogin('Twitter')} className="social-icon twitter" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default LoginForm;
