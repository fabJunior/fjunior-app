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

class ExperiencesProComponent extends Component<{
}> {

  render() {
    return (
      <Container className="ExperiencesPro">
        <Typography variant="h1"><Translate value="expPro.title" /></Typography>
         
         {/* ROLEPLACE */}

        <JobEntry entreprise="RolePlace" l10nKey="rpl" {...this.props}>
            <JobDescription
              title={ <Translate value={ "expPro.rpl.title" } /> }
              more={ <Translate value={ "expPro.rpl.moreDescription" } dangerousHTML/> }>
              <Translate value={ "expPro.rpl.description" } dangerousHTML/>

              <Typography variant="h3"><Translate value="expPro.languagesUsed" /></Typography>
              <Chip label="HTML" />
              <Chip label="SCSS" />
              <Chip label="Javascript" />

              <Typography variant="h3"><Translate value="expPro.toolsUsed" /></Typography>
              <Chip label="React" />
              <Chip label="Mocha" />
              <Chip label="GitLab" />
            </JobDescription>
        </JobEntry>

        {/* BLEU BANQUISE */}

        <JobEntry entreprise="Bleu Banquise" {...this.props}>
            <JobDescription
            title={ <Translate value={ "expPro.bb.0.title" } /> }
            more={ <Translate value={ "expPro.bb.0.moreDescription" } dangerousHTML/> }>
              <Translate value={ "expPro.bb.0.description" } dangerousHTML/>

              <Typography variant="h3"><Translate value="expPro.languagesUsed" /></Typography>
              <Chip label="HTML" />
              <Chip label="SCSS" />
              <Chip label="Javascript" />
              <Chip label="MySQL" />

              <Typography variant="h3"><Translate value="expPro.toolsUsed" /></Typography>
              <Chip label="Node.js" />
              <Chip label="Git" />
              <Chip label="Webpack" />
              <Chip label={ <Translate value="expPro.linuxServer" /> } />
              <Chip label={ <Translate value="expPro.certbot" /> } />
            </JobDescription>

            <JobDescription
            title={ <Translate value={ "expPro.bb.1.title" } /> }
            more={ <Translate value={ "expPro.bb.1.moreDescription" } dangerousHTML/> }>
              <Translate value={ "expPro.bb.1.description" } dangerousHTML/>
            </JobDescription>
        </JobEntry>

        {/* SUPRAGAMES */}

        <JobEntry entreprise="SupraGames" {...this.props}>
            <JobDescription
            title={ <Translate value={ "expPro.supra.0.title" } /> }
            more={ <Translate value={ "expPro.supra.0.moreDescription" } dangerousHTML/> }>
              <Translate value={ "expPro.supra.0.description" } dangerousHTML/>

              <Typography variant="h3"><Translate value="expPro.languagesUsed" /></Typography>
              <Chip label="C++/Qt" />

              <Typography variant="h3"><Translate value="expPro.toolsUsed" /></Typography>
              <Chip label="GitHub" />
            </JobDescription>

            <JobDescription
            title={ <Translate value={ "expPro.supra.1.title" } /> }>
              <Translate value={ "expPro.supra.1.description" } dangerousHTML/>

              <Typography variant="h3"><Translate value="expPro.languagesUsed" /></Typography>
              <Chip label="BluePrint" />

              <Typography variant="h3"><Translate value="expPro.toolsUsed" /></Typography>
              <Chip label="GitHub" />
              <Chip label="Trello" />
            </JobDescription>
        </JobEntry>
      </Container>
    );
  }
}

export default ExperiencesProComponent;
