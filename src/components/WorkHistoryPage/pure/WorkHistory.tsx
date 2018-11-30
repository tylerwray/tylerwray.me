import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Confetti from 'react-confetti'

const styles = {
  thinker: {
    fontSize: 128
  }
}

interface Props {
  classes: {
    thinker: string
  }
  unlocked: boolean
  confettiSize: {
    width: number
    height: number
  }
}

function WorkHistory({ classes, unlocked, confettiSize }: Props) {
  return (
    <div
      style={{
        width: confettiSize.width,
        height: confettiSize.height,
        position: 'absolute',
        left: 0
      }}
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

export default withStyles(styles)(WorkHistory)
