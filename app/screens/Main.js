// @flow

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'
import { Testy } from '../components/testComp'
import { AnimSpin } from '../components/testAnim'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

const Main = ({ navigation }) => (
  <View style={styles.container}>
    <Testy
      displayText={'The majestic snow goose has arrived.'}
      heading
    />
    <Testy displayText={'To get started, edit app/index.js'} />
    <Testy displayText={instructions} />
    <AnimSpin />
    <Button
      onPress={() => navigation.dispatch({
        type: 'SECOND_SCREEN'
      })}
      title='Go to second page'
    />
    <Button
      onPress={() => navigation.dispatch({
        type: 'LOGIN_SCREEN'
      })}
      title='Log in here'
    />
  </View>
)

Main.navigationOptions = {
  title: 'Gosnoose Main'
}

export default Main
