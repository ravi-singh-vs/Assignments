import { useState, useEffect } from 'react'
import { FlatList } from 'react-native'

import Header from '../../components/header/ASHeader'
import ASNotificationCard from '../../components/notification-card/ASNotificationCard'
import EmptyView from '../../components/empty-view/ASEmptyView'
import { getNotificationsDativeData } from '../../services/api/get-notifications-dactive-data'
import { INotificationDataType } from '../../types/notification-types'

import { API_ENDPOINTS } from '../../constants/api-constants'
import { settingsIcon } from '../../constants/notifications-constants'

import { styles } from './notifications-styles'

const Notifications = () => {
  const [notificationsData, setNotificationsData] = useState<INotificationDataType[]>([])
  const [refreshing, setRefreshing] = useState<boolean>(false)

  const getNotificationsData = async () => {
    const res = await getNotificationsDativeData(API_ENDPOINTS.NOTIFICATIONS_API_ENDPOINT)
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
      <Header headerTitle="Notifications" image={settingsIcon} />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.subContainer}
        ListEmptyComponent={<EmptyView />}
        data={notificationsData}
        renderItem={({ item }: { item: INotificationDataType }) => <ASNotificationCard {...item} />}
        keyExtractor={(item: INotificationDataType) => item?.id}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </>
  )
}

export default Notifications
