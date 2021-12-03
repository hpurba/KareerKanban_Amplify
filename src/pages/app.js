import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Profile from "../components/Profile"
import Home from "../components/Home/Home"
import Login from "../components/Login"
import SignUp from "../components/SignUp"
import PrivateRoute from "../components/PrivateRoute"
import Kanban from "../components/Kanban/Kanban";


const App = () => (
  <Layout>
    <Router>
      <Home path="/app/home" />
      {/* <PrivateRoute path="/app/home" component={Home} /> */}
      {/* <PrivateRoute path="/app/home" component={Home} /> */}
      <PrivateRoute path="/app/profile" component={Profile} />
      <PrivateRoute path="/app/kanban" component={Kanban} />
      <Login path="/app/login" />
      <SignUp path="/app/signup" />
    </Router>
  </Layout>
)

export default App