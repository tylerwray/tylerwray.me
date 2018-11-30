import React from 'react'

import { withStyles, Theme } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Github from '../../../images/Github'
import { IRepo } from '../types'

function styles(theme: Theme) {
  return {
    details: {
      paddingTop: 0,
      paddingBottom: 0
    },
    githubIcon: {
      fill: theme.palette.primary.main,
      height: 20,
      marginRight: 10
    },
    githubText: {
      color: theme.palette.primary.main
    }
  }
}

interface Props {
  classes: {
    details: string
    githubIcon: string
    githubText: string
  }
  repo: IRepo
}

function Repo({ classes, repo }: Props) {
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
          <Github className={classes.githubIcon} />
          <span className={classes.githubText}>View on Github</span>
        </Button>
      </ExpansionPanelActions>
    </ExpansionPanel>
  )
}

export default withStyles(styles)(Repo)
