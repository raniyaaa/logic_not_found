import React, { useState } from 'react';

const Signup = ({ switchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }
    console.log('Signed up with:', email);
    // Proceed with signup logic
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div className="link-container">
        <p>
          Already have an account?{' '}
          <button onClick={switchToLogin} className="link-button">
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
