import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SignIn from "./pages/SignIn";
import Layout from "./Hook/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import './App.css'
import { EcommerceContext } from "./context/ecommerceContext";
import { useState } from "react";

// type EcommerceContextType = {
//   count: Record<number, number>;
//   handleAdd: (id: number) => void;
//   handleDelete: (id: number) => void;
// };


type CartType = {
  [key: number]: number;
};

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

const [count, setCount] = useState<CartType>({});




  const handleAdd = (id:number) => {
    setCount((prev) => ({
      ...prev,
      [id]: prev[id] ? prev[id] + 1 : 1,
    }));
  };

  const handleDelete = (id: number) =>{
    setCount((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 0,
    }));
  };




  return (
    <>
      <EcommerceContext.Provider value={{handleAdd, count, handleDelete}}>
      <RouterProvider router={router} />
      </EcommerceContext.Provider>
    </>
  )
}

export default App
