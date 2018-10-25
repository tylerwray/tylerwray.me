import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Confetti from 'react-confetti'

const styles = {
  thinker: {
    fontSize: 128
  }
}

function WorkHistory({ classes, onKeyPress, unlocked, confettiSize }) {
  return (
    <div
      style={{
        width: confettiSize.width,
        height: confettiSize.height,
        position: 'absolute',
        left: 0
      }}
      onKeyPress={onKeyPress}
    >
      <Grid container justify="center">
        <Grid item>
          <div className={classes.thinker}>{unlocked ? '😍' : '🤔'}</div>
          {unlocked && <Confetti {...confettiSize} />}
          {unlocked && (
            <audio
              autoPlay
              src="https://www.soundboard.com/mediafiles/mz/Mzg1ODMxNTIzMzg1ODM3_JzthsfvUY24.MP3"
            />
          )}
        </Grid>
      </Grid>
    </div>
  )
}

WorkHistory.propTypes = {
  classes: PropTypes.object.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  unlocked: PropTypes.bool.isRequired,
  confettiSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  })
}

export default withStyles(styles)(WorkHistory)
