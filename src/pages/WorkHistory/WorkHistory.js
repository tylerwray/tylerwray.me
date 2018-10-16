import React from 'react'

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

class WorkHistory extends React.Component {
  state = {
    keys: []
  }

  constructor(props) {
    super(props)

    this.handleKeyChange = this.handleKeyChange.bind(this)
  }

  handleKeyChange(event) {
    const { keys, unlocked } = this.state

    if (
      !unlocked &&
      !event.altKey &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.shiftKey
    ) {
      const newKeys = [...keys, event.key]

      if (newKeys.join('') === 'kapteyn') {
        this.setState({
          unlocked: true
        })
      } else {
        this.setState({
          keys: newKeys
        })
      }
    }
  }

  componentDidMount() {
    window.document.addEventListener('keydown', this.handleKeyChange)
  }

  componentWillUnmount() {
    window.document.removeEventListener('keydown', this.handleKeyChange)
  }

  render() {
    const { classes, size } = this.props

    const { unlocked } = this.state

    return (
      <div className={classes.root} onKeyPress={this.handleKeyChange}>
        <Grid container justify="center">
          <Grid item>
            <div className={classes.thinker}>{unlocked ? '😍' : '🤔'}</div>
            {unlocked && <Confetti {...size} />}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(
  sizeMe({
    monitorHeight: true,
    monitorWidth: true
  })(WorkHistory)
)
