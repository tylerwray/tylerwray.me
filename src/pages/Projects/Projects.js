import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Github from './media/images/github.svg'

import { selectRepos } from './selectors'
import { reposRequest } from './actions'

function styles(theme) {
  const card = {
    minWidth: 275,
    maxWidth: 325,
    minHeight: 125,
    maxHeight: 225,
    margin: 10
  }

  return {
    card,
    loaderCard: {
      ...card,
      height: 100
    },
    title: {
      marginBottom: 16
    },
    gitHubIcon: {
      fill: theme.palette.secondary.light,
      height: 20,
      marginRight: 10
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

    if (repos.length === 0) {
      return [...Array(12)].map((_, i) => <Card className={`${classes.loaderCard} animated-background`} key={i} />)
    }

    return repos.map((repo, key) => (
      <Card className={classes.card} key={key}>
        <CardContent>
          <Typography className={classes.title} variant="title">
            {repo.name}
          </Typography>
          <Typography color="textSecondary">
            {repo.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="secondary" href={repo.url} target="_blank">
            <Github className={classes.gitHubIcon} />
            View on Github
          </Button>
        </CardActions>
      </Card>
    ))
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
