import {Image, Text, View} from 'react-native';
import React from 'react';
import {styles} from './EmptyNotification-styles';

const notificationIcon = require('../../assets/icons/notification.png');
const EmptyNotification = () => {
  return (
    <View style={styles.container} >
      <View style={styles.subContainer}>
        <Image source={notificationIcon} style={styles.icon} />
        <View>
          <Text style={styles.text}>No notifications yet!</Text>
          <Text style={styles.subText}>
            {'You have no notification right now.\nCome back later.'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default EmptyNotification;
