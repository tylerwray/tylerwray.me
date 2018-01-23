import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import '../styles/Footer.css';

const label = {
  fontWeight: '100',
  width: '80px',
  display: 'inline-block'
};

const Footer = () => (
  <div className="Footer">
    <Grid>
      <Row style={{ maxWidth: '700px' }}>
        <Col xs={12} sm={6} md={4}>
          <h4 style={{ paddingLeft: '20px' }}>Contact</h4>
          <div><div style={label}>Email</div><a href="mailto:wraytw@gmail.com">wraytw@gmail.com</a></div>
          <div><div style={label}>Github</div><a href="https://github.com/wraytw" rel="noopener noreferrer" target="_blank">wraytw</a></div>
          <div><div style={label}>Twitter</div><a href="https://twitter.com/wray_tw" rel="noopener noreferrer" target="_blank">@wray_tw</a></div>
          <div><div style={label}>Facebook</div><a href="https://www.facebook.com/wraytw" rel="noopener noreferrer" target="_blank">Tyler James Wray</a></div>
          <div><div style={label}>LinkedIn</div><a href="https://www.linkedin.com/in/wraytw/" rel="noopener noreferrer" target="_blank">Tyler James Wray</a></div>
        </Col>
      </Row>
      <div style={{ marginTop: '30px' }}></div>
      <Row>
        <Col xs={12} className="text-center">
          <div>Copyright 2018</div>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Footer;
