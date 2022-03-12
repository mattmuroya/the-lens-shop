import useProducts from '../utils/useProducts';
import FadeIn from 'react-fade-in/lib/FadeIn';
import ProductCard from './ProductCard';

export default function Shop() {

  const [products] = useProducts('/data/lenses.json');

  return (
    <main className="shop-main">
        <FadeIn className="shop-container" delay={100} transitionDuration={400}>
          {products.map(product => {
            return <ProductCard key={product.id} productDetails={product}/>
          })}
        </FadeIn>
    </main>
  );
};