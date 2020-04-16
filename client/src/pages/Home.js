// @flow

import React from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'

type Props = {}
const Home = (props: Props) => {
  return (
    <Grid className="navbar-offset" fluid>
      <Row className="banner-row">
        <Row id="banner-cta">
          <Col className="text-center">
            <Button className="purple-button" id="banner-button">
              Join Us
            </Button>
          </Col>
        </Row>
      </Row>

      <Row>
        <Col className="text-container text-center">
          <h2>Covalence Movement</h2>
          <p>
            As students, many of us find ourselves stuck at home feeling
            helpless while COVID-19 ravages our communities, takes lives, by the
            thousands, and takes an immense physical and emotional toll on our
            frontline workers. However, there is actually so much that we CAN do
            to contribute to the situation, however large or small the effort
            may be. Covalence is a nationwide movement where we, as students,
            have decided to take a stand and prove to our frontline workers, our
            communities, the victims, and our future generations that we did our
            part in battling the COVID-19 pandemic.
          </p>
        </Col>
      </Row>
    </Grid>
  )
}

export default Home
