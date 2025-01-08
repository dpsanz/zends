import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'

import Home from './Pages/Home.jsx'

const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
      children: [
          { index: true, element: <Home /> },
          { path: "*", element: <PageNotFound /> }
      ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);