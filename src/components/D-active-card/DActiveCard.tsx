import {ImageBackground, Platform, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import {COLORS} from '../../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './DActiveCard-styles';


const timeData = [2, 4, 8];

const getInfo = (title: string) => {
  switch (title.trim().toLowerCase()) {
    case 'focus':
      return [COLORS.primary700, require('../../assets/images/focus.png')];
    case 'follow':
      return [COLORS.neutral700, require('../../assets/images/follow.png')];
    case 'outer ring':
      return [
        COLORS.secondary600,
        require('../../assets/images/outer-ring.png'),
      ];
    case 'scan':
      return [COLORS.accent700, require('../../assets/images/scan.png')];
    case 'square':
      return [COLORS.primary700, require('../../assets/images/square.png')];
    default:
      return [COLORS.black, require('../../assets/images/square.png')];
  }
};

const DActiveCard = ({title}: {title: string}) => {
  const [color, imageSource] = getInfo(title);

  return (
    <View
      style={[
        styles.container,
        title.trim().toLowerCase() === 'focus' && (Platform.OS === 'android'
        ? styles.androidShadow
        : styles.iosShadow),
      ]}>
      <ImageBackground source={imageSource} width={200} style={styles.image}>
        <LinearGradient
          locations={[0, 0.8792, 1]}
          colors={[
            'rgba(255,255,255,0.56)',
            'rgba(255,255,255,0.12)',
            'rgba(255,255,255,0)',
          ]}
          >
          <Text style={[styles.title, {color: color}]}>{title}</Text>
        </LinearGradient>

        <LinearGradient
          colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.8)']}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
          >
          <View style={styles.btnContainer}>
            {timeData.map(time => (
              <CustomButton key={time} time={time} style={styles.button} />
            ))}
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default DActiveCard;
