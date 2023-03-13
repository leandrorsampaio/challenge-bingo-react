import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/2_tools/fonts.css';
import './styles/3_generic/reset.css';
import './styles/4_elements/base.css';
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

