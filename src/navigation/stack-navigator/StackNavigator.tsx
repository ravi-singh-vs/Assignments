import { createStackNavigator } from '@react-navigation/stack'

import Reflection from '../../screens/activity/progress/reflection/Reflection'
import ReflectionOfTheDay from '../../screens/activity/progress/reflection-of-the-day/ReflectionOfTheDay'
import TabNavigator from '../tab-navigator/TabNavigator'
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
        name="Reflection"
        component={Reflection}
        options={{ animationEnabled: true, gestureDirection: 'horizontal' }}
      />
      <Stack.Screen
        name="ReflectionOfTheDay"
        component={ReflectionOfTheDay}
        options={{ animationEnabled: true, gestureDirection: 'horizontal' }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator
