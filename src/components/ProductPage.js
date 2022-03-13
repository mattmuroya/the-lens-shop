import useProducts from '../utils/useProducts'; 
import { useParams } from "react-router-dom";

export default function ProductPage(props) {

  const [products] = useProducts('/data/lenses.json');

  const { productId } = useParams();

  const {
    id,
    name,
    aperture,
    'focal length':focalLength,
    price
  } = products.find(product => {
    return product.id === productId;
  }) || {}; // fallback empty object for when value is undefined prior to fetch

  return (
    <main className="product-page-main">
      <div className="product-page-container">
        <img className="product-img" src={`/img/${id}.jpg`} alt={name} />
        <div className="product-details">
          <div className="content-container">
            <h2>{name}</h2>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Viverra orci sagittis eu volutpat odio facilisis.</p>
            <p>Focal length: {focalLength}</p>
            <p>Maximum aperture: {aperture}</p>
            <p>Price: ${price} USD</p>
            <form>
              <label htmlFor="quantity">Quantity</label>
              <input type="number" id="quantity" name="quantity" min="0" defaultValue="1" />
              <button type="submit" onClick={(e) => e.preventDefault()}>Add to Cart</button>
            </form>
            <a href="/shop">Return to Shop Page</a>
          </div>
        </div>
      </div>
    </main>
  );
};