import { NavigationActions } from 'react-navigation'
import { AppNavigator } from '../index'

const mainAction =
  AppNavigator.router.getActionForPathAndParams('Home')
const initialNavState =
  AppNavigator.router.getStateForAction(mainAction)

const navigation = (state = initialNavState, action) => {
  switch (action.type) {
    case 'SECOND_SCREEN':
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: 'Second'}),
        state
      )
    default:
      return AppNavigator
        .router
        .getStateForAction(action, state)
  }
}

export default navigation
