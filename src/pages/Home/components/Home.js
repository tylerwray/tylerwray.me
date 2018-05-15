import React from 'react'

import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader'

import football from '../media/images/football-happy.jpg'
import uvu from '../media/images/uvu_emblem.png'
import family from '../media/images/family.jpg'
import code from '../media/images/code.jpg'

import Focus from './Focus'

const Home = () => (
  <div style={{ position: 'relative' }}>
    <Focus />
    <Card zDepth={4}>
      <CardMedia>
        <img src={family} alt="family" />
      </CardMedia>
      <CardHeader title="Family" subtitle="My family is the most important part of my life" />
    </Card>
    <Card zDepth={4}>
      <CardMedia>
        <img src={code} alt="software" />
      </CardMedia>
      <CardHeader title="Software" subtitle="I fell in love with software early in college, and continue to hone my skills" />
    </Card>
    <Card zDepth={4}>
      <CardMedia>
        <img style={{ padding: '10px', backgroundColor: '#EEEEEE' }} src={uvu} alt="school" />
      </CardMedia>
      <CardHeader title="School" subtitle="Education is very important to me. I currently attend Utah Valley University" />
    </Card>
    <Card zDepth={4}>
      <CardMedia>
        <img src={football} alt="football" />
      </CardMedia>
      <CardHeader title="Sports" subtitle="Athletics has always been a big part of my life" />
    </Card>
  </div>
)

export default Home
