import React from 'react'
import ReactDOM from 'react-dom'
import Blog from './Blog'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router } from 'react-router-dom'

const app = (
  <React.StrictMode>
    <Router>
      <Blog />
    </Router>
  </React.StrictMode>
)

ReactDOM.render(app, document.getElementById('root'))

serviceWorker.unregister()
