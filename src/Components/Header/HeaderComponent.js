//External
import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Fade } from '@material-ui/core';

function ShowOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({threshold: 400});

  return (
    <Fade in={trigger}>
      {children}
    </Fade>
  );
}

class HeaderComponent extends Component {
  render() {
    return (
      <ShowOnScroll>
        <AppBar color="default">
          <Toolbar variant="dense" className="flexJustifyBetween">
            <div>
              {this.props.location ? this.props.location.pathname.split("/")[this.props.location.pathname.split("/").length - 1] : null}
            </div>
          </Toolbar>
        </AppBar>
      </ShowOnScroll>
    );
  }
}

export default HeaderComponent;
