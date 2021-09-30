// External
import React, { Component } from "react";
// Ours
import Home from "../Containers/Home";
import Header from "../Containers/Header";
import ResponsiveImage from "../Shared/UI/responsiveImage";
import Presentation from "../Containers/Presentation";
import ExperiencesPro from "../Containers/ExperiencesPro";

import workBg from "../Assets/Images/work-background.jpg";
import abstractBg from "../Assets/Images/abstract-background.jpg";

class MainContentAreaComponent extends Component {
  render() {
    return (
      <div className="MainContent flexColumn hInherit">
        <Header {...this.props} />
        <Home {...this.props} />
        <ResponsiveImage imgSrc={abstractBg} height="60vh" imgStyle={{ minWidth: "100vw" }} />
        <Presentation />
        <ResponsiveImage imgSrc={workBg} height="60vh" imgStyle={{ minWidth: "100vw" }} />
        <ExperiencesPro {...this.props} />
        <ResponsiveImage imgSrc="https://picsum.photos/3100/900?b" height="60vh" imgStyle={{ minWidth: "100vw" }} />
      </div>
    );
  }
}

export default (MainContentAreaComponent);
