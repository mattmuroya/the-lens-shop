export default function ProductCard({ productDetails: { id, name, aperture, 'focal length':focalLength, price } }) { // nested prop destructuring

  return (
    <article className="product-card">
      <img src={`/img/${id}.jpg`} alt={name} />
      <div className="description">
        <h3>{name}</h3>
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