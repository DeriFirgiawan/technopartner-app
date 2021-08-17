import RootNavbar from '../RootNavbar';

import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <RootNavbar position="fixed-bottom">
      <div className="wrapper">
        <div className="navbar-nav-item">
          <Icon icon="ion:home" fontSize={24} color="#B9B9B9" />
          <Link to="/home" className="navbar-link">Home</Link>
        </div>
        <div className="navbar-nav-item">
          <Icon icon="wpf:clipboard" fontSize={24} color="#B9B9B9" />
          <Link to="/menu" className="navbar-link">Menu</Link>
        </div>
      </div>
    </RootNavbar>
  );
}

export default BottomNav;
