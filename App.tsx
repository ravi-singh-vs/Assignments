import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import { store } from './src/redux/store'
import StackNavigator from './src/navigation/stack-navigator/StackNavigator'

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar backgroundColor={'transparent'} barStyle="dark-content" />
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}

export default App
