// External
import React, { Component } from "react";

import { Container } from "react-bootstrap";
import Typography from "@material-ui/core/es/Typography";
import Button from "@material-ui/core/Button";
import Collapse from '@material-ui/core/Collapse';
import { Translate } from "react-redux-i18n";

// Ours
import "../../Styles/ExperiencesPro/transitions.scss";

class JobDescriptionComponent extends Component<{
  title: any,
  more: any,
}> {
  state = {
    expand: false
  }

  handleExpandClick = () => {
    this.setState({ expand: true });
  }

  render() {
    return (
      <Container className="Description">
        <Typography variant="h3">{ this.props.title }</Typography>
        <Typography variant="body1">{ this.props.children }</Typography>

        <Collapse in={!(this.state.expand) && !!(this.props.more)}> {/* Hide when expanded. Never show if there is no more stuff to display */}
          <Container className="LearnMore">
            <Button variant="outlined" size="medium" color="primary" onClick={this.handleExpandClick}><Translate value="expPro.more" />...</Button>
          </Container>
        </Collapse>

        <Collapse in={this.state.expand}>
          <hr />
          <Typography variant="body1">{ this.props.more }</Typography>
        </Collapse>
      </Container>
    );
  }
}

export default JobDescriptionComponent;
