import { View, Text, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'

import ASProgressCard from '../../../components/progress-card/ASProgressCard'
import { IProgressDataType } from '../../../types/activity-types'
import { StackNavigatorParams } from '../../../types/stackNavigator-types'

import { PROGRESS_DATA, allReflectionsImage } from '../../../constants/activity-constants'

import { styles } from './progress-styles'

const Progress = () => {
  const navigation = useNavigation<StackNavigationProp<StackNavigatorParams>>()

  const sortedProgressData: IProgressDataType[] = PROGRESS_DATA.sort(
    (p1, p2) => Number(p2.progress) - Number(p1.progress),
  )

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={sortedProgressData}
        renderItem={({ item }: { item: IProgressDataType }) => <ASProgressCard {...item} />}
        keyExtractor={item => item.id}
      />

      <View style={styles.imageContainer}>
        <ImageBackground source={allReflectionsImage} style={styles.image}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Reflection')}>
            <Text style={styles.label}>View all Reflections</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  )
}

export default Progress
