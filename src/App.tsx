import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SignIn from "./pages/SignIn";
import Layout from "./Hook/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import './App.css'
import { EcommerceContext } from "./context/ecommerceContext";
import { useEffect, useState } from "react";
import DetailsPage from "./pages/DetailsPage";
import axios from 'axios'
import Payment from "./pages/Payment";




type dataType = {
  "id": number
  "title": string,
  "price": number,
  "description": string
  "image": string,
  "category": string

}


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
          <Home />
        </Layout>
      )
    },


    {
      path: "/cart",
      element: (

        <Layout>
          <Cart />
        </Layout>
      )
    },

    {
      path: "/details/:id",
      element: (
        <Layout>
          <DetailsPage />
        </Layout>
      )
    },

    {
      path: "/Payment",
      element: (
        <Layout>

          <Payment />
        </Layout>
      )
    }


  ]);


  const [data, setData] = useState<dataType[]>([])
  const [countCart, setCountCart] = useState<Record<number, number>>({})







  useEffect(() => {

    axios.get('https://fakestoreapi.com/products/')
      // .then(response => response.json())
      .then(res => setData(res.data));


    // console.log(data, "data")
  }, [])





  const handleAddCart = (id: number) => {
    setCountCart((prev) => ({ ...prev, [id]: prev[id] ? prev[id] + 1 : 1 }))
  }



  const handleDeleteCart = (id: number) => {
    setCountCart((prev) => ({ ...prev, [id]: prev[id] ? prev[id] - 1 : 0 }))
  }


const handleRemoveItem = (id: number) => {
  setCountCart((prev) => {
    const update = { ...prev };
    delete update[id];   
    return update;       
  });
};


  return (
    <>
      <EcommerceContext.Provider value={{ data, handleAddCart, handleDeleteCart, countCart , handleRemoveItem}}>
        <RouterProvider router={router} />
      </EcommerceContext.Provider>
    </>
  )
}

export default App
