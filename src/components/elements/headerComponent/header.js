import React from 'react';

import '../../../assets/styles/header.scss';
import NavigationList from '../../../data/navigation.json';

import NavItem from './navItem';

class Header extends React.Component {
  render() {
    return (

      <header>

        <ul key="ul">

          <li className="first"><h1>Tommaso Cassinis</h1></li>



          {NavigationList.map((navItem, index) => {
            return <NavItem key={navItem.name} navItem={navItem} />
          })}

        </ul>

      </header>

  )
}
}

export default Header;
