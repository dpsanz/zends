import React from 'react';
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './Pages/Home.jsx'
import PageNotFound from './Pages/PageNotFound.jsx'
import Contato from './Pages/Contato.jsx'
import SecuritySuite from './Pages/SecuritySuite.jsx'

const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
      children: [
          { index: true, element: <Home /> },
          { path: 'contato', element: <Contato /> },
          { path: 'securitysuite', element: <SecuritySuite /> },
          { path: "*", element: <PageNotFound /> }
      ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);