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

        <ul>

          <li className="first"><Link to="/"><h1>Tommaso Cassinis</h1></Link></li>



          {NavigationList.map((navItem, index) => {
            return <NavItem navItem={navItem} />
          })}

        </ul>

      </header>

  )
}
}

export default Header;
