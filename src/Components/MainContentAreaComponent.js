// External
import React, { Component } from "react";
// Ours
import Home from "../Containers/Home";
import Header from "../Containers/Header";
import ParallaxImage from "../Shared/UI/parallaxImage";
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
        <ParallaxImage imgSrc={abstractBg} />
        <Presentation />
        <ParallaxImage imgSrc={workBg} />
        <ExperiencesPro {...this.props} />
      </div>
    );
  }
}

export default (MainContentAreaComponent);
