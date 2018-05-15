import React from 'react'

import camel from '../media/images/camel.jpg'

const focusStyle = {
  marginBottom: '20px'
}

const portraitStyle = {
  height: '250px',
  width: '250px',
  borderRadius: '50%',
  backgroundColor: 'var(--box-shadow-color)',
  backgroundImage: `url(${camel})`,
  backgroundPosition: 'center',
  backgroundSize: '100%',
  margin: '25px auto',
  boxShadow: '0px 0px 30px 2px var(--box-shadow-color)'
}

const missionStatementStyle = {
  color: 'var(--secondary-text-color)',
  fontSize: '21px',
  fontWeight: '300',
  padding: '0 25px',
  maxWidth: '700px',
  margin: '0 auto'
}

const statementStyle = {
  padding: '5px'
}

const emphasisStyle = {
  fontWeight: 700
}

const Focus = () => (
  <div style={focusStyle}>
    <div style={portraitStyle}></div>
    <div>
      <div style={missionStatementStyle}>
        <div style={statementStyle}>I will work daily to <span style={emphasisStyle}>improve lives</span> of others</div>
        <div style={statementStyle}>Software I create will be of the <span style={emphasisStyle}>highest quality</span>, and tested thorougly</div>
        <div style={statementStyle}>People who work with me will recieve <span style={emphasisStyle}>my best self</span> each day</div>
      </div>
    </div>
  </div>
)

export default Focus
