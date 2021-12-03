/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import Auth from '@aws-amplify/auth'
import { setUser } from './src/utils/auth'
import 'bootstrap/dist/css/bootstrap.min.css'

// https://www.gatsbyjs.com/plugins/gatsby-plugin-sass/
// import "./src/index.scss"


export const onRouteUpdate = (state, page, pages) => {
  Auth.currentAuthenticatedUser()
    .then(user => {
      const userInfo = {
        ...user.attributes,
        username: user.username
      }
      setUser(userInfo)
    })
    .catch(err => {
      window.localStorage.setItem('gatsbyUser', null)
    })
}
