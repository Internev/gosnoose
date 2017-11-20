// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  StackNavigator,
  addNavigationHelpers
} from 'react-navigation'

import Main from './screens/Main'
import Second from './screens/Second'
import Login from './screens/Login'

export const AppNavigator = StackNavigator({
  Home: { screen: Main },
  Second: { screen: Second },
  Login: { screen: Login }
})

const AppWithNavigation = ({ dispatch, navigation }) => (
  <AppNavigator
    navigation={addNavigationHelpers({
      dispatch,
      state: navigation
    })} />
)

AppWithNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  navigation: state.navigation
})

export default connect(mapStateToProps)(AppWithNavigation)
