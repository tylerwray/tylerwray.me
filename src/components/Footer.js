import React from 'react';

import FlatButton from 'material-ui/FlatButton';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Phone from '../images/phone.svg';
import Email from '../images/email.svg';
import Github from '../images/github.svg';
import Twitter from '../images/twitter.svg';
import Facebook from '../images/facebook.svg';
import Linkedin from '../images/linkedin.svg';

const footerStyle = {
  minHeight: '100px',
  width: '100%',
  backgroundColor: '#424242',
  color: '#FFFFFF',
  padding: '15px 25px'
};

const iconStyle = {
  height: '20px',
  fill: '#FFFFFF'
};

const buttonStyle = {
  marginBottom: '10px'
};

const Footer = () => (
  <div style={footerStyle}>
    <Grid>
      <Row style={{ maxWidth: '700px' }}>
        <Col xs={12} sm={6}>
          <h4>Contact</h4>
          <Row>
            <Col xs={12} md={6}>
              <FlatButton
                href={'tel:+18018556510'}
                target="_blank"
                label="Phone"
                secondary={true}
                icon={<Phone style={iconStyle} />}
                style={buttonStyle}
              />
            </Col>
            <Col xs={12} md={6}>
              <FlatButton
                href={'mailto:wraytw@gmail.com'}
                target="_blank"
                label="Email"
                secondary={true}
                icon={<Email style={iconStyle} />}
                style={buttonStyle}
              />
            </Col>
            <Col xs={12} md={6}>
              <FlatButton
                href={'https://github.com/wraytw'}
                target="_blank"
                label="Github"
                secondary={true}
                icon={<Github style={iconStyle} />}
                style={buttonStyle}
              />
            </Col>
            <Col xs={12} md={6}>
              <FlatButton
                href={'https://twitter.com/wray_tw'}
                target="_blank"
                label="Twitter"
                secondary={true}
                icon={<Twitter style={iconStyle} />}
                style={buttonStyle}
              />
            </Col>
            <Col xs={12} md={6}>
              <FlatButton
                href={'https://www.facebook.com/wraytw'}
                target="_blank"
                label="Facebook"
                secondary={true}
                icon={<Facebook style={iconStyle} />}
                style={buttonStyle}
              />
            </Col>
            <Col xs={12} md={6}>
              <FlatButton
                href={'https://www.linkedin.com/in/wraytw/'}
                target="_blank"
                label="Linkedin"
                secondary={true}
                icon={<Linkedin style={iconStyle} />}
                style={buttonStyle}
              />
            </Col>
          </Row>
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
