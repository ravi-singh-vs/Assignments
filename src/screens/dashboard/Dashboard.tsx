import React, { useEffect } from 'react'
import { FlatList, SafeAreaView, Text } from 'react-native'

import ASDashboardHeader from '../../components/dashboard-header/ASDashboardHeader'
import ASDashboardMasteryCard from '../../components/dashboard-mastery-card/ASDashboardMasteryCard'
import ASDashboardCard from '../../components/dashboard-card/ASDashboardCard'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { fetchDashboardData, getDashboardData } from '../../redux/slices/dashboard-slice'
import { IDashboardDataType } from '../../types/dashboard-types'

import { styles } from './dashboard-styles'

const Dashboard = () => {
  const dispatch = useAppDispatch()

  const { dashboardData } = useAppSelector(getDashboardData)

  useEffect(() => {
    dispatch(fetchDashboardData())
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ASDashboardHeader title="Overthinker" />
      <ASDashboardMasteryCard />
      <FlatList
        data={dashboardData}
        keyExtractor={(item: IDashboardDataType) => String(item?.id)}
        renderItem={({ item }: { item: IDashboardDataType }) => <ASDashboardCard {...item}/>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.subContainer}
        ListEmptyComponent={() => <Text>Loading...</Text>}
      />
    </SafeAreaView>
  )
}

export default Dashboard
