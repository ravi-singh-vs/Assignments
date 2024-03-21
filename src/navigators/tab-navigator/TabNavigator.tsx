import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Feather'

import { Discovery, Education, Home, Map, News } from '../../screens'
import { COLORS, Spacing } from '../../theme'
import { TabNavigatorParams } from '../../types'

import { Screens, TAB_ICON_SOURCE } from '../../constants'

import { styles } from './tabNavigator-styles'

const Tab = createBottomTabNavigator<TabNavigatorParams>()

const tabScreenOptions = (screenName: string) => {
  return {
    tabBarIcon: ({ focused }: { focused: boolean }) => (
      <Icon
        name={TAB_ICON_SOURCE[screenName]}
        size={Spacing.space_28}
        style={focused && styles.activeIcon}
      />
    ),
  }
}
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: true,
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary[50],
        tabBarLabelStyle: styles.tabBarLabel,
      }}
      initialRouteName={Screens.Home}>
      <Tab.Screen name={Screens.Home} component={Home} options={tabScreenOptions(Screens.Home)} />
      <Tab.Screen name={Screens.Map} component={Map} options={tabScreenOptions(Screens.Map)} />
      <Tab.Screen
        name={Screens.Education}
        component={Education}
        options={tabScreenOptions(Screens.Education)}
      />
      <Tab.Screen
        name={Screens.Discovery}
        component={Discovery}
        options={tabScreenOptions(Screens.Discovery)}
      />
      <Tab.Screen name={Screens.News} component={News} options={tabScreenOptions(Screens.News)} />
    </Tab.Navigator>
  )
}

export default TabNavigator
