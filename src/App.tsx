import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SignIn from "./pages/SignIn";
import Layout from "./Hook/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import './App.css'
// import { EcommerceContext } from "./context/ecommerceContext";



function App() {
  const router = createBrowserRouter([


    {
      path: "/SignIn",
      element:
        < SignIn />
      ,
    },
    {
      path: "/home",
      element: (

        <Layout>
          <Home />,
        </Layout>
      )
    },


    {
      path: "/cart",
      element: (

        <Layout>
          <Cart />,
        </Layout>
      )
    },
  ]);



  return (
    <>
      {/* <EcommerceContext.Provider value={{}}> */}
      <RouterProvider router={router} />
      {/* </EcommerceContext.Provider> */}
    </>
  )
}

export default App
