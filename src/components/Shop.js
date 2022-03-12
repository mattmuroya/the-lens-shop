import { useEffect, useState } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import ProductCard from './ProductCard';


export default function Shop() {

  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await fetch('/data/lenses.json');
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      alert(`${err}. Please contact the administrator of this page.`);
    }
  }

  useEffect(() => { // calls getProducts() on mount
    getProducts();
  }, []);


  return (
    <main className="shop-main">
        <FadeIn className="shop-container">
          {products.map(product => <div key={product.id} className="product-card">{product.name}</div>)}
        </FadeIn>
    </main>
  );
};