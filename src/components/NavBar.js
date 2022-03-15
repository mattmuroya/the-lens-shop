import { Link, NavLink } from "react-router-dom";

export default function NavBar({ cartQuantity }) {
  return (
    <header>
      <nav>
        <div id="logo"><Link to="/">THE LENS SHOP</Link></div>
        <ul id="menu">
          <li><NavLink className={({ isActive }) => isActive ? "active" : "inactive"} to="/">Home</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? "active" : "inactive"} to="/shop">Shop</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? "active" : "inactive"} to="/cart">Cart ({cartQuantity})</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};