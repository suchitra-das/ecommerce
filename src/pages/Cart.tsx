import { Button } from "@/components/ui/button"
import { EcommerceContext } from "@/context/ecommerceContext"
import { useContext } from "react"
import { useNavigate } from "react-router"


function formatPrice(value:number){
    return new Intl.NumberFormat("en-IN",{
        style : "currency",
        currency: "INR",
         maximumFractionDigits: 0,
    }).format(value)
}""



function Cart() {
    const { data, countCart, handleDeleteCart, handleAddCart, handleRemoveItem} = useContext(EcommerceContext)!
    const selectData = data.filter((item) => countCart[item.id])

    const navigate = useNavigate()








    let grandTotal = 0;

    for (let i = 0; i < selectData.length; i++) {
        console.log("suchitra")
        console.log(selectData[i], "object")
        let amount = selectData[i]
        console.log(amount)
        let quantity = countCart[amount.id]

        grandTotal += amount.price * quantity
    }





    if (selectData.length === 0) {
        return (
            <div className="flex items-center justify-center h-screen text-xl">
                Your cart is empty
            </div>
        )
    }


    const HandlePayment = () => {
        navigate("/payment")
    }


    return (
        <div className="flex flex-col  p-4 m-6 justify-center">
            {selectData.map((item) => {
                
                const quantity = countCart[item.id] || 0
                const total = item.price * quantity;


                return  (

                     <div
                    key={item.id}
                    className="border-t p-10  flex  max-w-max-200 gap-6 m-2 items-center"
                >


                    <div className="p-2 ">

                        <img
                            src={item.image}
                            alt="image"
                            className="w-40 h-40 object-cover rounded-lg"
                        />
                    </div>


                    <div className="flex flex-col  items-start p-2 ">

                        <div className=" text-sm ">
                            {item.description}
                        </div>
                        <div className="text-lg font-semibold ">
                            {item.category}
                        </div>

                        <div className="text-center text-sm ">
                            {item.title}
                        </div>

                        <div className="mt-2">
                                <div>Price: ₹ {item.price}</div>
                                <div>Quantity: {quantity}</div>

                               
                                <div className="font-bold text-lg">
                                    Total: ₹ {formatPrice(total)}
                                </div>
                            </div>


                        <div className="p-2">

                            {
                                countCart[item.id] ? (
                                    <div className="flex items-center  border px-8 gap-6 rounded-2xl border-amber-300 ">
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

 <Button
        onClick={() =>  {
             const confirmDelete = window.confirm("are you sure you want delete this item");
               if(confirmDelete){
handleRemoveItem(item.id)
            }

        }
           

          
            
            
            }
        className="bg-red-500 text-white px-4 py-2 rounded-lg"
    >
        Remove
    </Button>


                    </div>




                </div>
                )
            } )}

            <div className="text-2xl font-bold">Grand Amount : {formatPrice(grandTotal)}</div>
            <Button onClick={HandlePayment} className="w-80 py-6 bg-blue-700 mt-9">Proceed Price</Button>
        </div>
    )
}

export default Cart