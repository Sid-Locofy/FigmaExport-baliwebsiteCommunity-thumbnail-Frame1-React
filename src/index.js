import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Frame1 from './views/frame1'
import Page from './views/page'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Frame1} path="/" />
        <Route exact component={Page} path="/page" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
