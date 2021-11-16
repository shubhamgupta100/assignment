import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import LoadMore from "../LoadMore/LoadMore";

import "./cardList.css";

const CardList = () => {
  var { cards, lastPage, pageNum } = useSelector((state) => state.cards);

  return (
    <>
      <div className="card_container">
        {cards &&
          cards.map((card, index) => (
            <Card
              key={card.mal_id * index}
              imageURL={card.image_url}
              cardTitle={card.title}
            />
          ))}
      </div>
      {parseInt(pageNum) < parseInt(lastPage) ? <LoadMore /> : ""}
    </>
  );
};

export default CardList;
