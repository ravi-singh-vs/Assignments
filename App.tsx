import { SafeAreaView, StatusBar, StyleSheet, ViewStyle } from 'react-native'

import Notifications from './src/screens/notifications/Notifications'
import Dactive from './src/screens/dactive/Dactive'

import { COLORS } from './src/theme/colors'
import { Spacing } from './src/theme/spacing'

const App = () => {
  const showNotificationsScreen = false;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      {showNotificationsScreen ? <Notifications /> : <Dactive />}
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
