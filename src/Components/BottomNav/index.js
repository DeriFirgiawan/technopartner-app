import RootNavbar from '../RootNavbar';

import { Icon } from '@iconify/react';

const BottomNav = () => {
  return (
    <RootNavbar position="fixed-bottom">
      <div className="wrapper">
        <div className="navbar-nav-item">
          <Icon icon="ion:home" fontSize={24} color="#B9B9B9" />
          <span className="navbar-link">Home</span>
        </div>
        <div className="navbar-nav-item">
          <Icon icon="wpf:clipboard" fontSize={24} color="#B9B9B9" />
          <span className="navbar-link">Menu</span>
        </div>
      </div>
    </RootNavbar>
  );
}

export default BottomNav;
