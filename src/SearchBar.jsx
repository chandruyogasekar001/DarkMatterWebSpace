// SearchBar.js
import React from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term); // Call onSearch prop with search term
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search Apps" value={searchTerm} onChange={handleSearchChange} />
    </div>
  );
}

export default SearchBar;