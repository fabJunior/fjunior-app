// External
import React, { Component } from "react";
// Ours
import Home from "../Containers/Home";
import Header from "../Containers/Header";
import ResponsiveImage from "../Shared/UI/responsiveImage";
import ExperiencesPro from "../Containers/ExperiencesPro";

class MainContentAreaComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="MainContent flexColumn hInherit">
        <Header {...this.props} />
        <Home {...this.props} />
        <ResponsiveImage imgSrc="https://picsum.photos/3100/900?a" height="60vh" />
        <ExperiencesPro {...this.props} />
        <ResponsiveImage imgSrc="https://picsum.photos/3100/900?b" height="60vh" />
      </div>
    );
  }
}

export default (MainContentAreaComponent);
