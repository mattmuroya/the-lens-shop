import { useOutletContext } from "react-router-dom";

export default function Cart() {

  const [cart, setCart] = useOutletContext();

  const cartTotal = cart.reduce((accumulator, current) => {
    return accumulator + (parseFloat(current.price) * parseFloat(current.quantity));
  }, 0)

  return (
    <main className="cart-main">
      <div className="cart-container">
        <div className="cart-content">
          <h2>Cart</h2>
          <div className="cart-items">
            <div className="cart-product">
              <div className="cart-product-name">XF16mmF1.4 R WR</div>
              <div>Quantity: <input type="number" value="1" /></div>
            </div>
            <div className="cart-product">
              <div className="cart-product-name">XF23mmF1.4 R</div>
              <div>Quantity: <input type="number" value="2" /></div>
            </div>
            <div className="cart-product">
              <div className="cart-product-name">XF35mmF1.4 R</div>
              <div>Quantity: <input type="number" value="3" /></div>
            </div>
          </div>
          <div className="total">Total: {parseFloat(cartTotal).toFixed(2)}</div>
          <button onClick={() => alert('Thank you for shopping with us!')}>Check Out</button>
        </div>
      </div>
    </main>
  );
};