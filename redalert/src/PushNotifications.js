import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/messaging';

const PushNotifications = () => {
  useEffect(() => {
    const messaging = firebase.messaging();
    
    messaging.requestPermission()
      .then(() => messaging.getToken())
      .then(token => {
        console.log('FCM Token:', token);
      })
      .catch(err => {
        console.error('Permission denied for push notifications:', err);
      });

    messaging.onMessage(payload => {
      console.log('Message received:', payload);
      alert('New Notification: ' + payload.notification.body);
    });
  }, []);

  return (
    <div>
      <h2>Push Notifications</h2>
      <p>You'll receive notifications for nearby product requests!</p>
    </div>
  );
};

export default PushNotifications;
