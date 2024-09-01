import React from 'react';
import './SignupForm.css';

const SignUp = () => {
  return (
    <div className="auth-page">
      <div className="auth-form-container">
        <h1>Sign Up</h1>
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" onClick={() => alert('Sign up successful!')}>Sign Up</button>
          <div className="signup-link">
            Already have an account? <a href="/signin">Sign In</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

