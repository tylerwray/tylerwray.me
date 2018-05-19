import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import Github from './media/images/github.svg'

import { selectRepos } from './selectors'
import { reposRequest } from './actions'

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

class Projects extends Component {
  componentDidMount() {
    const { repos, fetchRepos } = this.props

    if (repos.length === 0) {
      fetchRepos()
    }
  }

  render() {
    const { classes, repos } = this.props

    let renderRepos
    if (repos.length === 0) {
      renderRepos = [...Array(12)].map((_, i) => (
        <Grid item key={i}>
          <Card className={`${classes.loaderCard} animated-background`} />
        </Grid>
      ))
    } else {
      renderRepos = repos.map(repo => (
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
              <Button href={repo.url} color="secondary" target="_blank">
                <Github className={classes.gitHubIcon} />
                <span className={classes.gitHubText}>View on Github</span>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))
    }

    return (
      <Grid className={classes.root} container justify="space-around">
        {renderRepos}
      </Grid>
    )
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  fetchRepos: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    repos: selectRepos(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRepos() {
      dispatch(reposRequest())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Projects))
