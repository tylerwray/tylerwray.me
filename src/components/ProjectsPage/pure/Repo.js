import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Github from '../../../images/github.svg'

function styles(theme) {
  return {
    details: {
      paddingTop: 0,
      paddingBottom: 0
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
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="subtitle1">{repo.name}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails classes={{ root: classes.details }}>
        <Typography>{repo.description}</Typography>
      </ExpansionPanelDetails>
      <ExpansionPanelActions>
        <Button
          size="small"
          href={repo.html_url}
          color="primary"
          target="_blank"
        >
          <Github className={classes.gitHubIcon} />
          <span className={classes.gitHubText}>View on Github</span>
        </Button>
      </ExpansionPanelActions>
    </ExpansionPanel>
  )
}

Repo.propTypes = {
  classes: PropTypes.object.isRequired,
  repo: PropTypes.object.isRequired
}

export default withStyles(styles)(Repo)
