

import { EcommerceContext, type dataType } from "@/context/ecommerceContext"
import { useContext } from "react"
import { useParams } from "react-router-dom"



function DetailsPage() {
    const { data, countCart, handleDeleteCart, handleAddCart } = useContext(EcommerceContext)!
    const { id } = useParams()


    let details: dataType | undefined = undefined
    for (let i = 0; i < data.length; i++) {

        if (data[i].id.toString() === id) {
            details = data[i];
            break;
        }
    }


    console.log(typeof details)
    console.log(details, "suchitra")

    return (


        <div className="flex justify-center items-center p-4  gap-6 md:gap-12 ">

            {details !== undefined ? (
                <div className="flex flex-col md:flex-row gap-10 border p-6 md:p-10 shadow-2xl rounded-lg border-blue-950">

                    <div className="bg-blue-200 p-6 md:p-12 rounded-3xl shadow-lg flex justify-center">
                        <img
                            src={details.image}
                            alt="image"
                            className="w-40 h-40 md:w-60 md:h-60 object-cover"
                        />
                    </div>

                    <div className="items-center justify-center p-4 flex flex-col text-center md:text-left">
                        <h2 className="text-xl font-bold">{details.title}</h2>

                        <p className="text-gray-800 text-md">{details.category}</p>

                        <p className="text-green-600 font-bold">₹{details.price}</p>

                        <p className="max-w-md">
                            {details.description}
                        </p>

                        <div className="p-2">
                            <div className="flex items-center border px-6 gap-6 rounded-2xl border-amber-300">
                                <div onClick={() => handleDeleteCart(details.id)}>-</div>

                                <span>{countCart[details.id] || 1}</span>

                                <div onClick={() => handleAddCart(details.id)}>+</div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}

        </div>


    )
}

export default DetailsPage