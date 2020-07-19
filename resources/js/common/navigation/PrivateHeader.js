// import libs
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import components
import { Collapse, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import NavItem from './NavItem'

// initiate Component
export default function PrivateHeader({user, showNavigation, showDropdown, toggleDropdown, logout}) {
  return (
    <Collapse className="navbar-collapse" isOpen={ showNavigation }>
      <ul className="navbar-nav mr-auto">
        <NavItem path="/">Главная</NavItem>
        <NavItem path="/articles">Статьи</NavItem>
        <NavItem path="/cryptocurrencies">Справочник криптовалют</NavItem>
      </ul>

      <ul className="navbar-nav">
        <Dropdown isOpen={ showDropdown } toggle={ toggleDropdown }>
          <DropdownToggle nav caret>
            { user.name }
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-right">
            <Link className='dropdown-item' to={ `/users/${ user.id }/edit` }>
              <span className="fa fa-user-o" title="logout" aria-hidden="true"/> Профиль
            </Link>
            <DropdownItem divider/>
            <DropdownItem onClick={ e => logout(e) }>
              <span className="fa fa-sign-out" title="logout" aria-hidden="true"/> Выход
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </ul>
    </Collapse>
  );
}

// bind properties
PrivateHeader.displayName = 'PrivateHeader'
PrivateHeader.propTypes = {
  user: PropTypes.object.isRequired,
  showNavigation: PropTypes.bool.isRequired,
  showDropdown: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
}
