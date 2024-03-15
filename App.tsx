import { SafeAreaView, StatusBar, StyleSheet, ViewStyle } from 'react-native'

import Notifications from './src/screens/notifications/Notifications'
import Dactive from './src/screens/dactive/Dactive'

import { COLORS } from './src/theme/colors'
import { Spacing } from './src/theme/spacing'
import Dashboard from './src/screens/dashboard/Dashboard'

const App = () => {
  const showNotificationsScreen = true
  return (
    <SafeAreaView style={styles.container}>
      <Dashboard />
    </SafeAreaView>
  )
}

interface Style {
  container: ViewStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: Spacing.space_1,
    backgroundColor: COLORS.white,
  },
})

export default App
