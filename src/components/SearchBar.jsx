import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import "../css/searchbar.css";

const SearchBar = () => {
  const [query, setquery] = useState("");

  const handleClearClick = (e) => {
    e.preventDefault();
    setquery("");
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    console.log(query);
  };

  const handleChange = (e) => {
    setquery(e.target.value);
  };

  return (
    <form className="searchform" onSubmit={(e) => e.preventDefault()}>
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search"
          aria-label="Search"
        />
        {query && (
          <button
            type="button"
            onClick={handleClearClick}
            aria-label="Clear"
            id="clrbtn"
            className="btns"
          >
            <ClearIcon />
          </button>
        )}
        {!query && (
          <button
            type="submit"
            onClick={handleSearchClick}
            aria-label="Search"
            className="btns"
          >
            <SearchIcon />
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
