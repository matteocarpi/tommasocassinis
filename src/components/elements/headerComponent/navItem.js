import React from 'react';

import {
  Link
} from 'react-router-dom';

class NavItem extends React.Component {
  render() {

    const {navItem} = this.props;
    return  <li>
              <Link to={navItem.link} key={navItem.link}>{navItem.name}</Link>
            </li>
  }
}

export default NavItem;
