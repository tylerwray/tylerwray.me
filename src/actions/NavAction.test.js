import NavAction from './NavAction';
import { OPEN_SIDE_NAV, CLOSE_SIDE_NAV } from '../constants';

describe('Nav Action', () => {
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
      const navAction = new NavAction(dispatchSpy);
      expect(navAction.dispatcher).toEqual(dispatchSpy);
    });
  });

  describe('#openSideNav', () => {
    let navAction = null;

    beforeEach(() => {
      navAction = new NavAction(dispatchSpy);
    });

    it('should dispatch an action message telling the side nav to open', () => {
      navAction.openSideNav();

      expect(dispatchSpy.called).toEqual(true);
      expect(dispatchSpy.args).toEqual({
        type: OPEN_SIDE_NAV
      });
    });
  });

  describe('#closeSideNav', () => {
    let navAction = null;

    beforeEach(() => {
      navAction = new NavAction(dispatchSpy);
    });

    it('should dispatch an action message telling the side nav to open', () => {
      navAction.closeSideNav();

      expect(dispatchSpy.called).toEqual(true);
      expect(dispatchSpy.args).toEqual({
        type: CLOSE_SIDE_NAV
      });
    });
  });

});
