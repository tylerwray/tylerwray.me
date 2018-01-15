import NavStore from './NavStore';

jest.mock('events', () => ({
  EventEmitter: class mockEventEmitter {
    constructor() {
      this.constuctorCalled = true;
    }

    emit(event) {
      this.emit.called = true;
      this.emit.event = event;
    }
  }
}));

describe('Nav Store', () => {
  afterEach(() => {
    NavStore.emit.called = false;
    NavStore.emit.event = null;
  });

  describe('#constructor', () => {
    it('should call it\'s base class', () => {
      expect(NavStore.constuctorCalled).toEqual(true);
    });

    it('should set the isSideNavOpen property', () => {
      expect(NavStore.isSideNavOpen).toEqual(false);
    });

    it('should set the navItems property', () => {
      expect(NavStore.navItems).toEqual([
        {
          name: 'Profile',
          href: '/profile'
        },
        {
          name: 'Blog',
          href: '/blog'
        },
        {
          name: 'Projects',
          href: '/projects'
        }
      ]);
    });
  });

  describe('#handleActions', () => {
    beforeEach(() => {
      jest.spyOn(NavStore, 'openSideNav');
      jest.spyOn(NavStore, 'closeSideNav');
    });

    afterEach(() => {
      NavStore.openSideNav.mockRestore();
      NavStore.closeSideNav.mockRestore();
    });

    it('should fall through if type is not recognized', () => {
      NavStore.handleActions({ type: 'fall through' });

      // STUPID JEST: This is how to test if a spy was NOT called
      expect(NavStore.openSideNav.mock.calls).toEqual([]);
    });

    it('should call openSideNav if OPEN_SIDE_NAV is the type of action', () => {
      NavStore.openSideNav.mockImplementation(() => null);
      NavStore.handleActions({ type: 'OPEN_SIDE_NAV' });

      expect(NavStore.openSideNav).toHaveBeenCalled();
    });

    it('should call closeSideNav if CLOSE_SIDE_NAV is the type of action', () => {
      NavStore.closeSideNav.mockImplementation(() => null);
      NavStore.handleActions({ type: 'CLOSE_SIDE_NAV' });

      expect(NavStore.closeSideNav).toHaveBeenCalled();
    });
  });

  describe('#openSideNav', () => {
    it('should set the side nav to open', () => {
      NavStore.openSideNav();

      expect(NavStore.isSideNavOpen).toEqual(true);
    });

    it('should call emit with a change event', () => {
      NavStore.openSideNav();

      expect(NavStore.emit.called).toEqual(true);
      expect(NavStore.emit.event).toEqual('change');
    });
  });

  describe('#closeSideNav', () => {
    it('should set the side nav to closed', () => {
      NavStore.closeSideNav();

      expect(NavStore.isSideNavOpen).toEqual(false);
    });

    it('should call emit with a change event', () => {
      NavStore.closeSideNav();

      expect(NavStore.emit.called).toEqual(true);
      expect(NavStore.emit.event).toEqual('change');
    });
  });
});
