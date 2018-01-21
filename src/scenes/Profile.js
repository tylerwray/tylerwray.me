import React from 'react';
import Focus from '../components/Focus';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import '../styles/Profile.css';

const Profile = () => (
  <div className="Profile">
    <Focus />
    <Grid>
      <Row>
        <Col xs={12} className="Sports">
          <div className="Card">
            I love sports
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="School">
          <div className="Card">
            I go to sschool
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="Family">
          <div className="Card">
            My family is very important to me
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="Software">
          <div className="Card">
            I fell in love with software early in college, and continue to hone my skills
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Profile;
