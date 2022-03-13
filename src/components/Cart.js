export default function Cart() {
  return (
    <main className="cart-main">
      <div className="cart-container">
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
          <button>Check Out</button>
        </div>
      </div>
    </main>
  );
};