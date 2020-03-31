import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Boxfiles from "../Globals/Boxfiles";
import BoxfileTwo from "../Globals/BoxFileTwo";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  return (
    <div id="job" className="entire-grid">
      <div>
        <h1
          align="center"
          className="display-4 text-capitalize font-weight-bold text-blue"
        >
          Where I have Worked
        </h1>
      </div>
      <div className="box-job">
        <Grid container className={classes.root} spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Boxfiles
                title="Constant Contact | Software Engineer, Intern"
                date="Jun 2019 - Aug 2019"
                p1="Developed Node.js helper libraries consumed by 3 early adopter teams to validate module’s functionality, modularizing common functionalities such as checking e-mail mail delivery, validation of REST API responses."
                p2="Automated helper libraries test scripts using JavaScript and Jest with 98% code coverage, ensuring stable builds on any updates to these libraries."
                p3="Collaborated with Autobots team to configure SonarQube code coverage and quality check application on AWS EC2, projected to support internal teams in tracking production defects by 2X."
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Boxfiles
                title="SAP Labs | Product Engineer"
                date="May 2015 - Aug 2018"
                p1="Worked as an Agile team member for SAP Contracts to develop Smart Contracts UI using Javascript, React and PostgreSQL."
                p2="Designed and developed reusable and responsive React components for SAP Contracts UI, while migrating legacy Javascript code into Smart Contracts UI."
                p3="Built RESTful API endpoints for SAP Contracts customers and deployed them as open apis, enabling them to have freedom to heavily customize their contract data."
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Boxfiles
                title="Fidelity National Financial | Senior Quality Engineer"
                date="Sep 2013 - May 2015"
                p1="Automated web-based test scripts using Selenium WebDriver in Java, modernizing 100% of legacy scripts to significantly reduce test script maintenance time, leading in conversion of 2 test engineers as core contributors of the automation team. "
                p2="Led team of 3 test engineers as principal engineer to maintain 80% code coverage with newly added functionalities to Title application Agent Trax using Java, JUnit, and Selenium WebDriver."
                p3="Performed gap analysis for clients and translated problem statements to design requirements for the testing team."
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <BoxfileTwo
                title="Cognizant Technology Solutions | Software Engineer"
                date="Aug 2010 - Aug 2013"
                p1="Designed clean up script to clear data redundancy by building RESTful API in Groovy, enabling the team to use clean data for every automation run, saving an hour of each team member’s time to set-up data before testing any functionality."
                p2="Collaborated with the software quality assurance team to automate test scripts using SoapUI and Groovy; awarded “Partner Award” for customer satisfaction."
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
