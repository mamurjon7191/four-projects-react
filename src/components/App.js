import React from "react";
import Accordion from "./Accardion.js";
import Search from "./Search.js";
import DropDown from "./DropDown.js";
import Translate from "./Translate.js";

const dataAccardion = [
  {
    id: 1,
    savol: "React zormi",
    javob: "React kaneshna",
  },
  {
    id: 2,
    savol: "Html zormi",
    javob: "Html yaxshi",
  },
  {
    id: 3,
    savol: "Css zormi",
    javob: "Css udar",
  },
];
const getDropdown = function (e) {
  console.log(e);
};
const dataDropdown = [
  {
    Label: "English",
    Value: "en",
  },
  {
    Label: "Uzbek",
    Value: "uz",
  },
  {
    Label: "Russian",
    Value: "ru",
  },
  {
    Label: "Arabic",
    Value: "ar",
  },
];
const route = function () {
  if (window.location.pathname === "/search") {
    return <Search />;
  } else if (window.location.pathname === "/translate") {
    return <Translate data={dataDropdown} />;
  } else if (window.location.pathname === "/dropDown") {
    return <DropDown data={dataDropdown} label="dropdown" func={getDropdown} />;
    // <DropDown data={props.data} label="Translate to" func={getDropdown} />
  } else if (window.location.pathname === "/accordion") {
    return <Accordion data={dataAccardion} />;
  }
};

const App = function () {
  return (
    <div>
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
      <div class="ui segment">{route()}</div>
    </div>
  );
};

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>

//         {/* <Accordion data={dataAccardion} /> */}
//         {/* <Search /> */}
//         {/* <DropDown data={dataDropdown} /> */}
//         <Translate data={dataDropdown} />
//       </div>
//     );
//   }
// }

export default App;
