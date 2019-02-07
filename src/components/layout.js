import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Menu from '../components/menu/menu'
import HomepageHero from '../components/homepage-hero/homepage-hero'
import HomepageContent from '../components/homepage-content/homepage-content'
import HomepageCards from '../components/homepage-cards/homepage-cards'
import Footer from './footer'
import './style.css'

const Layout = ({ children }) => (
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <Menu />
        <HomepageHero />
        <HomepageContent />
        <HomepageCards />
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
