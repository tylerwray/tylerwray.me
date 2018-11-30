import React from 'react'
import PropTypes from 'prop-types'

import { withStyles, Theme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

function styles(theme: Theme) {
  return {
    card: {
      maxWidth: 475,
      margin: '0 auto'
    },
    cardSubTitle: {
      fontSize: theme.typography.fontSize
    },
    media: {
      height: 0,
      paddingTop: '76.25%'
    }
  }
}

interface Props {
  classes: {
    card: string
    media: string
    cardSubTitle: string
  }
  image: string
  title: string
  description: string
}

function Highlight(props: Props) {
  const { classes, image, title, description } = props

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {title}
        </Typography>
        <Typography className={classes.cardSubTitle} variant="caption">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(Highlight)
