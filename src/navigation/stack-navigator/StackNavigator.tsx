import { createStackNavigator } from '@react-navigation/stack'

import TabNavigator from '../tab-navigator/TabNavigator'
import MyReflections from '../../screens/activity/progress/my-reflections/MyReflections'
import { StackNavigatorParams } from '../../types/stackNavigator-types'

const Stack = createStackNavigator<StackNavigatorParams>()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ animationEnabled: true, gestureDirection: 'horizontal' }}
      />
      <Stack.Screen
        name="MyReflections"
        component={MyReflections}
        options={{ animationEnabled: true, gestureDirection: 'horizontal' }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator
