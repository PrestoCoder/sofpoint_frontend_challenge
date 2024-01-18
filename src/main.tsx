import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import CountryContextProvider from './context/CountryContextProvider';
import { createRoot } from 'react-dom/client';

const element = document.getElementById('root');
const root = createRoot(element!);

root.render(
  <React.StrictMode>
    <CountryContextProvider>
      <App />
    </CountryContextProvider>
  </React.StrictMode>
);
