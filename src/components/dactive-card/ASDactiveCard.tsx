import { Alert, ImageBackground, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import ASButton from '../button/ASButton'
import { COLORS } from '../../theme/colors'

import {
  DACTIVE_CARD_BUTTON_CONTAINER_GRADIENT_END,
  DACTIVE_CARD_BUTTON_CONTAINER_GRADIENT_START,
  DACTIVE_CARD_BUTTON_TIME_DATA,
  DACTIVE_CARD_INFO,
  DACTIVE_CARD_TITLE_GRADIENT_LOCATIONS,
} from '../../constants/dactive-constants'

import { styles } from './asDactiveCard-styles'

interface IASDactiveCardProps {
  title: string
}
const ASDActiveCard = (props: IASDactiveCardProps) => {
  const { title } = props
  const color: string = DACTIVE_CARD_INFO[title].textColor
  const imageSource: number = DACTIVE_CARD_INFO[title].imageSource

  const renderDactiveCardButtons = () => {
    return DACTIVE_CARD_BUTTON_TIME_DATA.map(time => (
      <ASButton key={time} time={`${time}min`} onPress={() => Alert.alert('button pressed')} />
    ))
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={imageSource} style={styles.image}>
        <LinearGradient
          locations={DACTIVE_CARD_TITLE_GRADIENT_LOCATIONS}
          colors={COLORS.dactiveCardTitleGradient}>
          <Text style={[styles.title, { color }]}>{title}</Text>
        </LinearGradient>
        <LinearGradient
          colors={COLORS.dactiveCardButtonContainerGradient}
          start={DACTIVE_CARD_BUTTON_CONTAINER_GRADIENT_START}
          end={DACTIVE_CARD_BUTTON_CONTAINER_GRADIENT_END}>
          <View style={styles.btnContainer}>{renderDactiveCardButtons()}</View>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

export default ASDActiveCard
