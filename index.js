// @flow

import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import AppWithNavigation from './app/index'
import store from './app/config/store'

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <AppWithNavigation />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('gosnoose', () => App)
