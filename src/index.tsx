import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import {API} from './config';

import AppRoutes from './Routes'

console.log(API)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
