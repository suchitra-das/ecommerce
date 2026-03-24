import { useEffect, useState } from "react"



function Home() {

  const [data, setData] = useState<any>([])

  useEffect(() => {

    fetch('https://fakestoreapi.com/products/')
      .then(response => response.json())
      .then(data => setData(data));


    // console.log(data, "data")


  }, [])



  return (

    <div>
      {data.map((item: any) => (
        <div className="grid grid-rows-2">
          <div>{item.category}</div>
          <div>{item.description}</div>
          <img src={item.image} alt="image" className="w-20 h-20" />
          <div>{item.price}</div>
        </div>

      ))}

    </div>
  )
}

export default Home
