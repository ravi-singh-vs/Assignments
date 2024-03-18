import React from 'react'
import { Image, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Dashboard from '../../screens/dashboard/Dashboard'
import Dactive from '../../screens/dactive/Dactive'
import Activity from '../../screens/activity/Activity'
import Notifications from '../../screens/notifications/Notifications'
import Profile from '../../screens/profile/Profile'
import { Screens, TAB_ICON_SOURCE } from '../../constants/navigation-constants'
import { TabNavigatorParams } from '../../types/tabNavigator-types'

import { ResizeMode } from '../../constants/common-constants'

import { styles } from './tabNavigator-styles'

const Tab = createBottomTabNavigator<TabNavigatorParams>()

const tabScreenOptions = (screenName: string) => {
  return {
    tabBarIcon: ({ focused }: { focused: boolean }) => (
      <View style={[styles.iconContainer, focused && styles.activeIcon]}>
        <Image
          source={TAB_ICON_SOURCE[screenName]}
          style={styles.icon}
          resizeMode={ResizeMode.Contain}
        />
      </View>
    ),
  }
}
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        headerShown: false,
      }}
      initialRouteName={Screens.Dashboard}>
      <Tab.Screen
        name={Screens.Dashboard}
        component={Dashboard}
        options={tabScreenOptions(Screens.Dashboard)}
      />
      <Tab.Screen
        name={Screens.Dactive}
        component={Dactive}
        options={tabScreenOptions(Screens.Dactive)}
      />
      <Tab.Screen
        name={Screens.Activity}
        component={Activity}
        options={tabScreenOptions(Screens.Activity)}
      />
      <Tab.Screen
        name={Screens.Notifications}
        component={Notifications}
        options={tabScreenOptions(Screens.Notifications)}
      />
      <Tab.Screen
        name={Screens.Profile}
        component={Profile}
        options={tabScreenOptions(Screens.Profile)}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
