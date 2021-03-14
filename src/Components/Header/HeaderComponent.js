//External
import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Button } from "@material-ui/core";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Fade } from '@material-ui/core';
import { Translate } from "react-redux-i18n";

function ShowOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({threshold: 400});

  return (
    <Fade in={trigger}>
      {children}
    </Fade>
  );
}

class HeaderComponent extends Component<{
  locale: string,
  setLocale: (lang: string) => void
}> {

  handleClick = () => {
    this.props.setLocale(this.props.locale == "fr" ? "en" : "fr");
  }

  render() {
    return (
      <ShowOnScroll>
        <AppBar color="default">
          <Toolbar variant="dense" className="flexJustifyBetween">
            <Button variant="outlined" size="small" style={{ position: "absolute", right: "1em", color: "white", borderColor: "white" }} onClick={this.handleClick}><Translate value="switchLang" /></Button>
          </Toolbar>
        </AppBar>
      </ShowOnScroll>
    );
  }
}

export default HeaderComponent;
