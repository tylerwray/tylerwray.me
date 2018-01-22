import React from 'react';
import Focus from '../components/Focus';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Card from '../components/Card';
import football from '../images/football-happy.jpg';
import school from '../images/pass.jpg';
import family from '../images/family.jpg';
import software from '../images/elec-board.jpg';

import '../styles/Profile.css';

const Profile = () => (
  <div className="Profile">
    <Focus />
    <Grid>
      <Row>
        <Col xs={12}>
          <Card>
            <img src={football} alt="football" />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Card>
            <img src={school} alt="school" />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Card>
            <img src={family} alt="family" />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Card>
            <img src={software} alt="software" />
          </Card>
          I fell in love with software early in college, and continue to hone my skills
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Profile;
