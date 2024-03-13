import { useState, useEffect } from 'react'
import { FlatList, View } from 'react-native'

import Header from '../../components/header/Header'
import NotificationCard from '../../components/notification-card/NotificationCard'
import EmptyView from '../../components/empty-view/EmptyView'
import { getData } from '../../services/get-data'
import { NotificationDataType } from '../../types/notification-types'

import { API } from '../../constants/api-constants'
import { settingsIcon } from '../../constants/notification-constants'

import { styles } from './notifications-styles'

const Notifications = () => {
  const [notificationsData, setNotificationsData] = useState<NotificationDataType[]>([])
  const [refreshing, setRefreshing] = useState<boolean>(false)

  const getNotificationsData = async () => {
    const res = await getData(API.NOTIFICATIONS_API)
    if (res.success) {
      setNotificationsData(res.data)
    } else {
      console.error(res.error)
    }
  }
  useEffect(() => {
    getNotificationsData()
  }, [])

  const onRefresh = () => {
    setRefreshing(true)
    getNotificationsData()
    setRefreshing(false)
  }
  return (
    <>
      <Header headerTitle="Notifications" imageSource={settingsIcon} />
      <View style={styles.container}>
        {
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.subContainer}
            ListEmptyComponent={<EmptyView />}
            data={notificationsData}
            renderItem={({ item }: { item: NotificationDataType }) => (
              <NotificationCard {...item} />
            )}
            keyExtractor={(item: NotificationDataType) => item?.id}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      </View>
    </>
  )
}

export default Notifications
