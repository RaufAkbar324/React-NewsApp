import React, { Component } from "react";
import "./Loader.css";

class Loader extends Component {
  render() {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100px",   // only takes 100px height
        background: "#ffffff" // light background for section
      }}>
        <div className="loader my-3"></div>
      </div>
    );
  }
}

export default Loader;
