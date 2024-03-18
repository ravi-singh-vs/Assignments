import { useEffect } from 'react'
import { FlatList, View } from 'react-native'

import Header from '../../components/header/ASHeader'
import ASNotificationCard from '../../components/notification-card/ASNotificationCard'
import EmptyView from '../../components/empty-view/ASEmptyView'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { fetchNotifications, getNotifications } from '../../redux/slices/notifications-slice'
import { INotificationDataType } from '../../types/notification-types'

import { greenBackButtonIcon } from '../../constants/common-constants'

import { styles } from './notifications-styles'

const Notifications = () => {
  const dispatch = useAppDispatch()

  const { notificationsData, loading } = useAppSelector(getNotifications)

  useEffect(() => {
    dispatch(fetchNotifications())
  }, [])

  const onRefresh = () => {
    dispatch(fetchNotifications())
  }
  return (
    <View style={styles.container}>
      <Header headerTitle="Notifications" backButtonIcon={greenBackButtonIcon} />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.subContainer}
        ListEmptyComponent={<EmptyView />}
        data={notificationsData}
        renderItem={({ item }: { item: INotificationDataType }) => <ASNotificationCard {...item} />}
        keyExtractor={(item: INotificationDataType) => item?.id}
        refreshing={loading}
        onRefresh={onRefresh}
      />
    </View>
  )
}

export default Notifications
