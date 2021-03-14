// External
import React, { Component } from "react";

import { Container } from "react-bootstrap";
import Typography from "@material-ui/core/es/Typography";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Fade, Button } from '@material-ui/core';
import { CSSTransition } from 'react-transition-group';
import { Translate } from "react-redux-i18n";

// Ours
import { colors } from "../../Styles/colors";
import "../../Styles/Home/transitions.scss";
import "../../Styles/Home/homeStyles.scss";

function ShowOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({threshold: 400});

  return (
    <Fade in={trigger}>
      {children}
    </Fade>
  );
}

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({threshold: 200});

  return (
    <Fade in={!trigger}>
      {children}
    </Fade>
  );
}

class HomeComponent extends Component<{
  locale: string,
  setLocale: (lang: string) => void
}> {
  state = {
    loaded: false
  }

  componentDidMount() {
    this.setState({loaded: true});
  }

  handleClick = () => {
    this.props.setLocale(this.props.locale == "fr" ? "en" : "fr");
  }

  render() {
    return (
      <Container style={{
        height: "120vh"
      }}>
        <Container className="HomeContainer hInherit">
          <CSSTransition in={this.state.loaded} classNames="intro" unmountOnExit timeout={3*1000}>
            <Container className="intro">
              <Button variant="outlined" size="small" onClick={this.handleClick}><Translate value="switchLang" /></Button>
              <Container>
                <Typography variant="h1">Fabien-Junior Fresse</Typography>
                <Typography variant="h3"><Translate value="home.catchphrase" /></Typography>
              </Container>
            </Container>
          </CSSTransition>
        </Container>
        <HideOnScroll>
          <div className="arrows"></div>
        </HideOnScroll>
      </Container>
    );
  }
}

export default HomeComponent;
