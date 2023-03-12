import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Super from './TESTE/Super';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Super />  
  </React.StrictMode>
);

