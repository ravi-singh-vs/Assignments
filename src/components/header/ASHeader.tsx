import { Image, Text, View } from 'react-native'

import { styles } from './asHeader-styles'

interface IASHeaderProps {
  headerTitle: string
  image?: number
}
const ASHeader = (props: IASHeaderProps) => {
  const { headerTitle, image } = props
  return (
    <View style={styles.header}>
      <View style={styles.emptyContainer} />
      <Text style={styles.title}>{headerTitle}</Text>
      {image ? (
        <Image source={image} style={styles.icon} />
      ) : (
        <View style={styles.emptyContainer} />
      )}
    </View>
  )
}

export default ASHeader
