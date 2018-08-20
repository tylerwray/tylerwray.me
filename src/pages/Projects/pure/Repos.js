import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import Github from '../media/images/github.svg'

function styles(theme) {
  const card = {
    minWidth: 275,
    maxWidth: 275,
    margin: 10
  }

  return {
    root: {
      marginTop: theme.spacing.unit * 2
    },
    card,
    loaderCard: {
      ...card,
      height: 175
    },
    title: {
      marginBottom: 16
    },
    description: {
      height: 50
    },
    gitHubIcon: {
      fill: theme.palette.secondary.main,
      height: 20,
      marginRight: 10
    },
    gitHubText: {
      color: theme.palette.secondary.main
    }
  }
}
function Repos(props) {
  const { classes, repos } = props

  return (
    <Grid className={classes.root} container justify="space-around">
      {repos.map(repo => (
        <Grid item key={repo.url}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} variant="title">
                {repo.name}
              </Typography>
              <Typography className={classes.description} color="textSecondary">
                {repo.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href={repo.html_url} color="secondary" target="_blank">
                <Github className={classes.gitHubIcon} />
                <span className={classes.gitHubText}>View on Github</span>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

Repos.propTypes = {
  classes: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired
}

export default withStyles(styles)(Repos)
