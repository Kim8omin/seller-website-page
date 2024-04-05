import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ToggleProvider } from "./context/ToggleContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ToggleProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ToggleProvider>
);
