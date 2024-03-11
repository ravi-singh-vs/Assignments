import { useState, useEffect } from 'react';
import {
  FlatList,
  Image,
  Text,
  View,
} from 'react-native';
import NotificationCard from '../../components/notification-card/NotificationCard';
import EmptyNotification from '../../components/empty-notification/EmptyNotification';
import { NotificationDataType } from '../../types/general-types';
import { getData } from '../../services/get-data';
import { styles } from './notifications-styles';
import Loader from '../../components/loader/Loader';
import Error from '../../components/error/Error';
const settingsIcon = require('../../assets/icons/settings.png');
const arrowIcon = require('../../assets/icons/arrow.png');

const Notifications:React.FC = () => {
  const [notificationsData , setNotificationsData] = useState<NotificationDataType[]>([]);
  const [loading,setLoading] = useState<boolean>(true);
  const [error,setError] = useState<string>('')
  const [refreshing,setRefreshing] = useState<boolean>(false)

  const getNotificationsData = async()  =>{
    const res = await getData('https://ravi-singh-vs.github.io/api/notifications.json');
    if(res.success){
      setNotificationsData(res.data);
    }
    else{
      setError('Error in fetching notifications')
    }
    setLoading(false)
  }
  useEffect(()=>{
    getNotificationsData();
  },[])

  const onRefresh = async() =>{
    setRefreshing(true);
    await getNotificationsData();
    setRefreshing(false)
  }

  return (
    <>
      <View style={styles.header}>
        <Image source={arrowIcon} style={styles.icon} />
        <Text style={styles.title}>Notifications</Text>
        <Image source={settingsIcon} style={styles.icon} />
      </View>
      <View style={styles.container}>
        {
          loading ? (<Loader/>) :
          (
            error ? (<Error error={error}/>) :  
            <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            ListEmptyComponent={<EmptyNotification />}
            data={notificationsData}
            renderItem={({item}: {item: NotificationDataType}) => (
              <NotificationCard item={item} />
            )}
            keyExtractor={(item: NotificationDataType) =>
              item ? item?.id : `${Date.now()}`
            }
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
          )
        }
      </View>
    </>
  );
};



export default Notifications;
