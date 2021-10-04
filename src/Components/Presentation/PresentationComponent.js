// External
import React, { Component } from "react";

import { Container } from "react-bootstrap";
import Typography from "@material-ui/core/es/Typography";
import { Translate } from "react-redux-i18n";
import Chip from "@material-ui/core/Chip";

// Ours
import "../../Styles/Presentation/presentationStyles.scss";
import codinGameLogo from "../../Assets/Images/codingame.svg";
import github from "../../Assets/Images/github.svg";

class PresentationComponent extends Component<{
}> {
  render() {
    return (
      <Container className="Presentation section">
        <Typography variant="h1"><Translate value="presentation.title" /></Typography>
        <Container className="flexDisplay">
          <Container className="flexChildStatic gauche box">
            <Typography variant="h3"><Translate value="presentation.whoami.title" /></Typography>
            <Typography variant="body1"><Translate value="presentation.whoami.description" dangerousHTML/></Typography>
          </Container>
          <Container className="flexChildStatic droite flexCollumn">
            <Container className="flexChildAuto box">
              <Typography variant="h3"><Translate value="presentation.like.title"/></Typography>
              <Typography className="chips-container" variant="body1">
              {
                this.props.translations[this.props.locale].presentation.like.list.map((item, idx) => 
                  <Chip label={item} key={idx} />
                )
              }
              </Typography>
            </Container>
            <Container className="flexChildAuto box">
              <Typography variant="h3"><Translate value="presentation.dislike.title"/></Typography>
              <Typography className="chips-container" variant="body1">
              {
                this.props.translations[this.props.locale].presentation.dislike.list.map((item, idx) => 
                  <Chip label={item} key={idx} />
                )
              }</Typography>
            </Container>
          </Container>
        </Container>
        <Container className="links box">
          <Typography variant="h3"><Translate value="presentation.links.title"/></Typography>
          <Typography variant="body1">
            <Container className="flexDisplay">
              <a href="https://www.codingame.com/profile/c75f718d581ee2fb8f870e31162208994977641" target="_blank"><Translate value="presentation.links.codingame"/></a>
              <img src={codinGameLogo} />
             </Container>
            <Container className="flexDisplay">
              <a href="https://github.com/fabJunior/fjunior-app" target="_blank"><Translate value="presentation.links.github"/></a>
              <img src={github} />
            </Container>
          </Typography>
        </Container>
      </Container>
    );
  }
}

export default PresentationComponent;
