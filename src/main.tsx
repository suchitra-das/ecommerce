
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import { StrictMode } from 'react';

import SignIn from './pages/SignIn';
import './App.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
