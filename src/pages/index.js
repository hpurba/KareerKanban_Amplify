import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
import Home from '../components/Home/Home'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

Amplify.configure(config)

const IndexPage = () => (
  <Layout>
    <Home />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site with multi-user authentication powered by <a href="https://amplify.aws">AWS Amplify</a></p>
    <p>Create a new account: <Link to="/app/signup">Sign Up</Link></p>
    <Link to="/app/login">Sign In</Link><br />
    <Link to="/app/home">Home</Link><br />
    <Link to="/app/profile">Your profile</Link> */}
  </Layout>
)

export default IndexPage
