import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import StackNavigator from './src/navigators/stack-navigator/StackNavigator'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import { COLORS, Spacing } from './src/theme'

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
