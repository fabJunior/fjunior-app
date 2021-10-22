// External
import React, { Component, useLayoutEffect } from "react";
import Typography from "@material-ui/core/es/Typography";
import { Translate } from "react-redux-i18n";
import { ParallaxBanner, useController } from 'react-scroll-parallax';

// Ours
import Home from "../Containers/Home";
import Header from "../Containers/Header";
import ParallaxImage from "../Shared/UI/parallaxImage";
import Presentation from "../Containers/Presentation";
import ExperiencesPro from "../Containers/ExperiencesPro";

import workBg from "../Assets/Images/work-background.webp";
import abstractBg from "../Assets/Images/abstract-background.webp";

const ParallaxCache = () => {
    const { parallaxController } = useController();

    useLayoutEffect(() => {
        const handler = () => parallaxController.update();
        window.addEventListener('load', handler);
        return () => window.removeEventListener('load', handler);
    }, [parallaxController]);

    return null;
};

class MainContentAreaComponent extends Component {
  render() {
    return (
      <div className="MainContent flexColumn hInherit">
        <ParallaxCache />
        <Header {...this.props} />
        <Home {...this.props} />
        <ParallaxBanner layers={[{ image: abstractBg, amount: 0.4 }]} style={{ height: "60vh", width: "100%" }} />
        <Presentation />
        <ParallaxBanner layers={[{ image: workBg, amount: 0.4 }]} style={{ height: "60vh", width: "100%" }} />
        <ExperiencesPro {...this.props} />
        <Typography style={{ textAlign: "center", marginBottom: "1em" }} variant="h1"><Translate value="moreLater" /></Typography>
      </div>
    );
  }
}

export default (MainContentAreaComponent);
