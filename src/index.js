import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CombinedProvider from './components/CombinedProvider';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <CombinedProvider>
      <App />
    </CombinedProvider>
  </BrowserRouter>
);

reportWebVitals();
