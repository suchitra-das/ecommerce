
import { EcommerceContext } from "@/context/ecommerceContext";

import { useContext } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";


const Navbar = () => {

    const context = useContext(EcommerceContext);

    if (!context) {
        throw new Error("EcommerceContext not found");
    }

    const { countCart } = context;



    const totalCart = Object.values(countCart).reduce((a: number, b: number) => a + b, 0);

    return (
        <div className="flex bg-blue-950 p-10 items-center justify-between">

            <Link
                to="/home"
                className="hover:text-green-400 text-white text-lg"
            >
                Home
            </Link>

            <Link
                to="/cart"
                className="hover:text-green-400 text-white text-lg"
            >
                Cart
            </Link>

            <Link
                to="/"
                className="hover:text-green-400 text-white text-lg"
            >
                <div className="flex">
                    <TiShoppingCart className="h-6 w-6 " />
                    <sub>{totalCart}</sub>

                </div>

            </Link>

        </div>
    )
}

export default Navbar
