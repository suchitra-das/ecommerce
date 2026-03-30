


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


        <div className="flex justify-center items-center p-10 gap-12 mt-20">

            {details !== undefined ? (<div className="flex gap-10 border p-10 shadow-2xl rounded-lg border-blue-950">

                <div className="bg-blue-200 p-12 rounded-3xl shadow-lg">
                    <img
                        src={details.image}
                        alt="image"
                        className="w-60 h-60 object-cover"
                    />

                </div>

                <div className="items-center justify-center p-4 flex flex-col">
                    <h2 className="text-xl font-bold ">{details.title}</h2>

                    <p className="text-gray-800 text-md">{details.category}</p>

                    <p className="text-green-600 font-bold">₹{details.price}</p>

                    <p className="text-center max-w-md ">
                        {details.description}
                    </p>

                    <p className="text-center max-w-md">

                    </p>


                    <div className=" p-2">
                        <div className="flex items-center  border px-8 gap-6 rounded-2xl border-amber-300">
                            <div onClick={() => handleDeleteCart(details.id)} >

                                -

                            </div>

                            <span className="">{countCart[details.id] || 1}</span>

                            <div onClick={() => handleAddCart(details.id)}>+</div>
                        </div>


                    </div>






                </div>
            </div>) : null}

        </div>
    )
}

export default DetailsPage