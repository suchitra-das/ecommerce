
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import { StrictMode } from 'react';


import SignIn from './pages/SignIn';
import './App.css'
import Home from './pages/Home';
import Layout from './Hook/Layout.js'
const router = createBrowserRouter([
  {
    path: "/home",
    element: (<Layout>
<Home/>
    </Layout>),
  },
   {
    path: "/login",
    element: (<Layout>
 <SignIn/>,
    </Layout>)
    
    
   
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
