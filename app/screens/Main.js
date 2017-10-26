/**
 * @flow
 */

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

export default class Main extends Component<{}> {
  componentDidMount () {
    console.log('\n\n********\n\ncomponent mounted\n\n********\n\n')
    console.log('AnimSpin:', AnimSpin)
  }
  static navigationOptions = {
    title: 'Gosnoose Main',
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Testy displayText={'The majestic snow goose has arrived.'} heading={true}/>
        <Testy displayText={'To get started, edit app/index.js'}/>
        <Testy displayText={instructions}/>
        <AnimSpin />
        <Button
          onPress={() => navigate('Second')}
          title='Go to second page'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})
