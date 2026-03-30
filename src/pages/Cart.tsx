import { Button } from "@/components/ui/button"
import { EcommerceContext } from "@/context/ecommerceContext"
import { useContext } from "react"
import { useNavigate } from "react-router"


function formatPrice(value: number) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(value)
} ""



function Cart() {
    const { data, countCart, handleDeleteCart, handleAddCart, handleRemoveItem } = useContext(EcommerceContext)!
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


        <div className="flex flex-col p-4 m-2 md:m-6 justify-center">
            {selectData.map((item) => {
                const quantity = countCart[item.id] || 0;
                const total = item.price * quantity;

                return (
                    <div
                        key={item.id}
                        className="border-t p-4 md:p-6 flex flex-col md:flex-row gap-4  items-center"
                    >

                        <div className="p-2">
                            <img
                                src={item.image}
                                alt="image"
                                className="w-28 h-28 md:w-40 md:h-40 object-cover rounded-lg"
                            />
                        </div>


                        <div className="flex flex-col items-center md:items-start text-center md:text-left p-2 w-full">

                            <div className="text-sm line-clamp-2">
                                {item.description}
                            </div>

                            <div className="text-lg font-semibold">
                                {item.category}
                            </div>

                            <div className="text-sm">
                                {item.title}
                            </div>


                            <div className="mt-2">
                                <div>Price: ₹ {item.price}</div>


                                <div className="font-bold text-lg">
                                    Total: ₹ {formatPrice(total)}
                                </div>
                            </div>


                            <div className="p-2">
                                {countCart[item.id] ? (
                                    <div className="flex items-center border px-4 md:px-6 gap-4 md:gap-6 rounded-2xl border-amber-300">
                                        <div onClick={() => handleDeleteCart(item.id)}>-</div>
                                        <span>{countCart[item.id]}</span>
                                        <div onClick={() => handleAddCart(item.id)}>+</div>
                                    </div>
                                ) : (
                                    <Button
                                        onClick={() => handleAddCart(item.id)}
                                        className="bg-amber-400 text-black w-full md:w-auto"
                                    >
                                        Add to Cart
                                    </Button>
                                )}
                            </div>


                            <Button
                                onClick={() => {
                                    const confirmDelete = window.confirm(
                                        "Are you sure you want to delete this item?"
                                    );
                                    if (confirmDelete) {
                                        handleRemoveItem(item.id);
                                    }
                                }}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg w-full md:w-auto"
                            >
                                Remove
                            </Button>
                        </div>
                    </div>
                );
            })}


            <div className="text-xl md:text-2xl font-bold text-center md:text-right mt-4">
                Grand Amount : {formatPrice(grandTotal)}
            </div>

            <div className="flex justify-center md:justify-end">
                <Button className="w-full md:w-80 py-4 md:py-6 bg-blue-700 mt-6" onClick={HandlePayment}>
                    Proceed Price
                </Button>
            </div>
        </div>
    )
}

export default Cart