import React from 'react'

import football from '../../../images/football-happy.jpg'
import uvu from '../../../images/uvu_emblem.png'
import family from '../../../images/family.jpg'
import code from '../../../images/code.jpg'

import Grid from '@material-ui/core/Grid'
import Focus from './Focus'
import Highlight from './Highlight'

function Home() {
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
            <Highlight
              image={family}
              title="Family"
              description="My family is the most important part of my life. Being a father and husband has been extremely rewarding"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Highlight
              image={code}
              title="Software"
              description="I fell in love with software early in college, and continue to hone my skills"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Highlight
              image={uvu}
              title="School"
              description="Education is very important to me. I'm a student at Utah Valley University"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Highlight
              image={football}
              title="Sports"
              description="Athletics has always been a big part of my life. The lessons I learned playing on teams help me throughout my life"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home
