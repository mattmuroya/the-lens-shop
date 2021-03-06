import { useParams, Link, useOutletContext } from "react-router-dom";
import NothingHerePage from "./NothingHerePage";

export default function ProductPage() {

  const { productId } = useParams();

  const { products, addToCart } = useOutletContext();
  
  const {
    id,
    name,
    aperture,
    'focal length':focalLength,
    price
  } = products.find(product => {
    return product.id === productId;
  }) || {}; // fallback empty object for when value is undefined prior to fetch

  if (!id) {
    return <NothingHerePage />
  }

  return (
    <main className="product-page-main">
      <div className="product-page-container">
        <img className="product-img" src={require(`../img/${id}.jpg`)} alt={name} />
        <div className="product-details">
          <div className="content-container">
            <h2>{name}</h2>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Viverra orci sagittis eu volutpat odio facilisis.</p>
            <p>Focal length: {focalLength}</p>
            <p>Maximum aperture: {aperture}</p>
            <p>Price: ${price} USD</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addToCart(id, e.target.elements.quantity.value)
              }}
            >
              <label htmlFor="quantity">Quantity</label>
              <input type="number" id="quantity" name="quantity" min="0" max="99" defaultValue="1" />
              <button type="submit">Add to Cart</button>
            </form>
            <Link to="/shop">Return to Shop Page</Link>
          </div>
        </div>
      </div>
    </main>
  );
};