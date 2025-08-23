import React, { useState, useEffect } from "react";
import Hero from "../component/Hero/Hero";
import Popular from "../component/popular/Popular";
import Offers from "../component/Offers/Offers";
import Collections from "../component/New_Colections/Collections";
import NewsLetters from "../component/NewsLetter/NewsLetters";
import { getProducts } from "../services/api"; // استيراد دالة الجلب

const Shop = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setAllProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Hero />
      <Popular products={allProducts} />
      <Offers />
      <Collections products={allProducts} />
      <NewsLetters />
    </div>
  );
};

export default Shop;