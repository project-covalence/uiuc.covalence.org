// @flow
import React from 'react'
import { Navbar as BootstrapNavbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import covalenceLogo from '../media/covalence_logo.png'

export default function Navbar() {
  return (
    <BootstrapNavbar fixedTop>
      <BootstrapNavbar.Brand>
        <img src={covalenceLogo} width="60" height="60" />
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle />
      <BootstrapNavbar.Collapse>
        <Nav className="float-right">
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/">About</Link>
          </NavItem>
          <NavItem>
            <Link to="/">Projects</Link>
          </NavItem>
          <NavItem>
            <Link to="/">Join</Link>
          </NavItem>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  )
}
