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
        <Col className="Open Source"></Col>
        <Col className="Open Source"></Col>
        <Col className="Open Source"></Col>
      </Row>
    </Grid>
  </div>
);

export default Profile;
