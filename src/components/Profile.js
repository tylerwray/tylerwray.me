import React from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import football from '../images/football-happy.jpg';
import uvu from '../images/uvu_emblem.png';
import family from '../images/family.jpg';
import code from '../images/code.jpg';

import Focus from './Focus';

const profileRowStyle = {
  margin: '25px 10px'
};

const Profile = () => (
  <div style={{ position: 'relative' }}>
    <Focus />
    <Grid style={{ maxWidth: '800px' }}>
      <Row style={profileRowStyle}>
        <Col xs={12}>
          <Card zDepth={4}>
            <CardMedia>
              <img src={family} alt="family" />
            </CardMedia>
            <CardTitle title="Family" subtitle="My family is the most important part of my life" />
          </Card>
        </Col>
      </Row>
      <Row style={profileRowStyle}>
        <Col xs={12}>
          <Card zDepth={4}>
            <CardMedia>
              <img src={code} alt="software" />
            </CardMedia>
            <CardTitle title="Software" subtitle="I fell in love with software early in college, and continue to hone my skills" />
          </Card>
        </Col>
      </Row>
      <Row style={profileRowStyle}>
        <Col xs={12}>
          <Card zDepth={4}>
            <CardMedia>
              <img style={{ padding: '10px', backgroundColor: '#EEEEEE' }} src={uvu} alt="school" />
            </CardMedia>
            <CardTitle title="School" subtitle="Education is very important to me. I currently attend Utah Valley University" />
          </Card>
        </Col>
      </Row>
      <Row style={profileRowStyle}>
        <Col xs={12}>
          <Card zDepth={4}>
            <CardMedia>
              <img src={football} alt="football" />
            </CardMedia>
            <CardTitle title="Sports" subtitle="Athletics has always been a big part of my life" />
          </Card>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Profile;
