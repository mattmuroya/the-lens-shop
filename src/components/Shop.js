// import useProducts from '../utils/useProducts';
import FadeIn from 'react-fade-in/lib/FadeIn';
import ProductCard from './ProductCard';
import { useOutletContext } from 'react-router-dom';

export default function Shop() {

  // const [products] = useProducts('https://mattmuroya.github.io/the-lens-shop/data/lenses.json');

  const { products, addToCart } = useOutletContext();

  return (
    <main className="shop-main">
        <FadeIn className="shop-container" delay={100} transitionDuration={400}>
          {products.map(product => {
            return <ProductCard key={product.id} productDetails={product} onSubmit={addToCart}/>
          })}
        </FadeIn>
    </main>
  );
};