
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/css/bootstrap.min.css'

// import 'bootstrap-icons'
// import '@asseinfo/react-kanban'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: 0,
            maxWidth: '100vw',
            padding: 0,
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'
// import PropTypes from "prop-types"  
// import Header from './header'
// import './layout.css'
// // import Helmet from 'react-helmet'
// // import 'bootstrap/dist/css/bootstrap.min.css'

// const Layout = ({ children, data }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         {/* <Helmet
//           title={data.site.siteMetadata.title}
//           meta={[
//             { name: 'description', content: 'Kanban' },
//             { name: 'keywords', content: 'sample, something' },
//           ]}
//         >
//           <html lang="en" />
//         </Helmet> */}

//         <Header siteTitle={data.site.siteMetadata.title} />  
//         <div
//           style={{
//             margin: 0,
//             maxWidth: '100vw',
//             padding: 0,
//             paddingTop: 0,
//           }}
//         >
//           {children}
//         </div>
//       </>
//     )}
//   />
// )

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout
