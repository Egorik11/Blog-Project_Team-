import React from 'react'
import FilterBar from './FilterBar/FilterBar'
import PostsList from './PostsList/PostsList'
import LoadMore from './LoadMore/LoadMore'
import Pagination from './Pagination/Pagination'

export default props => {
  return (
    <main className="uk-main uk-section uk-container">
      <FilterBar
        setState={props.setState}
        posts={props.posts}
        sortBy={props.sortBy}
        loading={props.loading}
        page={props.page}
        limit={props.limit}
      />
      <PostsList posts={props.posts} loading={props.loading} />
      {!props.loading && props.posts.length !== 0 ? (
        <>
          <LoadMore
            setState={props.setState}
            limit={props.limit}
            page={props.page}
            totalPages={props.totalPages}
            limitMore={props.limitMore}
            totalPosts={props.totalPosts}
          />
          <Pagination
            page={props.page}
            totalPages={props.totalPages}
            setState={props.setState}
            limit={props.limit}
          />
        </>
      ) : null}
      {props.posts.length === 0 && !props.loading ? (
        <h1 style={{ textAlign: 'center' }}>No posts found...</h1>
      ) : null}
    </main>
  )
}
