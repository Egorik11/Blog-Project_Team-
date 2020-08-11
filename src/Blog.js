import React from 'react'
import Home from './containers/Home/Home'
import Posts from './containers/Posts/Posts'
import Albums from './containers/Albums/Albums'
import PostContent from './containers/PostContent/PostContent'
import { Route, Switch } from 'react-router-dom'

function Blog() {
  return (
    <div className="App">
      <Switch>
        <Route path="/blog-app/albums" exact component={Albums} />
        <Route path="/blog-app/post/:id" exact component={PostContent} />
        <Route path="/blog-app/posts/:page" component={Posts} />
        <Route path="/blog-app" component={Home} />
      </Switch>
    </div>
  )
}

export default Blog
