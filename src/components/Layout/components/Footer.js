import React from 'react'

import Button from '@material-ui/core/Button'

import Phone from '../media/images/phone.svg'
import Email from '../media/images/email.svg'
import Github from '../media/images/github.svg'
import Twitter from '../media/images/twitter.svg'
import Facebook from '../media/images/facebook.svg'
import Linkedin from '../media/images/linkedin.svg'

const footerStyle = {
  minHeight: '100px',
  width: '100%',
  backgroundColor: '#424242',
  color: '#FFFFFF',
  padding: '15px 25px'
}

const iconStyle = {
  height: '20px',
  fill: '#FFFFFF'
}

const buttonStyle = {
  marginBottom: '10px'
}

const Footer = () => (
  <div style={footerStyle}>
    <Button
      href={'tel:+18018556510'}
      target="_blank"
      label="Phone"
      secondary={true}
      icon={<Phone style={iconStyle} />}
      style={buttonStyle}
    />
    <Button
      href={'mailto:wraytw@gmail.com'}
      target="_blank"
      label="Email"
      secondary={true}
      icon={<Email style={iconStyle} />}
      style={buttonStyle}
    />
    <Button
      href={'https://github.com/wraytw'}
      target="_blank"
      label="Github"
      secondary={true}
      icon={<Github style={iconStyle} />}
      style={buttonStyle}
    />
    <Button
      href={'https://twitter.com/wray_tw'}
      target="_blank"
      label="Twitter"
      secondary={true}
      icon={<Twitter style={iconStyle} />}
      style={buttonStyle}
    />
    <Button
      href={'https://www.facebook.com/wraytw'}
      target="_blank"
      label="Facebook"
      secondary={true}
      icon={<Facebook style={iconStyle} />}
      style={buttonStyle}
    />
    <Button
      href={'https://www.linkedin.com/in/wraytw/'}
      target="_blank"
      label="Linkedin"
      secondary={true}
      icon={<Linkedin style={iconStyle} />}
      style={buttonStyle}
    />
    <div>Copyright 2018</div>
  </div>
)

export default Footer
