
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const SignIn = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleSignIn = (e) => {
    e.preventDefault();
    if (inputValue.trim().toUpperCase() === 'JAMES') {
      navigate('/profile/'); 
   
    } else {
      setError('Invalid credentials. Please enter "JAMES" to sign in.');
    }
    
  };

  return (
    <div className="auth-page">
      <div className="auth-form-container">
        <h1>Sign In</h1>
        <form className="auth-form" onSubmit={handleSignIn}>
          <div className="form-group">
            <label htmlFor="login">Type "JAMES" to sign in</label>
            <input
              type="text"
              id="login"
              name="login"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign In</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignIn;


