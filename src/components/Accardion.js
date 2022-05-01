import React from "react";
import { useState } from "react";

const Accardion = (props) => {
  ///////////////////////////////////////////////////////

  // let a = 0;
  // const arr = [
  //   a,
  //   function (arr) {
  //     a = arr;
  //   },
  // ];

  // let [b, setB] = arr;

  // setB(2);

  ///////////////////////////////////////////////////////

  const [index, setIndex] = useState("");

  // if (index == 1) {
  //   setIndex(2);
  // }

  console.log(index);

  const dataRender = () => {
    return props.data.map((val, key) => {
      return (
        <div key={key}>
          <div className="ui styled accordion" onClick={() => setIndex(key)}>
            <div className="title active">
              <i className="dropdown icon"></i>
              {val.savol}
            </div>
            <div className={`content ${index == key ? "active" : ""}`}>
              <p
                className="transition visible"
                style={{ display: "block !important" }}
              >
                {val.javob}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  return <div>{dataRender()}</div>;
};

export default Accardion;
