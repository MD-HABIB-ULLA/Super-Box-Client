import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import mainRouter from './Routers/mainRouter';
import AuthProvider from './Firebase/AuthProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={mainRouter} />
    </AuthProvider>

  </React.StrictMode>
)
