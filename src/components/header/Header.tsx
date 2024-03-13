import { Image, Text, View } from 'react-native'

import { styles } from './Header-styles'

interface IHeaderProps {
  headerTitle: string
  imageSource?: number
}
const Header = (props: IHeaderProps) => {
  const { headerTitle, imageSource } = props
  return (
    <View style={styles.header}>
      <View style={styles.emptyContainer} />
      <Text style={styles.title}>{headerTitle}</Text>
      {imageSource ? (
        <Image source={imageSource} style={styles.icon} />
      ) : (
        <View style={styles.emptyContainer} />
      )}
    </View>
  )
}

export default Header
