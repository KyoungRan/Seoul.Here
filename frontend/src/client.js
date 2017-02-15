// Styles
import 'css/main.css'

import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import {AppContainer} from 'react-hot-loader'
// AppContainer is a necessary wrapper component for HMR

// import components
import App from './components/App'
import Home from './components/Home'
import routes from './routes'
//import Root from './Root'
// import react router deps
import {Route, IndexRoute, Router, browserHistory} from 'react-router'
//import {Provider} from 'react-redux'

class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        {this.props.routes()}
      </Router>
    )
  }
}

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
  module.hot.accept('./routes', () => {
    const newRoutes = require('./routes').default;
    render(newRoutes)
  })
}

