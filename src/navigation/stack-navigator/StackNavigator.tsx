import { createStackNavigator } from '@react-navigation/stack'

import TabNavigator from '../tab-navigator/TabNavigator'
import Reflection from '../../screens/activity/progress/reflection/Reflection'
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
        component={Reflection}
        options={{ animationEnabled: true, gestureDirection: 'horizontal' }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator
