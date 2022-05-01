import axios from "axios";
import React, { useState, useEffect } from "react";
import DropDown from "./DropDown.js";
import Convert from "./Convert.js";

const Translate = function (props) {
  const [term, setTerm] = useState("");
  const [translate, setTranslate] = useState("");
  const [result, setResult] = useState("");
  const getVal = (e) => {
    setTerm(e.target.value);
  };
  const submit = function (e) {
    e.preventDefault();
    console.log(term);
  };
  const getDropdown = function (data) {
    setTranslate(data);
  };
  console.log(translate);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: term,
            target: translate,
            format: "text",
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms - IwDlM",
          },
        }
      );
      setResult(data.data.data.translations[0].translatedText);
    };
    const timer = setTimeout(() => {
      if (term) {
        console.log("if");
        getData();
      }
    }, 3000);
    return () => {
      console.log("return");
      clearTimeout(timer);
    };
  }, [term, translate]);
  return (
    <div>
      <div className="ui container">
        <div className="ui loading search" style={{ marginTop: "50px" }}>
          <form
            className="ui icon input"
            style={{ width: "100%" }}
            onSubmit={submit}
          >
            <input
              className="prompt"
              type="text"
              placeholder="Enter text..."
              onChange={getVal}
            />
            <i className="search icon"></i>
          </form>
          <div className="results"></div>
        </div>
      </div>
      <DropDown data={props.data} label="Translate to" func={getDropdown} />
      <Convert data={result} />
    </div>
  );
};

export default Translate;
