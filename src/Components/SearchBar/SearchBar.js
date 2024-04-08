import React from 'react'
import './Searchbar.css'
function SearchBar({ setSearchQuery }) {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container">
      <div className="row height d-flex justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="form">
            <i className="fa fa-search"></i>
            <input
              type="text"
              className="form-control form-input inp"
              placeholder="Search anything..."
              onChange={handleInputChange}
            />
            <span className="left-pan"><i className="fa fa-microphone"></i></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
