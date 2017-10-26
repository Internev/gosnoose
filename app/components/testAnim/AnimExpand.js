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
    this.boxSize = new Animated.Value(0)
  }
  componentDidMount () {
    this.expando()
  }
  expando () {
    this.boxSize.setValue(0)
    Animated.sequence([
      Animated.timing(
        this.boxSize,
        {
          toValue: 1,
          duration: 2000,
          easing: Easing.bounce,
        }
      ),
      Animated.timing(
        this.boxSize,
        {
          toValue: 0,
          duration: 2000,
          easing: Easing.bounce,
        }
      )
    ]).start(() => this.expando())
  }
  render () {
    const widthAnim = this.boxSize.interpolate({
      inputRange: [0, 1],
      outputRange: [100, 400],
    })
    const heightAnim = this.boxSize.interpolate({
      inputRange: [0, 1],
      outputRange: [400, 100],
    })
    return (

        <Animated.View
          style={[
            styles.box,
            {
              backgroundColor: '#ED10AB',
              width: widthAnim,
              height: heightAnim,
            }
          ]}
          >
        </Animated.View>

    )
  }
}
