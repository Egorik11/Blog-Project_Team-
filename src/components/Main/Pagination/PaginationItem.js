import React from 'react'
import { NavLink } from 'react-router-dom'

export default props => {
  const onClickHandler = () => {
    props.setState({
      currentPage: props.pageNumber,
      startFrom: props.pageNumber * props.limit - props.limit,
      loading: props.pageNumber !== props.page,
      limitMore: props.limit,
    })
  }

  return (
    <li>
      <NavLink onClick={onClickHandler} to={`/blog-app/posts/${props.current}`}>
        {props.pageNumber}
      </NavLink>
    </li>
  )
}
