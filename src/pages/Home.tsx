
import { Button } from "@/components/ui/button";
import { EcommerceContext, type dataType } from "@/context/ecommerceContext";
import { useContext } from "react"
// import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router";


function Home() {


  const navigate = useNavigate()

  const { data, handleAddCart, handleDeleteCart, countCart } = useContext(EcommerceContext)!


  const handleDetail = (id: number) => {


    navigate(`/details/${id}`)

  }


  return (

    <div className="grid lg:grid-cols-4 gap-6 p-10 md:grid-cols-3 " >

      {data.map((item: dataType) => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-2xl px-2 py-6 flex flex-col items-center gap-2 border"
        >
          <div onClick={() => handleDetail(item.id)} className="flex flex-col items-center justify-center">
            <img
              src={item.image}
              alt="image"
              className="w-26 h-26 object-cover rounded-lg"
            />

            <div className="text-lg font-semibold text-gray-800">
              {item.category}
            </div>

            {/* <div className="text-sm text-gray-500 text-center">
            {item.description}
          </div> */}

            <div className="text-base font-bold text-green-600">
              ₹{item.price}
            </div>
          </div>
          {/* <div>Rate:{item.rating.rate}</div> */}
          {/* <div>count :{item.rating.count}</div> */}




          {
            countCart[item.id] ? (
              <div className="flex items-center  border px-8 gap-6 rounded-2xl border-amber-300">
                <div onClick={() => handleDeleteCart(item.id)} >

                  -

                </div>

                <span>{countCart[item.id]}</span>

                <div onClick={() => handleAddCart(item.id)}>+</div>
              </div>
            ) : (
              <Button onClick={() => handleAddCart(item.id)} className="bg-amber-400 text-black">
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
