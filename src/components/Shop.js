import FadeIn from "react-fade-in/lib/FadeIn";
import ProductCard from "./ProductCard";

export default function Shop() {
  return (
    <main className="shop-main">
        <FadeIn className="shop-container">
          <ProductCard />
        </FadeIn>
    </main>
  );
};