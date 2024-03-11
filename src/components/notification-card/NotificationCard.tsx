import { Image, Text, View } from 'react-native';
import { styles } from './NotificationCard-styles';
import { getTimeInfo } from '../../utils/common-utils';
import { COLORS } from '../../theme/theme';
import { NotificationDataType as INotificationCardProps } from '../../types/general-types';



const getImageSource = (image: string) => {
    switch (image.trim().toLowerCase()) {
        case 'reflection': return require('../../assets/icons/reflection.png');
        case 'reminder':  return require('../../assets/icons/reminder.png');
        case 'd-active' : return require('../../assets/icons/D-active.png');
        default: return null; 
    }
};

const NotificationCard = ({ item }: { item: INotificationCardProps }) => {
    const time: string = getTimeInfo(item.createdAt);
    const imageSource =  getImageSource(item.image);
    const backgroundColor:string = item.status ? COLORS.primary50 : '#FFFFFF' 
    return (
        <View style={[styles.container,{backgroundColor}]}>
            <View style={styles.subContainer}>
                {imageSource && <Image resizeMode="contain" style={styles.icon} source={imageSource} />}
                <Text style={styles.text}>{item.text}</Text>
            </View>
            <View style={styles.timeContainer}>
                <Text style={styles.timeText}>{time} ago</Text>
            </View>
        </View>
    );
};

export default NotificationCard;
