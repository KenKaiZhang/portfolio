import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom"
import { router } from './router';

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
  </React.StrictMode>
);