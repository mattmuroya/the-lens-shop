import FadeIn from "react-fade-in/lib/FadeIn";

export default function NavBar() {
  return (
    <main className="home-main">
      <FadeIn className="hero-container" delay={300} transitionDuration={1000}>
        <h2 className="hero-text">Shop Our Lens Selection.</h2>
        <button className="shop-btn" onClick={() => window.location='/shop'} type="button">Shop Now</button>
      </FadeIn>
    </main>
  );
};