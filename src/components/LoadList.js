import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import LoadMore from "./LoadMore";

import "./cardList.css";

const LoadList = () => {
  const { loads, lastPage, pageNum, error, pageLimit } = useSelector(
    (state) => state.cards
  );

  return (
    <>
      <div className="card_container">
        {loads &&
          loads.map((load) => (
            <Card
              key={load.mal_id}
              imageURL={load.image_url}
              cardTitle={load.title}
            />
          ))}
      </div>
      {parseInt(pageNum) < parseInt(lastPage) ? <LoadMore /> : ""}
    </>
  );
};

export default LoadList;
