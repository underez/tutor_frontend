import React, { useEffect } from "react";
import Banner from "../Banner";
import Categories from "../Categories";
import TwoBlock from "../TwoBlock";
import Counter from "../Counter";
import Footer from "../Footer";


const Home = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
    
      <Banner />
      <Categories />
      <TwoBlock />
      <Counter />
      <Footer />
    </>
  );
};

export default Home;
