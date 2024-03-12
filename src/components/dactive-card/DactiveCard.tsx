import {ImageBackground, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CustomButton from '../custom-button/CustomButton';
import {
  DactiveCardImageSource,
  DactiveCardTitleColor,
  buttonContainerGradientColors,
  textGradientColors,
  buttonTimeData,
} from '../../constants/dactive-constants';

import {styles} from './DactiveCard-styles';

const DActiveCard = ({title}: {title: string}) => {
  const color: string = DactiveCardTitleColor[title];
  const imageSource: number = DactiveCardImageSource[title];

  return (
    <View style={styles.container}>
      <ImageBackground source={imageSource} style={styles.image}>
        <LinearGradient locations={[0, 0.8792, 1]} colors={textGradientColors}>
          <Text style={[styles.title, {color: color}]}>{title}</Text>
        </LinearGradient>

        <LinearGradient
          colors={buttonContainerGradientColors}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}>
          <View style={styles.btnContainer}>
            {buttonTimeData.map(time => (
              <CustomButton
                key={time}
                time={`${time}min`}
                style={styles.button}
              />
            ))}
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default DActiveCard;
