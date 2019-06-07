import React from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

class NavItem extends React.Component {
  render() {

    const {navItem} = this.props;
    return  <li>
              <Link to={navItem.link}>{navItem.name}</Link>
            </li>
  }
}

export default NavItem;
