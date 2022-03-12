import { useState, useEffect } from "react";

export default function useProducts(url) {

  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      alert(`${err}. Please contact the administrator of this page.`);
    }
  }

  useEffect(() => { // calls getProducts() on mount
    getProducts();
  }, []);

  return [products]
}