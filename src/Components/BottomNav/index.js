import RootNavbar from '../RootNavbar';

import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <RootNavbar position="fixed-bottom">
      <div className="wrapper">
        <div className="navbar-nav-item">
          <Icon icon="ion:home" fontSize={24} color={splitLocation[1] === 'home' ? '#222222' : '#B9B9B9'} />
          <NavLink exact to="/home" className={`navbar-link`} activeClassName="active">Home</NavLink>
        </div>
        <div className="navbar-nav-item">
          <Icon icon="wpf:clipboard" fontSize={24} color={splitLocation[1] === 'menu' ? '#222222' : '#B9B9B9'} />
          <NavLink to="/menu" className={`navbar-link`} activeClassName="active">Menu</NavLink>
        </div>
      </div>
    </RootNavbar>
  );
}

export default BottomNav;
