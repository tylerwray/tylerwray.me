import { REPOS_REQUEST, REPOS_SUCCESS, REPOS_ERROR } from '../actionTypes'

export function reposRequest() {
  return {
    type: REPOS_REQUEST
  }
}

export function reposSuccess(repos) {
  return {
    type: REPOS_SUCCESS,
    payload: {
      repos
    }
  }
}

export function reposError(errorMessage) {
  return {
    type: REPOS_ERROR,
    payload: {
      errorMessage
    }
  }
}
