import React from 'react'
import './Navigation.css'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/blog-app/posts/1', text: 'Posts', exact: false },
  { to: '/blog-app/albums', text: 'Albums', exact: false },
]

function renderLinks() {
  return links.map((link, index) => {
    return (
      <li key={index}>
        <NavLink to={link.to} exact={link.exact} activeClassName="activeLink">
          {link.text}
        </NavLink>
      </li>
    )
  })
}

export default function Navigation() {
  return (
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">{renderLinks()}</ul>
    </div>
  )
}
