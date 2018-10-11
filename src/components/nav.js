import React from 'react'
import Link from 'gatsby-link'

const Nav = ({ nav, locale}) => (
  <ul>
    {nav.map(function(li, index) {
      let localization
      if (locale === 'en') {
        localization = {
          text: '[Page in German]',
          slug: '/de',
          locale: ''
        }
      } else if (locale === 'de') {
        localization = {
          text: '[Page in English]',
          slug: '',
          locale: '/de'
        }
      }
      return (
        <li key={index}>
          <Link to={`${localization.locale}${li.slug}`}>{li.name}</Link>   <Link to={`${localization.slug}${li.slug}`}>{localization.text}</Link>
        </li>
      )
    })}
  </ul>
)

export default Nav
