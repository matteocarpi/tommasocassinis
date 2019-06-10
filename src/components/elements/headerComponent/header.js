import React from 'react';

import '../../../assets/styles/header.scss';
import NavigationList from '../../../data/navigation.json';

import NavItem from './navItem';

import {
  Link,
} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (

      <header>

        <ul key="ul">

          <li className="first"><Link to="/" key="homePage"><h1>Tommaso Cassinis</h1></Link></li>



          {NavigationList.map((navItem, index) => {
            return <NavItem key={navItem} navItem={navItem} />
          })}

        </ul>

      </header>

  )
}
}

export default Header;
