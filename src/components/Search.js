import axios from "axios";

import React, { useState, useEffect } from "react";
const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const changeTerm = (e) => {
    setTerm(e.target.value);
  };
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: term,
        },
      });
      setResults(data.data.query.search);
    };
    const timer = setTimeout(() => {
      if (term) {
        getData();
      } else if (!term && results.length) {
        setResults([]);
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [term]);
  const renderResults = () => {
    return results.map((val) => {
      return (
        <div key={val.pageid} style={{ marginTop: "20px" }}>
          <div className="ui message">
            <div className="header">{val.title}</div>
            <p dangerouslySetInnerHTML={{ __html: val.snippet }}></p>
            <a
              href={`https://en.wikipedia.org/wiki?curid=${val.pageid}`}
              className="button ui black"
            >
              Go to page
            </a>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="ui container">
      <div className="ui loading search" style={{ marginTop: "50px" }}>
        <div className="ui icon input" style={{ width: "100%" }}>
          <input
            className="prompt"
            type="text"
            placeholder="Search..."
            value={term}
            onChange={changeTerm}
          />
          <i className="search icon"></i>
        </div>
        <div className="results"></div>
      </div>
      <div>{renderResults()}</div>
    </div>
  );
};

export default Search;
