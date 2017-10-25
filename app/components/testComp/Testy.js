/**
 * @flow
 */

import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
} from 'react-native'
import styles from './styles'

const Testy = ({displayText, heading}) => (
  <View>
    <Text style={heading ? styles.heading : styles.text}>
      {displayText}
    </Text>
  </View>
)

Testy.PropTypes = {
  displayText: PropTypes.string,
  heading: PropTypes.bool,
}

export default Testy
