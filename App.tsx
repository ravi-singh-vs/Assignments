import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import Splash from './src/screens/splash/Splash'
import Login from './src/screens/login/Login'
import { SafeAreaView } from 'react-native'
import { COLORS, Spacing } from './src/theme'
import Onboarding from './src/screens/onboarding/Onboarding'
import StackNavigator from './src/navigators/stack-navigator/StackNavigator'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
}
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <SafeAreaView style={styles.mainContainer}>
          <StackNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer: {
    flex: Spacing.space_1,
    backgroundColor: COLORS.white,
  },
})
