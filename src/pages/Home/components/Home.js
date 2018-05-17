import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import football from '../media/images/football-happy.jpg'
import uvu from '../media/images/uvu_emblem.png'
import family from '../media/images/family.jpg'
import code from '../media/images/code.jpg'

import Focus from './Focus'

function styles(theme) {
  return {
    root: {
      padding: 10
    },
    card: {
      maxWidth: 625,
      margin: '0 auto',
      marginBottom: 15
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

function Home({ classes }) {
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Focus />
      </Grid>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={family}
            title="family"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Family
            </Typography>
            <Typography className={classes.cardSubTitle} variant="caption">
              My family is the most important part of my life
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={code}
            title="software"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Software
            </Typography>
            <Typography className={classes.cardSubTitle} variant="caption">
              I fell in love with software early in college, and continue to hone my skills
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <CardMedia
            style={{ backgroundColor: '#EEEEEE' }}
            className={classes.media}
            image={uvu}
            title="school"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              School
            </Typography>
            <Typography className={classes.cardSubTitle} variant="caption">
              Education is very important to me. I currently attend Utah Valley University
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={football}
            title="football"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Sports
            </Typography>
            <Typography className={classes.cardSubTitle} variant="caption">
              Athletics has always been a big part of my life
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
