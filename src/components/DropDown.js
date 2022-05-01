import React, { useState, useEffect, useRef } from "react";

const DropDown = (props) => {
  const [select, setSelection] = useState(props.data[0]);
  const [check, setCheck] = useState(false);
  useEffect(() => {
    props.func(select.Value);
  }, [select]);
  const renderData = () => {
    return props.data.map((val, value) => {
      if (val.Value === select.Value) {
        return;
      }
      return (
        <div
          className="item"
          data-value="jenny"
          key={value}
          onClick={() => {
            setSelection(val);
          }}
        >
          {val.Label}
        </div>
      );
    });
  };
  const toggle = () => {
    if (check == true) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  };
  const ref = useRef();
  useEffect(() => {
    document.querySelector("body").addEventListener("click", (e) => {
      if (e.target == ref.current) {
        return;
      }
      setCheck(false);
    });
  });
  return (
    <div>
      <h1>{props.label}</h1>
      <div
        className={`ui fluid selection dropdown ${
          check ? "active visible" : ""
        }`}
        ref={ref}
        onClick={toggle}
      >
        <input type="hidden" name="user" />
        <i className="dropdown icon"></i>
        <div className="default text">{select.Value}</div>
        <div className={`menu ${check ? "transition visible" : ""}`}>
          {renderData()}
        </div>
      </div>
    </div>
  );
};
export default DropDown;
