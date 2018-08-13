import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "typeface-roboto";
import "typeface-open-sans";
import TabMenu from "./Common/Tabs";
import Footer from "./Common/Footer";
import { BrowserRouter } from "react-router-dom";

require("typeface-roboto");
require("typeface-open-sans");

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <TabMenu />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById("root"));
