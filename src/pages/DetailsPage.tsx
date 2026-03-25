import { EcommerceContext } from "@/context/ecommerceContext"
import { useContext } from "react"


function DetailsPage() {

    const { data, countCart } = useContext(EcommerceContext)!

    const selectData = data.filter((item) => countCart[item.id])

    return (
        <div className="flex items-center justify-center p-6">
            {selectData.map((item) => (
                <div>

                    <div className="text-lg">
                        {item.category}
                    </div>
                    <div>
                        {item.title}
                    </div>
                    <img
                        src={item.image}
                        alt="image"
                        className="w-26 h-26 object-cover rounded-lg"
                    />
                </div>


            )

            )}
        </div>
    )
}

export default DetailsPage

