import { Text, TouchableOpacity } from 'react-native'

import { styles } from './asButton-styles'

interface IASButtonProps {
  time: string
  onPress?: () => void
}
const ASButton = (props: IASButtonProps) => {
  const { time, onPress } = props
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.button}>{time}</Text>
    </TouchableOpacity>
  )
}

export default ASButton
