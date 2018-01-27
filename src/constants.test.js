import * as constants from './constants';

describe('Constants', () => {
  it('should export OPEN_SIDE_NAV', () => {
    expect(constants.OPEN_SIDE_NAV).toEqual('OPEN_SIDE_NAV');
  });

  it('should export CLOSE_SIDE_NAV', () => {
    expect(constants.CLOSE_SIDE_NAV).toEqual('CLOSE_SIDE_NAV');
  });

  it('should export GET_REPOS', () => {
    expect(constants.GET_REPOS).toEqual('GET_REPOS');
  });
});
