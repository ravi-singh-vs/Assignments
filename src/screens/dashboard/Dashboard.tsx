import { View, Text, FlatList, ListRenderItem, ScrollView } from 'react-native'
import React from 'react'
import ASDashboardHeader from '../../components/dashboard-header/ASDashboardHeader'
import ASDashboardMasteryCard from '../../components/dashboard-mastery-card/ASDashboardMasteryCard'
import { styles } from './dashboard-styles'
import ASDashboardCard from '../../components/dashboard-card/ASDashboardCard'

const renderItem: ListRenderItem<any> = ({ item }) => <ASDashboardCard data={item} />
const Dashboard = () => {
  return (
    <View style={styles.container}>
      <ASDashboardHeader />
      <ASDashboardMasteryCard />
      <FlatList
        ListEmptyComponent={
          <ScrollView>
            <ASDashboardCard />
            <ASDashboardCard />
            <ASDashboardCard />
          </ScrollView>
        }
        data={[]}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        scrollEnabled
        style={styles.subContainer}
      />
    </View>
  )
}

export default Dashboard
