import React from "react";
import About from "../components/About";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <hr />
      <About />
      <hr />
      <Gallery />
      <hr />
      <Footer/>
    </div>
  );
};

export default Home;
