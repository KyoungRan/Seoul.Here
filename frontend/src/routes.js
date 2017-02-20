import React, {Component} from 'react'
import {IndexRoute, Route} from 'react-router'

import App from 'components/App'
import Home from 'components/Home'

const routes = () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="app" component={Home} />
    </Route>
  )
}

export default routes 
