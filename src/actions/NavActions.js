import dispatcher from '../dispatcher';

class NavActions {
  static openSideNav() {
    dispatcher.dispatch({
      type: 'OPEN_SIDE_NAV'
    });
  }

  static closeSideNav() {
    dispatcher.dispatch({
      type: 'CLOSE_SIDE_NAV'
    });
  }
}

export default NavActions;
