import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/app.css";
import "./styles/Header.css";
import "./styles/Main.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

