// External
import React, { Component } from "react";

import { Container } from "react-bootstrap";
import Typography from "@material-ui/core/es/Typography";
import { Fade, Button } from '@material-ui/core';
import { CSSTransition } from 'react-transition-group';
import { Translate } from "react-redux-i18n";

// Ours
import { colors } from "../../Styles/colors";
import "../../Styles/Home/transitions.scss";
import "../../Styles/Home/homeStyles.scss";

class HomeComponent extends Component<{
  locale: string,
  setLocale: (lang: string) => void
}> {
  state = {
    loaded: false,
    showArrows: true
  }

  componentDidMount() {
    this.setState({ loaded: true });

    window.addEventListener('scroll', this.handleScroll);
  }

  handleClick = () => {
    this.props.setLocale(this.props.locale == "fr" ? "en" : "fr");
  }

  handleScroll = () => {
    var currentScrollPos = window.pageYOffset;

    if (window.pageYOffset > 300) {
      this.setState({ showArrows: false });
      window.removeEventListener('scroll', this.handleScroll);
    }
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
        <Fade in={this.state.showArrows}>
          <div className="arrows"></div>
        </Fade>
      </Container>
    );
  }
}

export default HomeComponent;
