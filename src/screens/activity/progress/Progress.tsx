import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import { useEffect } from 'react'
import { FlatList, ImageBackground, Text, TouchableOpacity, View } from 'react-native'

import ASLoader from '../../../components/loader/ASLoader'
import ASProgressCard from '../../../components/progress-card/ASProgressCard'
import { fetchProgressData, getProgressData } from '../../../redux/slices/progress-slice'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { IProgressDataType } from '../../../types/activity-types'
import { StackNavigatorParams } from '../../../types/stackNavigator-types'

import { allReflectionsImage } from '../../../constants/activity-constants'
import { Screens } from '../../../constants/navigation-constants'

import { styles } from './progress-styles'

const Progress = () => {
  const dispatch = useAppDispatch()

  const { progressData } = useAppSelector(getProgressData)

  useEffect(() => {
    dispatch(fetchProgressData())
  }, [])

  const navigation = useNavigation<StackNavigationProp<StackNavigatorParams>>()

  const sortedProgressData: IProgressDataType[] = [...progressData].sort(
    (p1, p2) => Number(p2.progress) - Number(p1.progress),
  )
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <ASLoader/>}
        data={sortedProgressData}
        renderItem={({ item }: { item: IProgressDataType }) => <ASProgressCard {...item} />}
        keyExtractor={item => item.id}
      />
      <View style={styles.imageContainer}>
        <ImageBackground source={allReflectionsImage} style={styles.image}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(Screens.Reflection)}>
            <Text style={styles.label}>View all Reflections</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  )
}

export default Progress
