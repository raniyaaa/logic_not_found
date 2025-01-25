import React, { useState } from 'react';
import Registration from './register'; // Import the Registration component
import './login.css'; // Make sure to import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegistration, setShowRegistration] = useState(false); // State to toggle between login and registration

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login:', email, password);
  };

  return (
    <div className="auth-container">
      {showRegistration ? (
        <Registration /> // Render the Registration component if "showRegistration" is true
      ) : (
        <>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="link-container">
            <p>
              Don't have an account?{' '}
              <button onClick={() => setShowRegistration(true)}>Sign Up</button>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
