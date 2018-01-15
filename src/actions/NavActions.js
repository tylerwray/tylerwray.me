import { OPEN_SIDE_NAV, CLOSE_SIDE_NAV } from '../constants';

class NavActions {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  openSideNav() {
    this.dispatcher.dispatch({
      type: OPEN_SIDE_NAV
    });
  }

  closeSideNav() {
    this.dispatcher.dispatch({
      type: CLOSE_SIDE_NAV
    });
  }
}

export default NavActions;
