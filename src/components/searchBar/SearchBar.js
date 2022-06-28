import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import "./SearchBar.css";

const SearchBar = () => {
  const[searchQuery, setSearchQuery] = useState('');
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    nav('/search?q=' + searchQuery);
  }

  return (
    <form action="/" method="get" autoComplete="off">
      <label htmlFor="header-search">
        <span className="visually-hidden">Search for recipes</span>
      </label>
      <input 
        value={ searchQuery }
        onInput={e => setSearchQuery(e.target.value)}
        type="text"
        id="header-search"
        placeholder="Search for recipes"
        name="q"
      />
      <button type="submit" className="search-submit" onClick={handleSubmit(searchQuery)}>Search</button>
    </form>
  );
}

export default SearchBar;