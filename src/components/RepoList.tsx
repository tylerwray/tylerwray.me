import React from 'react'

import { withStyles, Theme } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

import Repo from './Repo'
import { GithubRepo } from '../types'

function styles(theme: Theme) {
  return {
    root: {
      marginTop: theme.spacing.unit * 2
    }
  }
}

interface Props {
  classes: {
    root: string
  }
  repos: GithubRepo[]
}

function Repos({ classes, repos }: Props) {
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

export default withStyles(styles)(Repos)
