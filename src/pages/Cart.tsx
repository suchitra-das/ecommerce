import { EcommerceContext } from "@/context/ecommerceContext"
import { useContext } from "react"



function Cart() {
 const { data, countCart } = useContext(EcommerceContext)!
const selectData = data.filter((item) => countCart[item.id])

   
    if (selectData.length === 0) {
        return (
            <div className="flex items-center justify-center h-screen text-xl">
                Your cart is empty 🛒
            </div>
        )
    }

    return (
         <div className="flex flex-wrap gap-6 p-6 justify-center">
            {selectData.map((item) => (
                <div
                    key={item.id} 
                    className="border p-4 rounded-lg shadow-md w-60 flex flex-col items-center"
                >
                    <div className="text-lg font-semibold">
                        {item.category}
                    </div>

                    <div className="text-center text-sm">
                        {item.title}
                    </div>

                    <img
                        src={item.image}
                        alt="image"
                        className="w-24 h-24 object-cover rounded-lg"
                    />

                  
                    <div className="mt-2 font-bold">
                        Qty: {countCart[item.id]}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cart