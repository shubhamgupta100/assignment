import React from "react";

import CardList from "./CardList";
import Header from "./Header";

import "./home.css";

const Home = () => {
  return (
    <div className="main">
      <Header />
      <CardList />
    </div>
  );
};

export default Home;
