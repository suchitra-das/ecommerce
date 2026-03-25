import { EcommerceContext } from "@/context/ecommerceContext"
import { useContext } from "react"
import { useParams } from "react-router-dom"

function DetailsPage() {
    const { data } = useContext(EcommerceContext)!
    const { id } = useParams()

    
    const product = data.find((item) => item.id === Number(id))

    if (!product) {
        return <div className="text-center mt-10">Product not found</div>
    }

    return (
        <div className="flex flex-col items-center p-10 gap-4">
            <img
                src={product.image}
                alt="image"
                className="w-40 h-40 object-cover"
            />

            <h2 className="text-xl font-bold">{product.title}</h2>

            <p className="text-gray-500">{product.category}</p>

            <p className="text-green-600 font-bold">₹{product.price}</p>

            <p className="text-center max-w-md">
                {product.description}
            </p>
        </div>
    )
}

export default DetailsPage