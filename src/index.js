import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/startbootstrap-sb-admin-2/css/sb-admin-2.min.css'
import '../node_modules/startbootstrap-sb-admin-2/vendor/fontawesome-free/css/all.min.css'
import '../node_modules/startbootstrap-sb-admin-2/vendor/jquery/jquery.min.js'
import '../node_modules/startbootstrap-sb-admin-2/vendor/bootstrap/js/bootstrap.bundle.min.js'
import '../node_modules/startbootstrap-sb-admin-2/vendor/jquery-easing/jquery.easing.min.js'
import { AuthProvider } from './context/auth-context'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
