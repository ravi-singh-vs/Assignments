import {SafeAreaView, StatusBar, StyleSheet, ViewStyle} from 'react-native';
import Notifications from './src/screens/notifications/Notifications';
import DActive from './src/screens/D-active/DActive';
import {COLORS} from './src/theme/theme';

const App = () => {
  const showNotificationsScreen = false;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      {showNotificationsScreen ? <Notifications /> : <DActive />}
    </SafeAreaView>
  );
};

interface Style {
  mainContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.neutralWhite,
  },
});

export default App;
