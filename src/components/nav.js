import React from 'react'
import Link from 'gatsby-link'

const Nav = ({ nav, locale}) => (
  <ul>
    {nav.map(function(li, index) {
      let locale_slug = locale
      if (locale === 'en') {
        locale_slug = ''
      }
      return (
        <li key={index}>
          <Link to={`${locale_slug}/${li.slug}`}>{li.name}</Link>
        </li>
      )
    })}
  </ul>
)

export default Nav
