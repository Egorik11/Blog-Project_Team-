import React from 'react'
import PostItemGrid from './PostItemGrid/PostItemGrid'
import Loader from '../../UI/Loader/Loader'

export default props => {
  const posts = props.posts.map((post, index) => {
    return <PostItemGrid key={post.id} title={post.title} body={post.body} />
  })

  return <div className="uk-grid uk-child-width-1-3@m">{props.loading ? <Loader /> : posts}</div>
}
