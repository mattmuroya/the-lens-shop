import FadeIn from "react-fade-in/lib/FadeIn";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <main className="home-main">
      <FadeIn className="hero-container" delay={300} transitionDuration={1000}>
        <h2 className="hero-text">View Our Lens Selection.</h2>
        <Link className="shop-btn" to="/shop">Shop Now</Link>
      </FadeIn>
    </main>
  );
};