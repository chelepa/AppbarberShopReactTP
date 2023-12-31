import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthenticationProvider } from './contexts/Authentication/AuthenticationProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthenticationProvider>
        <App />
    </AuthenticationProvider>
  </React.StrictMode>
);