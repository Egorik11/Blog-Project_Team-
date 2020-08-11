import React from 'react'
import { NavLink } from 'react-router-dom'

export default props => {
  return (
    <div>
      <div className="uk-card uk-card-default uk-margin-medium-bottom">
        <div style={{ height: 70 }} className="uk-card-header">
          <h2
            style={{ fontSize: '1.4em' }}
            className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between"
          >
            {`${props.title.slice(0, 40)}`}{' '}
            <NavLink to="/blog-app/posts" className="uk-icon-link" uk-icon="heart" />
          </h2>
        </div>
        <div style={{ height: '200px' }} className="uk-card-body">
          <p>{props.body}</p>
        </div>
        <div className="uk-card-footer">
          <NavLink to="/blog-app/post/1" className="uk-button uk-button-text">
            Read more
          </NavLink>
        </div>
      </div>
    </div>
  )
}
