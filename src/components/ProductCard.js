import { Link } from "react-router-dom";

export default function ProductCard({ productDetails: { id, name, price }, onSubmit }) { // nested prop destructuring

  return (
    <article className="product-card">
      <Link to={`/shop/product/${id}`}>
        <div className="img-container">
          <img src={`/img/${id}.jpg`} alt={name} />
        </div>
      </Link>
      <div className="description">
        <Link to={`/shop/product/${id}`}><h3>{name}</h3></Link>
        <p>${price} USD</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(id, e.target.elements.quantity.value); // form input's id attribute
          }}
        >
          <label htmlFor="quantity">Quantity</label>
          <input type="number" id="quantity" name="quantity" min="0" defaultValue="1" />
          <button type="submit">Add to Cart</button>
        </form>
      </div>
    </article>
  )
}