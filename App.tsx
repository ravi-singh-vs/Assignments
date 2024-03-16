import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import StackNavigator from './src/navigation/stack-navigator/StackNavigator'
import { COLORS } from './src/theme/colors'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'transparent'} translucent barStyle="dark-content" />
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App
