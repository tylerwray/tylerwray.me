import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Replay from '@material-ui/icons/Replay'

function Loading(props) {
  let inner
  if (props.error) {
    inner = (
      <Typography variant="headline" color="error">
        Error loading page...
        <br />
        <Button variant="outlined" onClick={props.retry}>
          <Replay />
          Retry
        </Button>
      </Typography>
    )
  } else if (props.pastDelay) {
    inner = <CircularProgress />
  }
  return (
    <div
      style={{
        padding: 20,
        textAlign: 'center'
      }}
    >
      {inner}
    </div>
  )
}

Loading.propType = {
  error: PropTypes.bool,
  retry: PropTypes.func.isRequired,
  timedOut: PropTypes.bool.isRequired,
  pastDelay: PropTypes.bool.isRequired
}

export default Loading
