import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Page from './views/page'
import HELLO from './views/h-e-l-l-o'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Page} path="/page" />
        <Route exact component={HELLO} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
