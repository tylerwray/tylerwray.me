import { REPOS_REQUEST, REPOS_REQUEST_SUCCESS } from './actionTypes'

export function reposRequest() {
  return {
    type: REPOS_REQUEST
  }
}

export function reposRequestSuccess(repos) {
  return {
    type: REPOS_REQUEST_SUCCESS,
    repos
  }
}
