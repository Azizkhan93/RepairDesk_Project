import "./App.css";
import React, { Component } from "react";
import { faFontAwesome } from "@fortawesome/free-regular-svg-icons";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Footer />
      </div>
    );
  }
}

export default App;
