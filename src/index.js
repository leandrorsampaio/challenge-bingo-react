import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/3_generic/reset.css';
import './index.css';
import App from './App';
import TableGenerator from './TESTE/TableGenerator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <TableGenerator />  
  </React.StrictMode>
);

