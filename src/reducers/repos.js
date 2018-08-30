import { REPOS_REQUEST, REPOS_SUCCESS, REPOS_ERROR } from '../actionTypes'

const defaultState = {
  repos: [],
  loading: false,
  errorMessage: null
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case REPOS_REQUEST:
      return {
        ...defaultState,
        loading: true
      }
    case REPOS_SUCCESS:
      return {
        repos: action.payload.repos,
        loading: false,
        errorMessage: null
      }
    case REPOS_ERROR:
      return {
        ...defaultState,
        errorMessage: action.payload.errorMessage
      }
    default:
      return state
  }
}
