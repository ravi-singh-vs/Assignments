import { Text, TouchableOpacity } from 'react-native'

import { styles } from './asButton-styles'

interface IASButtonProps {
  label: string
  onPress?: () => void
}

const ASButton = (props: IASButtonProps) => {
  const { label, onPress } = props
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

export default ASButton
