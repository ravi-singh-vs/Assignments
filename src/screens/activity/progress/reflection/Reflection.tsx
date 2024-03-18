import React, { useEffect } from 'react'
import { View, ImageBackground, FlatList, Text } from 'react-native'

import ASHeader from '../../../../components/header/ASHeader'
import ASReflectionCard from '../../../../components/reflection-card/ASReflectionCard'
import { useAppDispatch, useAppSelector } from '../../../../redux/store'
import { fetchReflectionData, getReflectionData } from '../../../../redux/slices/relections-slice'
import { IReflectionDataType } from '../../../../types/reflection-types'

import { ResizeMode, backButtonGreenIcon } from '../../../../constants/common-constants'
import { reflectionBackgroundImage } from '../../../../constants/reflection-constants'

import { styles } from './reflection-styles'

const Reflection = () => {
  const dispatch = useAppDispatch()

  const { reflectionData } = useAppSelector(getReflectionData)

  useEffect(() => {
    dispatch(fetchReflectionData())
  }, [])

  return (
    <View style={styles.container}>
      <ImageBackground
        source={reflectionBackgroundImage}
        style={styles.image}
        resizeMode={ResizeMode.Stretch}>
        <ASHeader
          headerTitle="My Reflections"
          backButtonIcon={backButtonGreenIcon}
          canGoToPreviousScreen={true}
        />
        <FlatList
          data={reflectionData}
          renderItem={({ item }: { item: IReflectionDataType }) => <ASReflectionCard {...item} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item?.id)}
          ListEmptyComponent={() => <Text>Loading...</Text>}
        />
      </ImageBackground>
    </View>
  )
}

export default Reflection
