import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import React from 'react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
