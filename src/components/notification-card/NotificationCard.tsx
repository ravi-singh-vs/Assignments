import {Image, Text, View} from 'react-native';

import {NotificationDataType as INotificationCardProps} from '../../types/notification-types';
import {getTimeInfo} from '../../utils/common-utils';
import {COLORS} from '../../theme/colors';

import {NotificationImageSource} from '../../constants/notification-constants';

import {styles} from './NotificationCard-styles';

const NotificationCard = ({item}: {item: INotificationCardProps}) => {
  const time: string = getTimeInfo(item.createdAt);
  const imageSource = NotificationImageSource[item.image];
  const backgroundColor: string = item.isRead
    ? COLORS.primary50
    : COLORS.neutralWhite;
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View style={styles.subContainer}>
        {imageSource && (
          <Image
            resizeMode="contain"
            style={styles.icon}
            source={imageSource}
          />
        )}
        <Text style={styles.text}>{item.text}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{time} ago</Text>
      </View>
    </View>
  );
};

export default NotificationCard;
