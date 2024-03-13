import { ImageBackground, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import CustomButton from '../custom-button/CustomButton'
import { dactiveCardButtonContainerGradient, dactiveCardTitleGradient } from '../../theme/colors'

import {
  dactiveCardButtonContainerGradientEnd,
  dactiveCardButtonContainerGradientStart,
  dactiveCardButtonTimeData,
  dactiveCardInfo,
  dactiveCardTitleGradientLocations,
} from '../../constants/dactive-constants'

import { styles } from './DactiveCard-styles'

interface IDactiveCardProps {
  title: string
}
const DActiveCard = (props: IDactiveCardProps) => {
  const { title } = props
  const color: string = dactiveCardInfo[title].textColor
  const imageSource: number = dactiveCardInfo[title].imageSource

  return (
    <View style={styles.container}>
      <ImageBackground source={imageSource} style={styles.image}>
        <LinearGradient
          locations={dactiveCardTitleGradientLocations}
          colors={dactiveCardTitleGradient}>
          <Text style={[styles.title, { color }]}>{title}</Text>
        </LinearGradient>
        <LinearGradient
          colors={dactiveCardButtonContainerGradient}
          start={dactiveCardButtonContainerGradientStart}
          end={dactiveCardButtonContainerGradientEnd}>
          <View style={styles.btnContainer}>
            {dactiveCardButtonTimeData.map(time => (
              <CustomButton key={time} time={`${time}min`} style={styles.button} />
            ))}
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

export default DActiveCard
