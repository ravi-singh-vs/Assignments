import { createStackNavigator } from '@react-navigation/stack'

import TabNavigator from '../tab-navigator/TabNavigator'

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ animationEnabled: true, gestureDirection: 'horizontal' }}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default StackNavigator
