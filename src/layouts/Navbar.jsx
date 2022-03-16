import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink, useNavigate } from 'react-router-dom'

import { useLogoutMutation, useGetMyProfileQuery } from '@/services/api/Auth'

function LayoutsNavbar() {
  const navigate = useNavigate()
  const [logout] = useLogoutMutation()
  const { data: { user: currentUser } = {} } = useGetMyProfileQuery()

  const customLogout = () => logout().then(() => {
    navigate('/auth/login')
  })

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/todos">Browse</Nav.Link>
            {
              currentUser ? (
                <>
                  <Nav.Link as={NavLink} to="/my/todos">My Todos</Nav.Link>
                  <Nav.Link as={NavLink} to="/my/todos/new">New Todo</Nav.Link>
                  <Nav.Link onClick={customLogout}>Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={NavLink} to="/auth/login">Login</Nav.Link>
                  <Nav.Link as={NavLink} to="/auth/signup">Signup</Nav.Link>
                </>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default LayoutsNavbar
