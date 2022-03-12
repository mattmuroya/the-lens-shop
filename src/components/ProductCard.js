export default function ProductCard({ productDetails: { id, name, price } }) { // nested prop destructuring

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
        <form>
          <label htmlFor="quantity">Quantity</label>
          <input type="number" id="quantity" name="quantity" min="0" defaultValue="1" />
          <button type="submit" onClick={(e) => e.preventDefault()}>Add to Cart</button>
        </form>
      </div>
    </article>
  )
}