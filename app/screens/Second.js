/**
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { Testy } from '../components/testComp'
import { AnimExpand } from '../components/testAnim'

export default class Second extends Component<{}> {
  static navigationOptions = {
    title: 'Gosnoose Second Page',
    // header: null, <-- removes header.
  }
  render() {
    return (
      <View style={styles.container}>
        <AnimExpand />
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
