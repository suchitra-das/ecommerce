import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react"



function Home() {

  const [data, setData] = useState<any>([])
  const [count, setCount] = useState<{ [key: number]: number }>({})

  useEffect(() => {

    fetch('https://fakestoreapi.com/products/')
      .then(response => response.json())
      .then(data => setData(data));


    // console.log(data, "data")
 }, [])


const handleAdd = (id: number) => {
  console.log("add product id", id);

  setCount((prev) => ({
    ...prev,
    [id]: prev[id] ? prev[id] + 1 : 1,
  }));
};



const handleDelete = (id:number) => {
  setCount((prev)=>({...prev,
    [id] : prev[id] > 1 ? prev[id] -1 : 0
  }))
}
  return (

    <div className="grid grid-cols-4 gap-6">
    {data.map((item: any, index: number) => (
  <div
    key={index}
    className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center gap-2 "
  >
    <img
      src={item.image}
      alt="image"
      className="w-24 h-24 object-cover rounded-lg"
    />

    <div className="text-lg font-semibold text-gray-800">
      {item.category}
    </div>

    <div className="text-sm text-gray-500 text-center">
      {item.description}
    </div>

    <div className="text-base font-bold text-green-600">
      ₹{item.price}
    </div>

    
{
  count[item.id] ? (
    <div className="flex items-center gap-2">
      <button onClick={()=>handleDelete(item.id)}>-</button>

      <span>{count[item.id]}</span>

      <button onClick={() => handleAdd(item.id)}>+</button>
    </div>
  ) : (
    <Button onClick={() => handleAdd(item.id)}>
      Add to Cart
    </Button>
  )
}
   
    
  </div>
))}

    </div>
  )
}

export default Home
