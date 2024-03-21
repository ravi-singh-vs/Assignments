import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login, Onboarding, Splash } from '../../screens'
import { TabNavigator } from '..'
import { StackNavigatorParams } from '../../types'

import { Screens } from '../../constants'

const Stack = createNativeStackNavigator<StackNavigatorParams>()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Screens.Splash}>
      <Stack.Screen
        name={Screens.Splash}
        component={Splash}
        options={{ gestureDirection: 'horizontal' }}
      />
      <Stack.Screen
        name={Screens.Onboarding}
        component={Onboarding}
        options={{ gestureDirection: 'horizontal' }}
      />
      <Stack.Screen
        name={Screens.Login}
        component={Login}
        options={{ gestureDirection: 'horizontal' }}
      />
      <Stack.Screen
        name={Screens.TabNavigator}
        component={TabNavigator}
        options={{ gestureDirection: 'horizontal' }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator
