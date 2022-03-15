export default function CartItem({ productDetails: { id, name, price, quantity }, onSubmit}) { // nested prop destructuring

  return (
    <div className="cart-product">
      <div className="cart-product-name">{name}</div>
      <div className="cart-product-details">
        <form onSubmit={(e) => {
          e.preventDefault();
          onSubmit(id, e.target.elements.quantity.value);
        }}>
          <label htmlFor="quantity">Quantity</label>
          <input id="quantity" type="number" defaultValue={quantity} min="0" />
          <button className="update" type="submit">Update</button>
        </form>
        <div className="cart-product-price">${(parseFloat(price) * parseFloat(quantity)).toFixed(2)} USD</div>
      </div>
    </div>
  );
};