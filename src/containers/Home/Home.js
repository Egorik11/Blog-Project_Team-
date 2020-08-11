import React from 'react'
import Navigation from '../../components/Header/Navigation/Navigation'
import Favorites from '../../components/Header/Favorites/Favorites'

export default () => {
  return (
    <>
      <nav className="uk-navbar uk-navbar-container" data-uk-navbar>
        <Navigation />
        <Favorites />
      </nav>
      <main className="uk-main uk-section uk-container">
        <h2 style={{ textAlign: 'center' }}>
          We're glad to see you on our website! Welcome, friend!
        </h2>
      </main>
    </>
  )
}
