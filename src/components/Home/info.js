import React from "react";
import Title from "../Globals/Title";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import { FaJava } from "react-icons/fa";
import { DiNodejsSmall, DiAndroid, DiReact } from "react-icons/di";
//core components
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
//card
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardIcon from "../Card/CardIcon.js";
import CardFooter from "../Card/CardFooter.js";
import styles from "../../assets/styles/components/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Info() {
  const classes = useStyles();
  return (
    <section className="py-5">
      <div id="about-me" className="container">
        <Title title="About Me" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Experienced Software Engineer with a demonstrated history of
              working in the computer software industry. Skilled in Java, Web
              and Android App Development. Currently pursuing Master's degree
              specializing in Computer Vision and Machine Learning at University
              at Buffalo.
            </p>
          </div>
        </div>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color="info" stats icon>
                  <CardIcon color="info">
                    <Icon>
                      Java
                      <div>
                        <FaJava />
                      </div>
                    </Icon>
                  </CardIcon>
                </CardHeader>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color="info" stats icon>
                  <CardIcon color="info">
                    <Icon>
                      JavaScript
                      <div>
                        <DiNodejsSmall />
                      </div>
                    </Icon>
                  </CardIcon>
                </CardHeader>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color="info" stats icon>
                  <CardIcon color="info">
                    <Icon>
                      Android
                      <div>
                        <DiAndroid />
                      </div>
                    </Icon>
                  </CardIcon>
                </CardHeader>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color="info" stats icon>
                  <CardIcon color="info">
                    <Icon>
                      React
                      <div>
                        <DiReact />
                      </div>
                    </Icon>
                  </CardIcon>
                </CardHeader>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </section>
  );
}
