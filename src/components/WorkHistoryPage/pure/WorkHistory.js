import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import sizeMe from 'react-sizeme'
import Confetti from 'react-confetti'

const styles = {
  root: {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: '100%'
  },
  thinker: {
    fontSize: 128
  }
}

function WorkHistory({ classes, onKeyPress, unlocked, size }) {
  return (
    <div className={classes.root} onKeyPress={onKeyPress}>
      <Grid container justify="center">
        <Grid item>
          <div className={classes.thinker}>{unlocked ? '😍' : '🤔'}</div>
          {unlocked && <Confetti {...size} />}
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
  size: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  })
}

export default withStyles(styles)(
  sizeMe({
    monitorHeight: true,
    monitorWidth: true
  })(WorkHistory)
)
