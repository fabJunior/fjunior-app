// External
import React, { Component } from "react";

import { Container } from "react-bootstrap";
import Typography from "@material-ui/core/es/Typography";
import { Fade, Button } from '@material-ui/core';
import { CSSTransition } from 'react-transition-group';
import { Translate } from "react-redux-i18n";
import { Parallax, Background } from 'react-parallax';

// Ours
import { colors } from "../../Styles/colors";
import "../../Styles/Home/transitions.scss";
import "../../Styles/Home/homeStyles.scss";
import dots from "../../Assets/Images/6dots.png";
import wave from "../../Assets/Images/wave.png";
import lines from "../../Assets/Images/3lines.png";
import losange from "../../Assets/Images/losange.png";

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
            <Container className="intro flexDisplay">
              <Button variant="outlined" size="small" onClick={this.handleClick}><Translate value="switchLang" /></Button>
              <Container className="nomPrenom">
                <Typography variant="h1">Fabien-Junior Fresse</Typography>
                <Typography variant="h3"><Translate value="home.catchphrase" /></Typography>
              </Container>

              <Container className="floats">
                <Parallax
                  style={{ position: "absolute", inset: "0" }}
                  bgStyle={{ left: "90%", top: "90%", filter: "blur(4px)" }}
                  strength={-500}
                >
                  <Background>
                    <img width="400px" src={dots} />
                  </Background>
                </Parallax>
                <Parallax
                  style={{ position: "absolute", inset: "0" }}
                  bgStyle={{ left: "20%", top: "30%"}}
                  strength={-300}
                >
                  <Background>
                    <img width="200px" src={lines} />
                  </Background>
                </Parallax>
                <Parallax
                  style={{ position: "absolute", inset: "0" }}
                  bgStyle={{ left: "10%", top: "80%", filter: "blur(4px)" }}
                  strength={-500}
                >
                  <Background>
                    <img width="300px" src={wave} />
                  </Background>
                </Parallax>
                <Parallax
                  style={{ position: "absolute", inset: "0" }}
                  bgStyle={{ left: "35%", top: "90%" }}
                  strength={-200}
                >
                  <Background>
                    <img width="300px" src={wave} />
                  </Background>
                </Parallax>
                <Parallax
                  style={{ position: "absolute", inset: "0" }}
                  bgStyle={{ left: "70%", top: "30%" }}
                  strength={-300}
                >
                  <Background>
                    <img width="150px" src={losange} />
                  </Background>
                </Parallax>
                <Parallax
                  style={{ position: "absolute", inset: "0" }}
                  bgStyle={{ left: "5%", top: "80%", filter: "blur(4px)" }}
                  strength={-500}
                >
                  <Background>
                    <img width="80px" src={losange} />
                  </Background>
                </Parallax>
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
