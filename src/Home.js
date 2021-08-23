import React from "react";
import "./Home.css";
import Header from "./Header";
import Banner from "./Banner";
import Hero from "./Hero";
import Recent from "./Recent";

function Home() {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Hero />
      <Recent />
      <Hero />
    </div>
  );
}

export default Home;
