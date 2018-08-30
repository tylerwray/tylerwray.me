import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Repos from '../pure/Repos'

import {
  selectRepos,
  selectLoading,
  selectErrorMessage
} from '../../../selectors/repos'
import { reposRequest } from '../../../actions/repos'

class Projects extends Component {
  static propTypes = {
    repos: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    requestRepos: PropTypes.func.isRequired
  }

  async componentDidMount() {
    const { repos, requestRepos } = this.props
    if (repos.length === 0) {
      requestRepos()
    }
  }

  render() {
    const { repos } = this.props

    return <Repos repos={repos} />
  }
}

function mapStateToProps(state) {
  return {
    repos: selectRepos(state),
    loading: selectLoading(state),
    errorMessage: selectErrorMessage(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    requestRepos: () => {
      dispatch(reposRequest())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects)
