import { Link } from "react-router"

const Navbar = () => {
    return (
        <div className="flex bg-blue-950 p-10 items-center justify-center">

            <div className="flex gap-16">

                <Link
                    to="/home"
                    className="hover:text-green-400 transition duration-200 text-white"
                >
                    Home
                </Link>



                <Link
                    to="/cart"
                    className="hover:text-green-700-400 transition duration-200 text-white"
                >
                    Cart
                </Link>


                {/* <Link
                    to="/cart"
                    className="hover:text-green-700-400 transition duration-200 text-white"
                >
                    Cart
                </Link> */}

            </div>

        </div>

    )
}

export default Navbar
