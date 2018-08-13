import { TOGGLE_NAV_MENU } from './actionTypes'

const defaultState = {
  menuOpen: false,
  navItems: [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' }
  ]
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_NAV_MENU:
      return {
        ...state,
        menuOpen: !state.menuOpen
      }
    default:
      return state
  }
}
