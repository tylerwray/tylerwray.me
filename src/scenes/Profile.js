import React from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';

import Focus from '../components/Focus';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import football from '../images/football-happy.jpg';
import uvu from '../images/uvu_emblem.png';
import family from '../images/family.jpg';
import software from '../images/elec-board.jpg';

import '../styles/Profile.css';

const profileRowStyle = {
  margin: '25px 10px'
};

const Profile = () => (
  <div className="Profile">
    <Focus />
    <Grid style={{ maxWidth: '800px' }}>
      <Row style={profileRowStyle}>
        <Col xs={12}>
          <Card zDepth={4}>
            <CardMedia overlay={<CardTitle title="Family" subtitle="My family is the most important part of my life" />}>
              <img src={family} alt="family" />
            </CardMedia>
          </Card>
        </Col>
      </Row>
      <Row style={profileRowStyle}>
        <Col xs={12}>
          <Card zDepth={4}>
            <CardMedia overlay={<CardTitle title="Software" subtitle="I fell in love with software early in college, and continue to hone my skills" />}>
              <img src={software} alt="software" />
            </CardMedia>
          </Card>
        </Col>
      </Row>
      <Row style={profileRowStyle}>
        <Col xs={12}>
          <Card zDepth={4}>
            <CardMedia overlay={<CardTitle title="School" subtitle="Education is very important to me. I currently attend Utah Valley University" />}>
              <img style={{ padding: '10px 10px 60px 10px' }} src={uvu} alt="school" />
            </CardMedia>
          </Card>
        </Col>
      </Row>
      <Row style={profileRowStyle}>
        <Col xs={12}>
          <Card zDepth={4}>
            <CardMedia overlay={<CardTitle title="Sports" subtitle="Athletics has always been a big part of my life" />}>
              <img src={football} alt="football" />
            </CardMedia>
          </Card>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Profile;
