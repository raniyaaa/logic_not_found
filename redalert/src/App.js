import React from 'react';
import Home from './components/Home'; // Landing/Home page
import Login from './components/Login'; // User login
import Registration from './components/Registration'; // User registration
import EmergencyRequest from './components/EmergencyRequest'; // Emergency product requests
import Map from './components/Map'; // Map functionality
import ProductList from './components/ProductList'; // List of available products
import Chat from './components/Chat'; // Real-time chat functionality
import PushNotifications from './components/PushNotifications'; // Push notification testing

const App = () => {
  // Manage the current view/state manually without React Router
  const [currentPage, setCurrentPage] = React.useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'login':
        return <Login />;
      case 'register':
        return <Registration />;
      case 'emergency-request':
        return <EmergencyRequest />;
      case 'map':
        return <Map />;
      case 'products':
        return <ProductList />;
      case 'chat':
        return <Chat />;
      case 'notifications':
        return <PushNotifications />;
      default:
        return <h2>404 - Page Not Found</h2>;
    }
  };

  return (
    <div>
      {/* Simple Navigation Menu */}
      <nav>
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('login')}>Login</button>
        <button onClick={() => setCurrentPage('register')}>Register</button>
        <button onClick={() => setCurrentPage('emergency-request')}>Emergency Request</button>
        <button onClick={() => setCurrentPage('map')}>Map</button>
        <button onClick={() => setCurrentPage('products')}>Products</button>
        <button onClick={() => setCurrentPage('chat')}>Chat</button>
        <button onClick={() => setCurrentPage('notifications')}>Notifications</button>
      </nav>

      {/* Render the selected page */}
      <main>{renderPage()}</main>
    </div>
  );
};

export default App;
