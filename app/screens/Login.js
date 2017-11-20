import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {email: '', pass: ''}
  }

  render () {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder='Email Address'
          name='email'
          onChangeText={(email) => this.setState({email})}
        />
        <TextInput
          style={{height: 40}}
          placeholder='Password'
          name='pass'
          onChangeText={(pass) => this.setState({pass})}
        />
        <Text>{this.state.email}, {this.state.pass}</Text>
      </View>
    )
  }
}
