import React, { useState } from 'react';
import Login from './login'; // Import Login component
import Signup from './register'; // Import Signup component

function App() {
  const [isLoginPage, setIsLoginPage] = useState(true); // Track which page to show

  // Function to toggle between Login and Signup
  const togglePage = () => {
    setIsLoginPage(!isLoginPage);
  };

  return (
    <div>
      <h1>Welcome to RedAlert</h1>

      <button onClick={togglePage}>
        {isLoginPage ? 'Go to Sign Up' : 'Go to Login'}
      </button>

      {/* Conditionally render the Login or Signup component */}
      {isLoginPage ? <Login /> : <Signup />}
    </div>
  );
}

export default App;
