import { combineReducers } from 'redux'

import projectsReducer from './pages/Projects/reducer'

export default combineReducers({
  projects: projectsReducer
})
