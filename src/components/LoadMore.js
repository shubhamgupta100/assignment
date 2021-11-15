import React, { useState } from "react";
import "./loadMore.css";
import { useSelector, useDispatch } from "react-redux";
import { loadMore } from "../actions/loadmoreAction";

const LoadMore = () => {
  const dispatch = useDispatch();
  let { cards, keyword, pageNum, lastPage } = useSelector(
    (state) => state.cards
  );
  let page;
  let { loads, pageNum: pageNumber } = useSelector((state) => state.load);
  if (pageNumber >= 2) {
    page = parseInt(pageNumber) + 1;
  } else {
    page = parseInt(pageNum) + 1;
  }

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(loadMore(keyword, page));
  };
  return (
    <div className="loadmore_container">
      <button onClick={handleClick}>Load More...</button>
    </div>
  );
};

export default LoadMore;
