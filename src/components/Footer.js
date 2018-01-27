import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Email from '../images/email.svg.js';
import Github from '../images/github.svg.js';
import Twitter from '../images/twitter.svg.js';
import Facebook from '../images/facebook.svg.js';
import Linkedin from '../images/linkedin.svg.js';

import '../styles/Footer.css';

const iconStyle = {
  height: '30px',
  fill: '#FFFFFF',
  marginRight: '20px',
  marginBottom: '20px'
};

const Footer = () => (
  <div className="Footer">
    <Grid>
      <Row style={{ maxWidth: '700px' }}>
        <Col xs={12} sm={6} md={4}>
          <h4>Contact</h4>
          <a href="mailto:wraytw@gmail.com">
            <Email style={iconStyle} />
          </a>
          <a href="https://github.com/wraytw" rel="noopener noreferrer" target="_blank">
            <Github style={iconStyle} />
          </a>
          <div></div>
          <a href="https://twitter.com/wray_tw" rel="noopener noreferrer" target="_blank">
            <Twitter style={iconStyle} />
          </a>
          <a href="https://www.facebook.com/wraytw" rel="noopener noreferrer" target="_blank">
            <Facebook style={iconStyle}/>
          </a>
          <a href="https://www.linkedin.com/in/wraytw/" rel="noopener noreferrer" target="_blank">
            <Linkedin style={iconStyle}/>
          </a>
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
