import React, { useState } from "react";
import search from "../../assets/search.svg";
import "./Searchbar.css";

/**
 * Searchbar component.
 * @param {Object} props - The props passed to the component.
 * @param {Function} props.onSearch - The function to be called when search is initiated.
 * @returns {JSX.Element} JSX representing the searchbar component.
 */

const Searchbar = ({
  onSearch,
}: {
  onSearch: (username: string) => void;
}): JSX.Element => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchInput);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="search-container">
      <input
        type="search"
        className="search-input"
        placeholder="Username..."
        value={searchInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button className="search-button" onClick={handleSearch}>
        <img src={search} alt="search-icon" className="search-icon" />
      </button>
    </section>
  );
};

export default Searchbar;
