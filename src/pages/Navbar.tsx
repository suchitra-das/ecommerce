
import { EcommerceContext } from "@/context/ecommerceContext";

import { useContext, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";


const Navbar = () => {

    const context = useContext(EcommerceContext);
    const [showNavbar, setNavbar] = useState(false)

    if (!context) {
        throw new Error("EcommerceContext not found");
    }

    const { countCart } = context;



    const totalCart = Object.values(countCart).reduce((a: number, b: number) => a + b, 0);

    return (


        <div className="flex bg-blue-950  w-full h-15 items-center justify-between  py-4 ">

            <div
                className="flex flex-col lg:hidden gap-2 cursor-pointer  relative  "
                onClick={() => setNavbar((prev) => !prev)}
            >

                {showNavbar ? (<div className=" pl-3  text-white font-bold">X</div>) : (<div className="flex flex-col gap-2 pl-4">
                    <div className="h-0.5 w-8 bg-white "></div>
                    <div className="h-0.5 w-8 bg-white"></div>
                    <div className="h-0.5 w-8 bg-white"></div>
                </div>)}



            </div>

            <div className="hidden lg:flex justify-center items-center gap-20 p-10 w-full ">

                <Link to="/home" className="text-white text-lg hover:text-green-400">
                    Home
                </Link>

                <Link to="/cart" className="text-white text-lg hover:text-green-400">
                    Cart
                </Link>

                <Link to="/" className="text-white text-lg hover:text-green-400">
                    <div className="flex items-center gap-1">
                        <TiShoppingCart className="h-6 w-6" />
                        <sub>{totalCart}</sub>
                    </div>
                </Link>
            </div>


            {showNavbar && (
                <div className="w-full absolute top-14 flex flex-col items-center gap-6  lg:hidden bg-blue-800  ">

                    <Link to="/home" className="text-white text-lg">
                        Home
                    </Link>

                    <Link to="/cart" className="text-white text-lg">
                        Cart
                    </Link>

                    <Link to="/" className="text-white text-lg">
                        <div className="flex items-center gap-1">
                            <TiShoppingCart className="h-6 w-6" />
                            <sub>{totalCart}</sub>
                        </div>
                    </Link>
                </div>
            )}
        </div>


    )
}

export default Navbar
