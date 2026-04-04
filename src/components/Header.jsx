import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white text-black px-6 py-4 flex justify-between items-center shadow-2xl">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold">
        <span className="text-yellow-400">Shoppy</span>Globe<span className="text-yellow-400">.</span>
      </Link>

      {/* Navigation */}
      <nav className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-yellow-300"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-yellow-300"
          }
        >
          Products
        </NavLink>

        <div className="relative">
          <NavLink to="/cart" className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-yellow-300"
          }>Cart</NavLink>
            <span className="absolute -top-2 -right-6 bg-red-500 text-white text-xs px-2 py-1 rounded-full">4</span>
        </div>
      </nav>

      {/* Sign In Button */}
      <Link
        to="/login"
        className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
      >
        Sign In
      </Link>
    </header>
  );
}

export default Header;
