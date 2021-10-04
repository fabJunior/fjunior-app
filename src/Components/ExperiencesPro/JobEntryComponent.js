// External
import React, { Component } from "react";

import { Container } from "react-bootstrap";
import Typography from "@material-ui/core/es/Typography";
import { CSSTransition } from "react-transition-group";

// Ours
import "../../Styles/ExperiencesPro/transitions.scss";
import VisibilitySensor from "../../Shared/UI/visibilitySensor";
import ParallaxImage from "../../Shared/UI/parallaxImage";

class JobEntryComponent extends Component<{
  entreprise: string,
  imgSrc: string,
}> {

  render() {
    return (
      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <CSSTransition in={isVisible} classNames="slide" timeout={400}>
            <Container className="JobEntry flexColumn">

              <Container className="NomEntreprise">
                <Typography variant="h2">{ this.props.entreprise }</Typography>
              </Container>

              { this.props.children }

              { this.props.imgSrc && <ParallaxImage imgSrc={this.props.imgSrc} />}

              <hr/>

            </Container>
          </CSSTransition>
        )}
      </VisibilitySensor>
    );
  }
}

export default JobEntryComponent;
