import React from 'react'

import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import profile from '../../../images/profile.jpg'

function styles(theme) {
  return {
    focus: {
      textAlign: 'center'
    },
    portrait: {
      width: 250,
      height: 250,
      borderRadius: '50%',
      backgroundImage: `url(${profile})`,
      backgroundSize: '100%',
      boxShadow: theme.shadows[10],
      margin: '25px auto',
      [theme.breakpoints.up('sm')]: {
        width: 350,
        height: 350
      }
    },
    missionStatement: {
      padding: '0 25px',
      maxWidth: theme.breakpoints.values.sm,
      margin: '0 auto',
      [theme.breakpoints.up('sm')]: {
        fontSize: theme.typography.headline.fontSize
      }
    },
    statement: {
      fontWeight: theme.typography.fontWeightLight,
      fontSize: theme.typography.title.fontSize,
      padding: theme.spacing.unit,
      textAlign: 'left',
      [theme.breakpoints.up('sm')]: {
        fontSize: theme.typography.headline.fontSize
      }
    },
    emphasis: { fontWeight: theme.typography.fontWeightMedium }
  }
}

function Focus({ classes }) {
  return (
    <div className={classes.focus}>
      <div alt="Tyler Wray" className={classes.portrait} />
      <div>
        <div className={classes.missionStatement}>
          <Typography color="textSecondary" className={classes.statement}>
            I will work daily to{' '}
            <span className={classes.emphasis}>improve lives</span> of others
          </Typography>
          <Typography color="textSecondary" className={classes.statement}>
            Software I create will be of the{' '}
            <span className={classes.emphasis}>highest quality</span>, and
            tested thorougly
          </Typography>
          <Typography color="textSecondary" className={classes.statement}>
            People who work with me will recieve{' '}
            <span className={classes.emphasis}>my best self</span> each day
          </Typography>
        </div>
      </div>
    </div>
  )
}

Focus.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Focus)
