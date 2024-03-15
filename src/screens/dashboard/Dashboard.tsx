import { View, Text, FlatList, ListRenderItem } from 'react-native'
import React from 'react'
import ASDashboardHeader from '../../components/dashboard-header/ASDashboardHeader'
import ASDashboardMasteryCard from '../../components/dashboard-mastery-card/ASDashboardMasteryCard'
import { styles } from './dashboard-styles'

const renderItem: ListRenderItem<any> = ({ item }) => <ASChallengeCard data={item} />
const Dashboard = () => {
  return (
    <View style={{ flex: 1 }}>
      <ASDashboardHeader />
      <ASDashboardMasteryCard />
      <FlatList
        data={[]}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        scrollEnabled
        style={styles.container}
      />
    </View>
  )
}

export default Dashboard
