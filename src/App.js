import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import useProducts from "./utils/useProducts";

function App() {
  const [products] = useProducts('https://mattmuroya.github.io/the-lens-shop/data/lenses.json');

  const [cart, setCart] = useState([
    {
      "id": "0001",
      "name": "XF16mmF1.4 R WR",
      "aperture": "F1.4",
      "focal length": "16mm",
      "price": "999.00",
      "quantity": "1"
    },
    {
      "id": "0002",
      "name": "XF23mmF1.4 R",
      "aperture": "F1.4",
      "focal length": "23mm",
      "price": "899.00",
      "quantity": "1"
    },
    {
      "id": "0003",
      "name": "XF35mmF1.4 R",
      "aperture": "F1.4",
      "focal length": "35mm",
      "price": "599.00",
      "quantity": "1"
    }
  ]);

  const cartQuantity = cart.reduce((accumulator, current) => {
    return accumulator + parseInt(current.quantity);
  }, 0)

  function addToCart(productId, quantity) {

    const product = products.find(element => element.id === productId);
    const cartIndex = cart.findIndex(item => item.id === product.id);
    
    if (cartIndex > -1) {
      if (parseInt(cart[cartIndex].quantity) + parseInt(quantity) > 99)  {
        alert(`Sorry! Maximum quantity of 99 per product. You already have ${cart[cartIndex].quantity} of those in your cart.`);
      } else {
        // deep copy (not shallow) to avoid state mutation:
        const newCart = JSON.parse(JSON.stringify(cart));
        newCart[cartIndex].quantity = (Number(newCart[cartIndex].quantity) + Number(quantity)).toString();
        setCart(newCart);
      }
    } else { // index not found (< 0)
      setCart([...cart, { ...product, "quantity":quantity }]);
    }
  }

  function updateCartQuantity(productId, quantity) {
    const product = products.find(element => element.id === productId);
    const cartIndex = cart.findIndex(item => item.id === product.id);
    const newCart = JSON.parse(JSON.stringify(cart));

    if (quantity === '0') {
      newCart.splice(cartIndex, 1);
    } else {
      newCart[cartIndex].quantity = quantity;
    }
    console.log(newCart);
    setCart(newCart);
  }
  
  return (
    <div className="wrapper">
      <NavBar cartQuantity={cartQuantity}/>
      <Outlet context={{ cart, setCart, addToCart, updateCartQuantity }} />
    </div>
  );
}

export default App;
