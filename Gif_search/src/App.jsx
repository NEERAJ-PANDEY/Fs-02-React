import React, { useState, useEffect } from "react";
import "./app.css";
import axios from "axios";

import SearchForm from "./SearchForm";
import GifList from "./GifList";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("webdeveloper");
  const [isloading, setIsLoading] = useState(true);

  const performSearch = (value) => setQuery(value);
  // fetching data from giphy api
  useEffect(() => {
    axios(
      `https://api.giphy.com/v1/gifs/search?api_key=f3b8PiHqEC58PxYkUN0KluDjNK6pTufN&q=${query}&limit=25&offset=0&rating=g&lang=en`
    )
      .then((res) => setData(res.data.data))
      .catch((error) => console.log("Error fetching and parsing data", error))
      .finally(() => setIsLoading(false));
  }, [query]);

  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm onSearch={performSearch} />
        </div>
      </div>
      <div className="main-content">
        {isloading ? <p>Loading...</p> : <GifList data={data} />}
      </div>
    </>
  );
}

export default App;
