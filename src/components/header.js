import React from 'react'
// import { Link } from 'gatsby'

import { navigate } from '@reach/router'

import { logout, isLoggedIn } from "../utils/auth"
import { Auth } from 'aws-amplify'
import "./styles.css";
import { getCurrentUser } from '../utils/auth'
import { Container, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'

const user = getCurrentUser()

const Header = ({ siteTitle }) => (
  <header>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="/">Home</Nav.Link>

            {/* Not Authenticated */}
            {
              !isLoggedIn() && (
                <>
                  <Nav.Link href="/app/signup">Sign Up</Nav.Link>
                  <Nav.Link href="/app/login">Login</Nav.Link>
                  <Nav.Link href="/app/kanban">Kanban</Nav.Link>
                  <Nav.Link href="/app/pricing" disabled>Pricing</Nav.Link>
                </>
              )
            }

            {/* Authenticated */}
            {
              isLoggedIn() && (
                <>
                  <Nav.Link href="/app/profile">{user.username}</Nav.Link>
                  <Nav.Link href="/app/kanban">Kanban</Nav.Link>
                  <Nav.Link href="/app/pricing" disabled>Pricing</Nav.Link>
                  <Nav.Link
                    onClick={
                      () => Auth.signOut().then(logout(() => navigate('/app/home'))).catch(err => console.log('eror:', err))
                    }
                  >Sign Out</Nav.Link>
                </>
              )
            }
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
)

export default Header


  // <div
  //   style={{
  //     background: 'white',
  //     marginBottom: '1.45rem',
  //   }}
  // >
  //   {/* Primary Navigation bar */}
  //   <nav class="navbar navbar-expand-lg navbar-light nav-padding">
  //     <a class="navbar-brand" href="/">{siteTitle}</a>
  //     <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  //       <span class="navbar-toggler-icon"></span>
  //     </button>
  //     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
  //       <div class="navbar-nav">
  //         <a class="nav-item nav-link active" href="/">Home</a>

  //         {/* Not Authenticated */}
  //         {
  //           !isLoggedIn() && (
  //             <>
  //               <a class="nav-item nav-link active" href="/app/signup">Sign Up</a>
  //               <a class="nav-item nav-link active" href="/app/login">Login</a>
  //               <a class="nav-item nav-link" href="/app/kanban">Kanban</a>
  //               <a class="nav-item nav-link disabled" href="#">Pricing</a>
  //             </>
  //           )
  //         }

  //         {/* Authenticated */}
  //         {
  //           isLoggedIn() && (
  //             <>
  //               <a class="nav-item nav-link active" href="/app/profile">{user.username}</a>
  //               <a class="nav-item nav-link" href="/app/kanban">Kanban</a>
  //               <a class="nav-item nav-link disabled" href="#">Pricing</a>
  //               <a
  //                 onClick={
  //                   () => Auth.signOut().then(logout(() => navigate('/app/home'))).catch(err => console.log('eror:', err))
  //                 }
  //                 class="nav-item nav-link" >Sign Out</a>
  //             </>
  //           )
  //         }
  //       </div>
  //     </div>
  //   </nav>
  //   <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
  //   <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
  // </div>


// const styles = {
//   headerTitle: {
//     color: 'white',
//     textDecoration: 'none',
//   },
//   link: {
//     cursor: 'pointer',
//     color: 'white',
//     textDecoration: 'underline'
//   }
// }
