/**
 * @flow
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Animated,
  Easing,
} from 'react-native'
import styles from './styles'

export default class AnimSpin extends Component<{}> {
  constructor () {
    super()
    this.spinValue = new Animated.Value(0)
  }
  componentDidMount () {
    this.spin()
  }
  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }
  render () {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    })
    return (
      <View style={styles.container}>
        <Animated.Text
          style={{
            transform: [{rotate: spin}]
          }}
          >
          GOSNOOSE
        </Animated.Text>
      </View>
    )
  }
}
