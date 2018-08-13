import { combineReducers } from 'redux'

import layoutReducer from './components/Layout/reducer'
import projectsReducer from './pages/Projects/reducer'

export default combineReducers({
  layout: layoutReducer,
  projects: projectsReducer
})
