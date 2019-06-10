import React from 'react';

import {
  NavLink
} from 'react-router-dom';

class NavItem extends React.Component {
  render() {
    const {navItem} = this.props;
    return  <li className="">
              <NavLink activeClassName="active" exact={true} className="nav-item" to={navItem.link} key={navItem.link}>{navItem.name}</NavLink>
            </li>
  }
}

export default NavItem;
