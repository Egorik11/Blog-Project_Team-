import React from 'react'
import { NavLink } from 'react-router-dom'
import Navigation from '../../components/Header/Navigation/Navigation'
import Favorites from '../../components/Header/Favorites/Favorites'
import LoadMore from '../../components/Main/LoadMore/LoadMore'
import Pagination from '../../components/Main/Pagination/Pagination'

export default () => {
  return (
    <>
      <nav className="uk-navbar uk-navbar-container" data-uk-navbar>
        <Navigation />
        <Favorites />
      </nav>
      <main className="uk-main">
        <div className="uk-section">
          <div className="uk-container">
            <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
              <div>
                <div className="uk-card uk-card-default uk-margin-medium-bottom uk-light">
                  <img alt="img" src="https://picsum.photos/600/400" data-uk-cover />
                  <canvas width={600} height={400} />
                  <div className="uk-overlay-primary uk-position-cover" />
                  <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                    <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div className="uk-position-top-right uk-overlay">
                    <NavLink to="/blog-app/albums" uk-icon="icon: heart; ratio: 2" />
                  </div>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-default uk-margin-medium-bottom uk-light">
                  <img alt="img" src="https://picsum.photos/600/400" data-uk-cover />
                  <canvas width={600} height={400} />
                  <div className="uk-overlay-primary uk-position-cover" />
                  <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                    <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div className="uk-position-top-right uk-overlay">
                    <NavLink to="/blog-app/albums" uk-icon="icon: heart; ratio: 2" />
                  </div>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-default uk-margin-medium-bottom uk-light">
                  <img alt="img" src="https://picsum.photos/600/400" data-uk-cover />
                  <canvas width={600} height={400} />
                  <div className="uk-overlay-primary uk-position-cover" />
                  <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                    <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div className="uk-position-top-right uk-overlay">
                    <NavLink to="/blog-app/albums" uk-icon="icon: heart; ratio: 2" />
                  </div>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-default uk-margin-medium-bottom uk-light">
                  <img alt="img" src="https://picsum.photos/600/400" data-uk-cover />
                  <canvas width={600} height={400} />
                  <div className="uk-overlay-primary uk-position-cover" />
                  <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                    <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div className="uk-position-top-right uk-overlay">
                    <NavLink to="/blog-app/albums" uk-icon="icon: heart; ratio: 2" />
                  </div>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-default uk-margin-medium-bottom uk-light">
                  <img alt="img" src="https://picsum.photos/600/400" data-uk-cover />
                  <canvas width={600} height={400} />
                  <div className="uk-overlay-primary uk-position-cover" />
                  <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                    <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div className="uk-position-top-right uk-overlay">
                    <NavLink to="/blog-app/albums" uk-icon="icon: heart; ratio: 2" />
                  </div>
                </div>
              </div>
              <div>
                <div className="uk-card uk-card-default uk-margin-medium-bottom uk-light">
                  <img alt="img" src="https://picsum.photos/600/400" data-uk-cover />
                  <canvas width={600} height={400} />
                  <div className="uk-overlay-primary uk-position-cover" />
                  <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                    <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div className="uk-position-top-right uk-overlay">
                    <NavLink to="/blog-app/albums" uk-icon="icon: heart; ratio: 2" />
                  </div>
                </div>
              </div>
            </div>
            <LoadMore />
            <Pagination />
          </div>
        </div>
      </main>
    </>
  )
}
