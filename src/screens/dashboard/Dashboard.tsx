import React, { useEffect } from 'react'
import { FlatList, Platform, StatusBar, Text, View } from 'react-native'

import ASDashboardCard from '../../components/dashboard-card/ASDashboardCard'
import ASDashboardHeader from '../../components/dashboard-header/ASDashboardHeader'
import ASDashboardMasteryCard from '../../components/dashboard-mastery-card/ASDashboardMasteryCard'
import ASLoader from '../../components/loader/ASLoader'
import { fetchDashboardData, getDashboardData } from '../../redux/slices/dashboard-slice'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { IDashboardDataType } from '../../types/dashboard-types'

import { styles } from './dashboard-styles'

const Dashboard = () => {
  const dispatch = useAppDispatch()

  const { dashboardData } = useAppSelector(getDashboardData)

  useEffect(() => {
    dispatch(fetchDashboardData())
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
      />
      <ASDashboardHeader title="Overthinker" />
      <ASDashboardMasteryCard />
      <FlatList
        data={dashboardData}
        keyExtractor={(item: IDashboardDataType) => String(item.id)}
        renderItem={({ item }: { item: IDashboardDataType }) => <ASDashboardCard {...item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.subContainer}
        ListEmptyComponent={() => <ASLoader />}
      />
    </View>
  )
}

export default Dashboard
