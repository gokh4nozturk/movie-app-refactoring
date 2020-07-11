import React from "react";

function SearchBox() {
  return (
    <div>
      <form class="d-flex">
        <input
          className="form-control mr-2"
          type="search"
          placeholder="type to search..."
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
export default SearchBox;
