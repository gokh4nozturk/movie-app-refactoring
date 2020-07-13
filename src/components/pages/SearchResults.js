import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router";
import Axios from "axios";

import Navigation from "../Navigation";
import Sidebar from "../Sidebar";

function SearchResults() {
  const { searchKey = "" } = useParams();
  const { page, setPage } = useParams(1);
  const [searched, setSearched] = useState([]);
  const fetchData = useCallback(async () => {
    const data = await Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=8ebecc9f6798ef3e2aa77ea37765848b&language=en-US&query=${searchKey}&page=${page}&include_adult=false`
    ).then((res) => res.data);

    setSearched(data.results);
    console.log(data.results);
  }, [page, searchKey]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <>
      <div className="container-{breakpoint} home">
        <div className="row">
          <div className="col">
            <Navigation />
            <main className="main">
              <Sidebar />
              <div className="content">
                {searched.map((item) => item.title)}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
export default SearchResults;
