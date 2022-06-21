import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogOut } from '../../Redux/Actions/signAction';
import './TopMenu.css';

export default function TopMenu() {
  const { user } = useSelector((state) => state);

  const dispatch = useDispatch();
  const logOutHAndler = () => {
    dispatch(userLogOut());
  };
  return (
    <div className="header">
      <div className="logo-wrapper">
        <Link to="/queue"><img src="/images/logo.svg" alt="" width="70px" /></Link>
      </div>
      <div className="menu-item-wrapper">
        {!user.name
          && (
            <ul>
              <div className="auth-menu-wrapper">
                <div className="auth-menu-item-wrapper">
                  <li>
                    <Link to="/signin"><button type="submit" className="logout-btn">Войти</button></Link>
                  </li>
                </div>
                <div className="auth-menu-item-wrapper">
                  <li>
                    <Link to="/signup"><button type="submit" className="logout-btn">Регистрация</button></Link>
                  </li>
                </div>
              </div>
            </ul>
          )}
        {user.name
          ? (
            <div className="topmenu-wrapper">
              <div className="topmenu-wrapper-text">
                <p>
                  Привет,
                  {user.name}
                </p>
              </div>
              <div className="topmenu-wrapper-btn">
                <button type="submit" className="logout-btn" onClick={logOutHAndler}>Выйти</button>
              </div>
            </div>
          )

          : ''}
      </div>

      {/* <Navbar
        color="light"
        expand="md"
        // dark
      >
        <NavbarBrand href="/queue">
          <img src="/images/logo.jpeg" alt="" width="70px" />
        </NavbarBrand>
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            {!user.name
            && (
            <>
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
            </>
            )}
            {/* <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                Options
              </DropdownToggle>
              <DropdownMenu end>
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
            </UncontrolledDropdown> */}

    </div>
  );
}
