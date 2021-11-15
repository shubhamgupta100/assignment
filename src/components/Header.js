import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllCard } from "../actions/cardAction";
import "./header.css";

const Header = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const change = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getAllCard(keyword));
  };
  return (
    <div className="search_container">
      <input type="text" onChange={change} value={keyword} />
      <button onClick={handleClick} disabled={keyword === "" ? true : false}>
        Go
      </button>
    </div>
  );
};

export default Header;
