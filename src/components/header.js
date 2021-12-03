import React from 'react'
// import { Link } from 'gatsby'

import { navigate } from '@reach/router'

import { logout, isLoggedIn } from "../utils/auth"
import { Auth } from 'aws-amplify'
import "./styles.css";
import { getCurrentUser } from '../utils/auth'

const user = getCurrentUser()

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem',
    }}
  >
    {/* Primary Navigation bar */}
    <nav class="navbar navbar-expand-lg navbar-light nav-padding">
      <a class="navbar-brand" href="/">{siteTitle}</a>
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="/">Home</a>
          <a class="nav-item nav-link active" href="/app/signup">SignUp</a>
          <a class="nav-item nav-link" href="/app/login">Login</a>
          <a class="nav-item nav-link" href="/app/profile">Profile {user.username}</a>
          <a class="nav-item nav-link" href="/app/kanban">Kanban</a>
          {/* <a class="nav-item nav-link" href="#">Pricing</a> */}

          {/* <a class="nav-item nav-link" href="#">{user.username}</a> */}
          <a class="nav-item nav-link disabled" href="#">Pricing</a>
          {
            isLoggedIn() && (

              <a class="nav-item nav-link" href="#">{user.username}</a>
            )
          }
          <a className="nav-item">
            {
              isLoggedIn() && (
                <a
                  onClick={
                    () => Auth.signOut().then(logout(() => navigate('/app/login'))).catch(err => console.log('eror:', err))
                  } 
                  class="nav-item nav-link" >Sign Out</a>
                // <a class="nav-item nav-link" href="/app/kanban">Kanban</a>

              )
            }
          </a>
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