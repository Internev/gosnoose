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

export default class AnimExpand extends Component<{}> {
  constructor () {
    super()
    this.boxWidth = new Animated.Value(0)
  }
  componentDidMount () {
    this.expando()
  }
  expando () {
    this.boxWidth.setValue(0)
    Animated.sequence([
      Animated.timing(
        this.boxWidth,
        {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear
        }
      ),
      Animated.timing(
        this.boxWidth,
        {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear
        }
      )
    ]).start(() => this.expando())
  }
  render () {
    const expando = this.boxWidth.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 400],
    })
    return (

        <Animated.View
          style={[
            styles.box,
            {
              backgroundColor: '#ED10AB',
              width: expando
            }
          ]}
          >
        </Animated.View>

    )
  }
}
