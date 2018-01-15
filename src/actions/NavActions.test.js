import NavActions from './NavActions';
import { OPEN_SIDE_NAV, CLOSE_SIDE_NAV } from '../constants';

describe('Nav Actions', () => {
  const dispatchSpy = {
    called: false,
    args: null,
    dispatch(args) {
      this.called = true;
      this.args = args;
    }
  };

  afterEach(() => {
    dispatchSpy.called = false;
    dispatchSpy.args = null;
  });

  describe('#constructor', () => {
    it('should set the class dispatcher to the injected dispatcher', () => {
      const navActions = new NavActions(dispatchSpy);
      expect(navActions.dispatcher).toEqual(dispatchSpy);
    });
  });

  describe('#openSideNav', () => {
    let navActions = null;

    beforeEach(() => {
      navActions = new NavActions(dispatchSpy);
    });

    it('should dispatch an action message telling the side nav to open', () => {
      navActions.openSideNav();

      expect(dispatchSpy.called).toEqual(true);
      expect(dispatchSpy.args).toEqual({
        type: OPEN_SIDE_NAV
      });
    });
  });

  describe('#closeSideNav', () => {
    let navActions = null;

    beforeEach(() => {
      navActions = new NavActions(dispatchSpy);
    });

    it('should dispatch an action message telling the side nav to open', () => {
      navActions.closeSideNav();

      expect(dispatchSpy.called).toEqual(true);
      expect(dispatchSpy.args).toEqual({
        type: CLOSE_SIDE_NAV
      });
    });
  });

});
