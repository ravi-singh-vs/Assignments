import { View, Text, FlatList, ListRenderItem, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ASDashboardHeader from '../../components/dashboard-header/ASDashboardHeader'
import ASDashboardMasteryCard from '../../components/dashboard-mastery-card/ASDashboardMasteryCard'
import { styles } from './dashboard-styles'
import ASDashboardCard from '../../components/dashboard-card/ASDashboardCard'
import { getDashboardData } from '../../services/api/get-dashboard-data'
import { API_ENDPOINTS } from '../../constants/api-constants'

const renderItem: ListRenderItem<any> = ({ item }) => <ASDashboardCard data={item} />
const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState([])

  const fetchDashboardData = async () => {
    const result = await getDashboardData(API_ENDPOINTS.DASHBOARD_CARDS)
    if (result.success) setDashboardData(result.data)
    else console.error(result.error)
  }
  useEffect(() => {
    fetchDashboardData()
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <ASDashboardHeader />
      <ASDashboardMasteryCard />
      <FlatList
        data={dashboardData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.subContainer}
      />
    </SafeAreaView>
  )
}

export default Dashboard
