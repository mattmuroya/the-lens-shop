export default function ProductCard({ productDetails: { id, name, price }, onSubmit }) { // nested prop destructuring

  return (
    <article className="product-card">
      <a href={`/shop/product/${id}`}>
        <div className="img-container">
          <img src={`/img/${id}.jpg`} alt={name} />
        </div>
      </a>
      <div className="description">
        <a href={`/shop/product/${id}`}><h3>{name}</h3></a>
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