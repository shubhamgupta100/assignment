import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import LoadMore from "./LoadMore";

import "./cardList.css";

const CardList = () => {
  const { cards, lastPage, pageNum, error, pageLimit } = useSelector(
    (state) => state.cards
  );

  return (
    <>
      <div className="card_container">
        {cards &&
          cards.map((card) => (
            <Card
              key={card.mal_id}
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
