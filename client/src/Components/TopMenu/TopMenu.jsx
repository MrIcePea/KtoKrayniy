// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import './TopMenu.css';

// function TopMenu() {
//   const { user } = useSelector((state) => state);
//   return (
//     <div className="exit-wrapper">
//       <div className="exit-item-wrapper">
//         {/* {user.name ? `Hi, ${user.name}` : 'Login please'} */}
//         <p>🏓 Привет, Илья!</p>
//       </div>
//       <div className="exit-item-wrapper">
//         <Link to="/signin">Войти</Link>
//       </div>
//       <div className="exit-item-wrapper">
//         <Link to="/signup">Регистрация</Link>
//       </div>
//     </div>
//   );
// }
// export default TopMenu;

import React from 'react';
import {
  Collapse, DropdownItem, DropdownMenu, DropdownToggle,
  Nav, Navbar, NavbarBrand, NavbarText,
  NavItem, NavLink, UncontrolledDropdown,
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink as DomLink } from 'react-router-dom';
import { userLogOut } from '../../Redux/Actions/signAction';

export default function TopMenu() {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const logOutHAndler = () => {
    dispatch(userLogOut());
  };
  return (
    <div>
      <Navbar
        color="dark"
        expand="md"
        dark
      >
        <NavbarBrand href="/">
          🏓
        </NavbarBrand>
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >

            {/* {!user.name
            && (
            <> */}
              <NavItem>
                <DomLink to="/signin">
                  Войти
                </DomLink>
              </NavItem>
              <NavItem>
                <DomLink to="/signup">
                  Зарегаться
                </DomLink>
              </NavItem>
            {/* </>
            )} */}
            <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* <NavbarText onClick={logOutHAndler}>
            {user.name ? `Hi, ${user.name}` : 'Login please'}
          </NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}
