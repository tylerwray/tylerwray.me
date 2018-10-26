import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

import Repo from './Repo'

function styles(theme) {
  return {
    root: {
      marginTop: theme.spacing.unit * 2
    }
  }
}

function Repos(props) {
  const { classes, repos } = props

  return (
    <Grid className={classes.root} container justify="space-around">
      <Grid item>
        {repos.map(repo => (
          <Repo key={repo.id} repo={repo} />
        ))}
      </Grid>
    </Grid>
  )
}

Repos.propTypes = {
  classes: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired
}

export default withStyles(styles)(Repos)
