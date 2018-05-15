import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button'

import Github from '../media/images/github.svg'

const projectsStyle = {
  position: 'relative',
  marginTop: '50px'
}

class Projects extends Component {
  constructor(props) {
    super(props)

    this.state = {
      repos: []
    }
  }

  render() {
    if (this.state.repos.length === 0) {
      return (
        <div style={projectsStyle}>
          {[...Array(12)].map((_, i) => <Card key={i} style={{ backgroundColor: '#E0E0E0', height: '150px' }} />)}
        </div>
      )
    }

    return (
      <div style={projectsStyle}>
        {this.state.repos.map((repo, key) => (
          <Card key={key}>
            <CardHeader>
              <h4>{repo.name}</h4>
              <div style={{ color: 'var(--secondary-text-color)' }}>{repo.description}</div>
            </CardHeader>
            <CardActions>
              <Button
                href={repo.url}
                target="_blank"
                label="View on Github"
                primary={true}
                icon={<Github style={{ fill: '#000000', height: '20px' }} />}
              />
            </CardActions>
          </Card>
        ))}
      </div>
    )
  }
}

export default Projects
