import React from "react";

import CardList from "./Card/CardList";
import Header from "./Header/Header";

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
