import React from 'react'

import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import profile from '../media/images/profile.png'

function styles(theme) {
  return {
    focusStyle: {
      marginBottom: theme.spacing.unit * 3
    },
    portraitWrapper: {
      textAlign: 'center'
    },
    portrait: {
      height: 250,
      width: 250,
      borderRadius: '50%',
      backgroundColor: 'rgb(89, 145, 191)',
      backgroundSize: '100%',
      margin: '25px auto',
      boxShadow: theme.shadows[5],
      backgroundImage: `url(${profile})`
    },
    missionStatementStyle: {
      padding: '0 25px',
      maxWidth: theme.breakpoints.values.sm,
      margin: '0 auto'
    },
    statementStyle: {
      fontWeight: theme.typography.fontWeightLight,
      fontSize: theme.typography.title.fontSize,
      padding: theme.spacing.unit
    },
    emphasisStyle: {
      fontWeight: theme.typography.fontWeightMedium
    }
  }
}

function Focus({ classes }) {
  return (
    <div className={classes.focusStyle}>
      <div className={classes.portrait}></div>
      <div>
        <div className={classes.missionStatementStyle}>
          <Typography color="textSecondary" className={classes.statementStyle}>I will work daily to <span className={classes.emphasisStyle}>improve lives</span> of others</Typography>
          <Typography color="textSecondary" className={classes.statementStyle}>Software I create will be of the <span className={classes.emphasisStyle}>highest quality</span>, and tested thorougly</Typography>
          <Typography color="textSecondary" className={classes.statementStyle}>People who work with me will recieve <span className={classes.emphasisStyle}>my best self</span> each day</Typography>
        </div>
      </div>
    </div>
  )
}

Focus.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Focus)
