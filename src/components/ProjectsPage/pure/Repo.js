import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import Github from '../../../images/github.svg'

function styles(theme) {
  const card = {
    minWidth: 275,
    maxWidth: 275,
    margin: 10
  }

  return {
    card,
    title: {
      marginBottom: 16
    },
    description: {
      height: 50
    },
    gitHubIcon: {
      fill: theme.palette.primary.main,
      height: 20,
      marginRight: 10
    },
    gitHubText: {
      color: theme.palette.primary.main
    }
  }
}

function Repo(props) {
  const { classes, repo } = props

  return (
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
          <Button href={repo.html_url} color="primary" target="_blank">
            <Github className={classes.gitHubIcon} />
            <span className={classes.gitHubText}>View on Github</span>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

Repo.propTypes = {
  classes: PropTypes.object.isRequired,
  repo: PropTypes.object.isRequired
}

export default withStyles(styles)(Repo)
