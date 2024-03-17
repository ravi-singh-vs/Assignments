import { StyleSheet } from 'react-native'
import { ResizeMode } from '../../../../constants/common-constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: ResizeMode.Contain,
    width: '100%',
    height: '100%',
  },
})
