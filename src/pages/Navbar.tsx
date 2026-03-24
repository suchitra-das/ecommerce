import { NavLink } from "react-router"

function Navbar() {
  return (
    <div className="bg-amber-500">
      <ul className="flex  justify-between p-10">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/card" className={({ isActive }) =>
  `text-xl font-bold cursor-pointe ${isActive ? "text-white" : "text-gray-600"}`
}>Cart</NavLink>
        </li>
        

        
        <li>
          <NavLink to="/cart"><sup className="rounded-full p-1 bg-red-700">count</sup></NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar