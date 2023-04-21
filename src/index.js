import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1031113576900-fpujmbk9jm4mj6mi0qcret9tsjhah1as.apps.googleusercontent.com"><App /></GoogleOAuthProvider>
  </React.StrictMode>
);
