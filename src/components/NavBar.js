import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav>
        <div id="logo"><a href="/">THE LENS SHOP</a></div>
        <ul id="menu">
          <li><NavLink className={({ isActive }) => isActive ? "active" : "inactive"} to="/">Home</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? "active" : "inactive"} to="/shop">Shop</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? "active" : "inactive"} to="/cart">Cart (0)</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};