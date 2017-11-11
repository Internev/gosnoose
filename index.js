// @flow

import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import appReducer from './app/reducers/index'
import AppWithNavigation from './app/index'

class App extends React.Component {
  store = createStore(appReducer,
    applyMiddleware(thunkMiddleware))

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigation />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('gosnoose', () => App)
