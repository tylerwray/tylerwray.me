import React from 'react';
import ReactDOM from 'react-dom';
import SideNav from './SideNav';

jest.mock('react-router-dom', () => ({
  Link: () => '<a></a>'
}));

const open = false;
const navItems = [
  {
    name: 'test',
    href: 'link'
  }
];
const closeSideNav = () => 'closed';

it('should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SideNav open={open} navItems={navItems} closeSideNav={closeSideNav} />, div);
  expect(div.childNodes[0].classList[0]).toBe('SideNav-container');
});
