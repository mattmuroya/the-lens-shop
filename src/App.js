import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import useProducts from "./utils/useProducts";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [products] = useProducts(process.env.PUBLIC_URL + '/data/lenses.json');

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]); // each time cart is changed

  const cartQuantity = cart.reduce((accumulator, current) => {
    return accumulator + parseInt(current.quantity);
  }, 0)

  function addToCart(productId, quantity) {

    const product = products.find(element => element.id === productId);
    const cartIndex = cart.findIndex(item => item.id === product.id);
    
    if (cartIndex > -1) {
      if ((parseInt(cart[cartIndex].quantity) || 0) + parseInt(quantity) > 99)  {
        alert(`Sorry! Maximum quantity of 99 per product. You already have ${cart[cartIndex].quantity} of those in your cart.`);
      } else {
        // deep copy (not shallow) to avoid state mutation:
        const newCart = JSON.parse(JSON.stringify(cart));
        newCart[cartIndex].quantity = (Number(newCart[cartIndex].quantity) + Number(quantity)).toString();
        setCart(newCart);
        toast.dismiss();
        toast('Added to cart!')
      }
    } else { // index not found (< 0)
      setCart([...cart, { ...product, "quantity":quantity }]);
      toast.dismiss();
      toast('Added to cart!')
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
    setCart(newCart);
    toast.dismiss();
    toast('Cart quantity updated!')
  }
  
  return (
    <div className="wrapper">
      <Toaster
      position="top-right"
        containerStyle={{
            marginTop: "60px",
        }}
        toastOptions={{
          duration: 2000,
          style: {
            padding: "1.2rem",
            borderRadius: "0",
          }
        }}
      />
      <NavBar cartQuantity={cartQuantity}/>
      <Outlet context={{ products, cart, setCart, addToCart, updateCartQuantity }} />
    </div>
  );
}

export default App;
