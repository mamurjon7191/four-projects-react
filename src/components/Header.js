import React from "react";

const Header = function () {
  return (
    <div class="ui pointing menu">
      <a href="/dropDown" class="active item">
        DropDown
      </a>
      <a href="/translate" class="item">
        Translate
      </a>
      <a href="/search" class="item">
        Search
      </a>
      <a href="/accordion" class="item">
        Accordion
      </a>
      <div class="right menu">
        <div class="item">
          <div class="ui transparent icon input">
            <input type="text" placeholder="Search..." />
            <i class="search link icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
