export default function CartItem({ productDetails: { id, name, price, quantity }, onSubmit}) { // nested prop destructuring

  return (
    <div className="cart-product">
      <div className="cart-product-details">
        <img className="cart-product-img" src={`/img/${id}.jpg`} alt={name}/>
        <div className="cart-product-name">{name}</div>
      </div>
      <div className="cart-product-quantity">
        <form onSubmit={(e) => {
          e.preventDefault();
          onSubmit(id, e.target.elements.quantity.value);
        }}>
          <label htmlFor="quantity">Quantity</label>
          <input id="quantity" type="number" defaultValue={quantity} min="0" max="99" />
          <button className="update" type="submit">Update</button>
        </form>
        <div className="cart-product-price">${(parseFloat(price) * parseFloat(quantity)).toFixed(2)} USD</div>
      </div>
    </div>
  );
};