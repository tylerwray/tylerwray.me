import React from 'react'
import { RouteComponentProps } from '@reach/router'

import Grid from '@material-ui/core/Grid'
import Focus from './Focus'
import Highlight from './Highlight'

import football from '../images/football-happy.jpg'
import uvu from '../images/uvu_emblem.png'
import family from '../images/family.jpg'
import code from '../images/code.jpg'

function HomePage(_: RouteComponentProps) {
  return (
    <Grid container style={{ padding: 16 }}>
      <Grid item sm={12} md={6} lg={4}>
        <Grid item xs={12}>
          <Focus />
        </Grid>
      </Grid>
      <Grid item style={{ paddingTop: 16 }} sm={12} md={6} lg={8}>
        <Grid container spacing={16}>
          <Grid item xs={12} lg={6}>
            <Highlight image={family} title="Family">
              My family is the most important part of my life. Being a father
              and husband has been extremely rewarding
            </Highlight>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Highlight image={code} title="Software">
              I fell in love with software early in college, and continue to
              hone my skills
            </Highlight>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Highlight image={uvu} title="School">
              Education is very important to me. I'm a student at Utah Valley
              University
            </Highlight>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Highlight image={football} title="Sports">
              Athletics has always been a big part of my life. The lessons I
              learned playing on teams help me throughout my life
            </Highlight>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomePage
