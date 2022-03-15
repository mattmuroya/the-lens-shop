import { useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";

export default function Cart() {

  const { cart, updateCartQuantity } = useOutletContext();

  const cartTotal = cart.reduce((accumulator, current) => {
    return accumulator + (parseFloat(current.price) * parseFloat(current.quantity));
  }, 0)

  return (
    <main className="cart-main">
      <div className="cart-container">
        <div className="cart-content">
          <h2>Cart</h2>
          <div className="cart-items">
            {cart.map(product => (
              <CartItem key={product.id} productDetails={product} onSubmit={updateCartQuantity} />
            ))}
          </div>
          <div className="total">Total: ${parseFloat(cartTotal).toFixed(2)}</div>
          <button className="checkout-btn" onClick={() => alert('Thank you for shopping with us!')}>Check Out</button>
        </div>
      </div>
    </main>
  );
};