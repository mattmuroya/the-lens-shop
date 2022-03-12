import useProducts from '../utils/useProducts'; 
import { useParams } from "react-router-dom";

export default function ProductPage(props) {

  const [products] = useProducts('/data/lenses.json');


  const { productId } = useParams();


  const {
    name,
    aperture,
    'focal length':focalLength,
    price
  } = products.find(product => {
    return product.id === productId;
  }) || {}; // fallback empty object for when value is undefined prior to fetch


  return (
    <main className="product-page-main">
      <div className="product">
        <img className="product-img" />
        <div className="product-details">
          <h2>{name}</h2>
          <p>Focal length: {focalLength}</p>
          <p>Maximum aperture: {aperture}</p>
        </div>
      </div>
    </main>
  );
};