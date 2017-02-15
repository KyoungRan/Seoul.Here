// Styles
import 'styles/main.css'

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
//import react router deps
import {Router, browserHistory} from 'react-router'
// AppContainer is a necessary wrapper component for HMR
import {AppContainer} from 'react-hot-loader'
// import components
import routes from 'routes'
import Root from 'Root'

const render = appRoutes => {
  ReactDOM.render(
    <AppContainer>
      <Root routes={appRoutes} />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(routes)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('routes', () => {
    const newRoutes = require('routes').default;
    render(newRoutes)
  })
}

