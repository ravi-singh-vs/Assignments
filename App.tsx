import { SafeAreaView, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import { store } from './src/redux/store'
import StackNavigator from './src/navigation/stack-navigator/StackNavigator'
import { styles } from './App-styles'

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'transparent'} barStyle="dark-content" />
            <StackNavigator />
          </SafeAreaView>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}
export default App
