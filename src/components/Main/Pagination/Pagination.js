import React from 'react'
import { NavLink } from 'react-router-dom'
import PaginationItem from './PaginationItem'

export default props => {
  return (
    <ul className="uk-pagination uk-flex-center uk-flex-middle" data-uk-margin>
      {/* <li>
        <NavLink to="/blog-app/posts">
          <span data-uk-pagination-previous />
        </NavLink>
      </li> */}
      {Array(props.totalPages)
        .fill(null)
        .map((elem, idx) => {
          return (
            <PaginationItem
              key={idx}
              pageNumber={idx + 1}
              current={idx + 1}
              setState={props.setState}
              limit={props.limit}
              page={props.page}
            />
          )
        })}
      {/* <li>
        <NavLink to="/blog-app/posts">
          <span data-uk-pagination-next />
        </NavLink>
      </li> */}
    </ul>
  )
}
