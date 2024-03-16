import { View, Text, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'

import ASProgressCard from '../../../components/progress-card/ASProgressCard'
import { IProgressDataType } from '../../../types/activity-types'
import { StackNavigatorParams } from '../../../types/stackNavigator-types'

import { progressData } from '../../../constants/activity-constants'

import { styles } from './progress-styles'

const Progress = () => {
  const navigation = useNavigation<StackNavigationProp<StackNavigatorParams>>()

  const topProgressData: IProgressDataType[] = progressData
    .sort((a, b) => Number(b.progress) - Number(a.progress))
    .slice(0, 4)

  return (
    <View style={styles.container}>
      <FlatList
        data={topProgressData}
        renderItem={({ item }: { item: IProgressDataType }) => <ASProgressCard {...item} />}
      />
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('../../../assets/images/all-reflections.png')}
          style={styles.image}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('MyReflections')}>
            <Text style={styles.text}>View all Reflections</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  )
}

export default Progress
