import React, { useState } from 'react';
import Login from './login'; // Import Login Component
import Signup from './register'; // Import Signup Component
import Dashboard from './dashboard'; // Import Dashboard Component
import './App.css'; // Assuming you have global styles

function App() {
  const [currentPage, setCurrentPage] = useState('login'); // Default to login page

  // Switch to login page
  const handleSwitchToLogin = () => {
    console.log("Switching to Login Page");
    setCurrentPage('login');
  };

  // Switch to signup page
  const handleSwitchToSignup = () => {
    console.log("Switching to Signup Page");
    setCurrentPage('signup');
  };

 

  // Render the current page
  const renderPage = () => {
    console.log("Current Page:", currentPage);  // Add logging to check currentPage state
    if (currentPage === 'login') {
      return <Login switchToSignup={handleSwitchToSignup} />;
    } else if (currentPage === 'signup') {
      return <Signup switchToLogin={handleSwitchToLogin} />;
    } else if (currentPage === 'dashboard') {
      return <Dashboard switchToLogin={handleSwitchToLogin} />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>RedAlert - Connecting Women Near You</h1>
      </header>
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
