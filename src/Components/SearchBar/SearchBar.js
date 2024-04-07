import React from 'react'

function SearchBar() {
  return (
    <form className="d-flex" role="search">
    <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success" type="submit">Search</button>
  </form>

  )
}

export default SearchBar