import { Image } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Dashboard from '../../screens/dashboard/Dashboard'
import Dactive from '../../screens/dactive/Dactive'
import Activity from '../../screens/activity/Activity'
import Notifications from '../../screens/notifications/Notifications'
import Profile from '../../screens/profile/Profile'
import { TabNavigatorParams } from '../../types/tabNavigator-types'

import { COLORS } from '../../theme/colors'
import { ResizeMode } from '../../constants/common-constants'

import { styles } from './tabNavigator-styles'

const Tab = createBottomTabNavigator<TabNavigatorParams>()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: COLORS.primary[100],
        headerShown: false,
      }}
      initialRouteName="Activity">
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../assets/icons/nav-home.png')}
              style={styles.icon}
              resizeMode={ResizeMode.Contain}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Dactive"
        component={Dactive}
        options={{
          tabBarIcon: () => (
            <Image source={require('../../assets/icons/nav-dactive.png')} style={styles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarIcon: () => (
            <Image source={require('../../assets/icons/nav-activity.png')} style={styles.icon} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../assets/icons/nav-notification.png')}
              style={styles.icon}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../assets/icons/nav-profile.png')}
              style={styles.icon}
              resizeMode={ResizeMode.Contain}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
