import React from 'react'
import Navigation from './Navigation/Navigation'
import Favorites from './Favorites/Favorites'

export default props => {
  return (
    <nav className="uk-navbar uk-navbar-container" data-uk-navbar>
      <Navigation />
      <Favorites />
    </nav>
  )
}
