export default function ProductCard() {
  return (
    <article className="product-card">
      <img src={require('../img/xf16.jpg')} alt="product name" />
      <div className="description">
        <h3>XF16mmF1.5 R WR</h3>
        <form>
          <label for="quantity">Quantity</label>
          <input type="number" id="quantity" name="quantity" min="0" defaultValue="1" />
          <button type="submit" onClick={(e) => e.preventDefault()}>Add to Cart</button>
        </form>
      </div>
    </article>
  )
}