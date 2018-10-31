import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Nav from './nav'
import Footer from './footer'
import Link from 'gatsby-link'
import './index.css'

export default ({ children, locale }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            nav {
              slug
              name
            }
            languages {
              slug
              localized_name {
                en
                de
              }
            }
          }
        }
      }
    `}
    render={data => {
      const siteTitle = data.site.siteMetadata.title
      const siteNav = data.site.siteMetadata.nav
      return (
        <div>
          <Helmet
            title={siteTitle}
            meta={[
              { name: 'description', content: 'Cosmic JS Node.js Starter' },
            ]}
          />
          <Header siteTitle={siteTitle} />
          <div className="main">
            {children}
            <Nav nav={siteNav} locale={locale} />
            {
              data.site.siteMetadata.languages.map(lang => {
                return (
                  <span key={lang.slug}><Link to={`/${lang.slug}`}>{lang.localized_name[locale]}</Link> | </span>
                )
              })
            }
          </div>
          <Footer />
        </div>
      )
    }}
  />
)
