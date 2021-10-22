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

  animateFloat = (e) => {
    e.target.parentNode.animate([{transform: "scale(1)"}, {transform: "scale(.8)"}, {transform: "scale(1)"}], {duration: 250, easing: "cubic-bezier(.54, 0, .32, 1.34)"});

    for (let i = 0; i < 30; i++) {
      // We call the function createParticle 30 times
      // As we need the coordinates of the mouse, we pass them as arguments
      this.createParticle(e.pageX, e.pageY);
    }
  }

  createParticle = (x, y) => {
    const particle = document.createElement('particle');
    document.body.querySelector(".floatContainer").appendChild(particle);

    // Calculate a random size from 5px to 25px
    const size = Math.floor(Math.random() * 20 + 5);
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    // Generate a random color
    particle.style.background = `hsl(${Math.random() * 90 + 110}, 60%, 50%)`;

    // Generate a random x & y destination within a distance of 200px from the mouse
    let tempX, tempY;

    // Restrict the x and y coordinates in a circle using the pythagorean theorem
    while (tempX == undefined || tempX**2 + tempY**2 > 200**2) {
      tempX = (Math.random() - 0.5) * 2 * 200;
      tempY = (Math.random() - 0.5) * 2 * 200;
    }

    const destinationX = x + tempX;
    const destinationY = y + tempY;

    // Store the animation in a variable as we will need it later
    const animation = particle.animate([
    {
      // Set the origin position of the particle
      // We offset the particle with half its size to center it around the mouse
      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
      opacity: 1
    },
    {
      // We define the final coordinates as the second keyframe
      transform: `translate(${destinationX}px, ${destinationY}px)`,
      opacity: 0
    }
    ], {
      // Set a random duration from 500 to 1500ms
      duration: Math.random() * 1000 + 500,
      easing: 'cubic-bezier(0, .9, .57, 1)',
      delay: Math.random() * 150
    });

    // When the animation is complete, remove the element from the DOM
    animation.onfinish = () => {
      particle.remove();
    };
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

              <Container className="floatContainer">
                  <div className="float" style={{ left: "80%", top: "30%", opacity: "0.1", filter: "blur(4px)" }}>
                    <div>
                      <img width="300px" height="300px" draggable="false" src={dots} onClick={this.animateFloat} />
                    </div>
                  </div>

                  <div className="float" style={{ left: "15%", top: "10%" }}>
                    <div>
                      <img width="180px" height="180px" draggable="false" src={lines} onClick={this.animateFloat} />
                    </div>
                  </div>

                  <div className="float" style={{ left: "5%", top: "70%", opacity: "0.1", filter: "blur(4px)" }}>
                    <div>
                      <img width="300px" height="300px" draggable="false" src={wave} onClick={this.animateFloat} />
                    </div>
                  </div>

                  <div className="float" style={{ left: "40%", top: "70%" }}>
                    <div>
                      <img width="200px" height="200px" draggable="false" src={wave} onClick={this.animateFloat} />
                    </div>
                  </div>

                  <div className="float" style={{ left: "60%", top: "5%" }}>
                    <div>
                      <img width="120px" height="120px" draggable="false" src={losange} onClick={this.animateFloat} />
                    </div>
                  </div>

                  <div className="float" style={{ left: "5%", top: "40%", opacity: "0.1", filter: "blur(4px)" }}>
                    <div>
                      <img width="300px" height="300px" draggable="false" src={losange} onClick={this.animateFloat} />
                    </div>
                  </div>

                  <div className="float" style={{ left: "85%", top: "75%" }}>
                    <div>
                      <img width="200px" height="200px" draggable="false" src={losange} onClick={this.animateFloat} />
                    </div>
                  </div>
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
