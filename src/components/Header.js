import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [searchText, setSerachText] = useState("");
  const change = (e) => {
    e.preventDefault();
    setSerachText(e.target.value);
  };
  return (
    <div className="search_container">
      <input type="text" onChange={change} value={searchText} />
      <button>Go</button>
    </div>
  );
};

export default Header;
