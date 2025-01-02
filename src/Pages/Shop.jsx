import React from "react";
import Hero from "../component/Hero/Hero";
import Popular from "../component/popular/Popular";
import Offers from "../component/Offers/Offers";
import Collections from "../component/New_Colections/Collections";
import NewsLetters from "../component/NewsLetter/NewsLetters";
import Footer from "../component/Footer/Footer";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <Collections />
      <NewsLetters />
    </div>
  );
};

export default Shop;
