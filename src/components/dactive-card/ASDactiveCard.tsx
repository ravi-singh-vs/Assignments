import { Alert, ImageBackground, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { COLORS } from '../../theme/colors'
import ASButton from '../button/ASButton'

import { DACTIVE_CARD_BUTTON_TIME_DATA, DACTIVE_CARD_INFO } from '../../constants/dactive-constants'

import { styles } from './asDactiveCard-styles'
import { ResizeMode } from '../../constants/common-constants'

interface IASDactiveCardProps {
  title: string
}

const ASDActiveCard = (props: IASDactiveCardProps) => {
  const { title } = props
  const color: string = DACTIVE_CARD_INFO[title].textColor
  const imageSource: number = DACTIVE_CARD_INFO[title].imageSource

  const renderDactiveCardButtons = () => {
    return DACTIVE_CARD_BUTTON_TIME_DATA.map(time => (
      <ASButton key={time} label={`${time}min`} onPress={() => Alert.alert('button pressed')} />
    ))
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={imageSource}>
        <LinearGradient
          locations={[0, 0.8792, 1]}
          colors={COLORS.dactiveCardTitleGradient}
          style={styles.textContainer}>
          <Text style={[styles.title, { color }]}>{title}</Text>
        </LinearGradient>
        <LinearGradient
          colors={COLORS.dactiveCardButtonGradient}
          start={{
            x: 0.5,
            y: 0,
          }}
          end={{
            x: 0.5,
            y: 1,
          }}
          style={styles.buttonContainer}>
          {renderDactiveCardButtons()}
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

export default ASDActiveCard
