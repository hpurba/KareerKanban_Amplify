import React from 'react'
// import { Link } from 'gatsby'

import { navigate } from '@reach/router'

import { logout, isLoggedIn } from "../utils/auth"
import { Auth } from 'aws-amplify'
import "./styles.css";
import { getCurrentUser } from '../utils/auth'
// import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'

const user = getCurrentUser()

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem',
    }}
  >
    {/* Primary Navigation bar */}
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">Features</a>
            <a class="nav-link" href="#">Pricing</a>
            <a class="nav-link disabled">Disabled</a>
          </div>
        </div>
      </div>
    </nav>





    <nav class="navbar navbar-expand-lg navbar-light nav-padding">
      <a class="navbar-brand" href="/">{siteTitle}</a>
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="/">Home</a>

          {/* Not Authenticated */}
          {
            !isLoggedIn() && (
              <>
                <a class="nav-item nav-link active" href="/app/signup">Sign Up</a>
                <a class="nav-item nav-link active" href="/app/login">Login</a>
                <a class="nav-item nav-link" href="/app/kanban">Kanban</a>
                <a class="nav-item nav-link disabled" href="#">Pricing</a>
              </>
            )
          }

          {/* Authenticated */}
          {
            isLoggedIn() && (
              <>
                <a class="nav-item nav-link active" href="/app/profile">{user.username}</a>
                <a class="nav-item nav-link" href="/app/kanban">Kanban</a>
                <a class="nav-item nav-link disabled" href="#">Pricing</a>
                <a
                  onClick={
                    () => Auth.signOut().then(logout(() => navigate('/app/home'))).catch(err => console.log('eror:', err))
                  }
                  class="nav-item nav-link" >Sign Out</a>
              </>
            )
          }
        </div>
      </div>
    </nav>
    <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
  </div>
)

const styles = {
  headerTitle: {
    color: 'white',
    textDecoration: 'none',
  },
  link: {
    cursor: 'pointer',
    color: 'white',
    textDecoration: 'underline'
  }
}

export default Header