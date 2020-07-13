import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

function SearchBox() {
  const { push } = useHistory();
  const { searchKey: searchKeyParam = "" } = useParams();
  const [searchKey, setSearchKey] = useState(searchKeyParam);

  const Search = useCallback(() => {
    if (!searchKey) return;
    push(`/search/${searchKey}`);
  }, [searchKey, push]);

  useEffect(() => {
    const newTimeout = setTimeout(Search, 500);
    return () => {
      clearTimeout(newTimeout);
    };
  }, [Search, searchKey]);

  return (
    <div>
      <form className="d-flex">
        <input
          autoFocus
          className="form-control mr-2"
          type="search"
          placeholder="type to search..."
          value={searchKey}
          onChange={(e) => {
            setSearchKey(e.currentTarget.value);
          }}
        />
        <button
          className="btn btn-outline-success"
          type="button"
          onClick={Search}
        >
          Search
        </button>
      </form>
    </div>
  );
}
export default SearchBox;
