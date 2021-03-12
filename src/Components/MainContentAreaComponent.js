// External
import React, { Component } from "react";
// Ours
import Home from "../Containers/Home";
import Header from "../Containers/Header";
import ResponsiveImage from "../Shared/UI/responsiveImage";

class MainContentAreaComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flexColumn hInherit">
        <Header {...this.props} />
        <Home {...this.props} />
        <ResponsiveImage imgSrc="https://picsum.photos/2500/800" width="100%" height="800px" />
      </div>
    );
  }
}

export default (MainContentAreaComponent);
