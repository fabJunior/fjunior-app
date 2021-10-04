// External
import React, { Component } from "react";

import { Container } from "react-bootstrap";
import Typography from "@material-ui/core/es/Typography";
import Chip from "@material-ui/core/Chip";
import { Translate } from "react-redux-i18n";
import { TextareaAutosize } from '@material-ui/core';

// Ours
import JobEntry from "./JobEntryComponent";
import JobDescription from "./JobDescriptionComponent";
import "../../Styles/ExperiencesPro/experiencesProStyles.scss";
import imageBleu from "../../Assets/Images/bleubanquise.jpg";
import imageRpl from "../../Assets/Images/roleplace.jpg";
import imageSupra from "../../Assets/Images/supraland.jpg";

class ExperiencesProComponent extends Component<{
}> {

  render() {
    return (
      <Container className="ExperiencesPro section">
        <Typography variant="h1"><Translate value="expPro.title" /></Typography>
         
         {/* ROLEPLACE */}

        <JobEntry entreprise="RolePlace" imgSrc={imageRpl} {...this.props}>
            <JobDescription
              title={ <Translate value={ "expPro.rpl.title" } /> }
              more={ <Translate value={ "expPro.rpl.moreDescription" } dangerousHTML/> }>
              <Translate value={ "expPro.rpl.description" } dangerousHTML/>

              <Typography variant="h3"><Translate value="expPro.languagesUsed" /></Typography>
              <Container className="chips-container">
                <Chip label="HTML" />
                <Chip label="SCSS" />
                <Chip label="Javascript" />
              </Container>

              <Typography variant="h3"><Translate value="expPro.toolsUsed" /></Typography>
              <Container className="chips-container">
                <Chip label="React" />
                <Chip label="Mocha" />
                <Chip label="GitLab" />
              </Container>
            </JobDescription>
        </JobEntry>

        {/* BLEU BANQUISE */}

        <JobEntry entreprise="Bleu Banquise" imgSrc={imageBleu} {...this.props}>
            <JobDescription
            title={ <Translate value={ "expPro.bb.0.title" } /> }
            more={ <Translate value={ "expPro.bb.0.moreDescription" } dangerousHTML/> }>
              <Translate value={ "expPro.bb.0.description" } dangerousHTML/>

              <Typography variant="h3"><Translate value="expPro.languagesUsed" /></Typography>
              <Container className="chips-container">
                <Chip label="HTML" />
                <Chip label="SCSS" />
                <Chip label="Javascript" />
                <Chip label="MySQL" />
              </Container>

              <Typography variant="h3"><Translate value="expPro.toolsUsed" /></Typography>
              <Container className="chips-container">
                <Chip label="Node.js" />
                <Chip label="Webpack" />
                <Chip label="Vue.js" />
                <Chip label="Git" />
                <Chip label={ <Translate value="expPro.linuxServer" /> } />
                <Chip label={ <Translate value="expPro.certbot" /> } />
              </Container>
            </JobDescription>

            <JobDescription
            title={ <Translate value={ "expPro.bb.1.title" } /> }
            more={ <Translate value={ "expPro.bb.1.moreDescription" } dangerousHTML/> }>
              <Translate value={ "expPro.bb.1.description" } dangerousHTML/>
            </JobDescription>
        </JobEntry>

        {/* SUPRAGAMES */}

        <JobEntry entreprise="SupraGames" imgSrc={imageSupra} {...this.props}>
            <JobDescription
            title={ <Translate value={ "expPro.supra.0.title" } /> }
            more={ <Translate value={ "expPro.supra.0.moreDescription" } dangerousHTML/> }>
              <Translate value={ "expPro.supra.0.description" } dangerousHTML/>

              <Typography variant="h3"><Translate value="expPro.languagesUsed" /></Typography>
              <Container className="chips-container">
                <Chip label="C++/Qt" />
              </Container>

              <Typography variant="h3"><Translate value="expPro.toolsUsed" /></Typography>
              <Container className="chips-container">
                <Chip label="GitHub" />
              </Container>
            </JobDescription>

            <JobDescription
            title={ <Translate value={ "expPro.supra.1.title" } /> }>
              <Translate value={ "expPro.supra.1.description" } dangerousHTML/>

              <Typography variant="h3"><Translate value="expPro.languagesUsed" /></Typography>
              <Container className="chips-container">
                <Chip label="BluePrint" />
              </Container>

              <Typography variant="h3"><Translate value="expPro.toolsUsed" /></Typography>
              <Container className="chips-container">
                <Chip label="GitHub" />
                <Chip label="Trello" />
              </Container>
            </JobDescription>
        </JobEntry>
      </Container>
    );
  }
}

export default ExperiencesProComponent;
