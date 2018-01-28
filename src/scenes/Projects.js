import React, { Component } from 'react';
import { Card, CardTitle, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import RepoAction from '../actions/RepoAction';
import RepoStore from '../stores/RepoStore';
import dispatcher from '../dispatcher';

import Github from '../images/github.svg';
import '../styles/Projects.css';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.repoAction = new RepoAction(dispatcher);

    this.state = {
      repos: []
    };
  }

  componentWillMount() {
    RepoStore.on('change', () => {
      this.setState({ repos: RepoStore.repos });
    });
    this.repoAction.getRepositories();
  }

  render() {
    if (this.state.repos.length === 0) {
      return (
        <div className="Projects">
          <Grid>
            <Row>
              {[1, 2, 3, 4, 5, 5, 6, 6, 5, 4].map((__, key) => (
                <Col className="Repo" key={key} xs={12} sm={6} md={4}>
                  <Card style={{ backgroundColor: '#E0E0E0', height: '150px' }}>
                  </Card>
                </Col>
              ))}
            </Row>
          </Grid>
        </div>
      );
    }

    return (
      <div className="Projects">
        <Grid>
          <Row>
            {this.state.repos.map((repo, key) => (
              <Col className="Repo" key={key} xs={12} sm={6} md={4}>
                <Card>
                  <CardTitle>
                    <h4>{repo.name}</h4>
                    <div style={{ color: 'var(--secondary-text-color)' }}>{repo.description}</div>
                  </CardTitle>
                  <CardActions>
                    <FlatButton
                      href={repo.url}
                      target="_blank"
                      label="View on Github"
                      primary={true}
                      icon={<Github style={{ fill: '#000000', height: '20px' }} />}
                    />
                  </CardActions>
                </Card>
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Projects;
