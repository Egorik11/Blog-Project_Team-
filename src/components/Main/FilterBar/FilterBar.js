import React from 'react'
import Search from './Search/Search'
import SortFilter from './SortFilter/SortFilter'
import LimitFilter from './LimitFilter/LimitFilter'
import ViewToggle from './ViewToggle/ViewToggle'

export default props => {
  return (
    <div className="uk-margin-medium-bottom uk-flex">
      <Search
        setState={props.setState}
        posts={props.posts}
        sortBy={props.sortBy}
        loading={props.loading}
        page={props.page}
        limit={props.limit}
      />
      <SortFilter setState={props.setState} />
      <LimitFilter setState={props.setState} />
      <ViewToggle />
    </div>
  )
}
