import { REPOS_REQUEST, REPOS_REQUEST_SUCCESS } from './actionTypes'

const defaultState = {
  repos: [],
  loading: false
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case REPOS_REQUEST:
      return {
        repos: [],
        loading: true
      }
    case REPOS_REQUEST_SUCCESS:
      return {
        repos: action.repos,
        loading: false
      }
    default:
      return state
  }
}
