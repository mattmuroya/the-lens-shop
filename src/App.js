import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {

  const [cart, setCart] = useState([
    {
      "id": "0001",
      "price": "999.00",
      "quantity": "1",
    },
    {
      "id": "0002",
      "price": "899.00",
      "quantity": "2",
    },
    {
      "id": "0003",
      "price": "599.00",
      "quantity": "3",
    }
  ]);


  const cartQuantity = cart.reduce((accumulator, current) => {
    return accumulator + parseInt(current.quantity);
  }, 0)

  // function addToCart() {
  // }
  
  return (
    <div className="wrapper">
      <NavBar cartQuantity={cartQuantity}/>
      <Outlet context={[cart, setCart]} />
    </div>
  );
}

export default App;
