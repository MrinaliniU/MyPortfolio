import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import BoxfileTwo from "../Globals/BoxFileTwo"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing(2),
  },
}))

export default function ProjectWork() {
  const classes = useStyles()

  return (
    <div id="project" className="entire-grid">
      <div>
        <h1
          align="center"
          className="display-4 text-capitalize font-weight-bold"
        >
          My Projects
        </h1>
      </div>
      <div className="box-job">
        <Grid container className={classes.root} spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <BoxfileTwo
                title="Human Activity Recognition | Android Developer"
                date="Jan 2019 - May 2019"
                p1="Developed android application in Kotlin and contributed code to handle camera activities and image conversion logic."
                p2="Designed Content Provider to store application data such as human actions that were recognized and performance log of
the TFLite model using Kotlin and Android ."
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <BoxfileTwo
                title="Civitas RIT Hackathon (114 Participants) | Android Developer"
                date="Mar 2019"
                p1="Designed and developed application activities such as login page, dashboard, and job search page using Java and Android ."
                p2="Engineered Content Provider to help manage in-app data; demo data such as sample jobs posted was fetched from
Google Firebase Real-Time-Database using Java ."
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
