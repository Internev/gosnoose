/**
 * @flow
 */

import { StackNavigator } from 'react-navigation'
import Main from './screens/Main'
import Second from './screens/Second'

const App = StackNavigator({
  Home: { screen: Main },
  Second: { screen: Second },
})

export default App
