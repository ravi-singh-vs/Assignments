import React, { useEffect } from 'react'
import { ImageBackground, FlatList, Text, SafeAreaView } from 'react-native'

import ASHeader from '../../../../components/header/ASHeader'
import ASReflectionCard from '../../../../components/reflection-card/ASReflectionCard'
import { useAppDispatch, useAppSelector } from '../../../../redux/store'
import { fetchReflectionData, getReflectionData } from '../../../../redux/slices/relections-slice'
import { IReflectionDataType } from '../../../../types/reflection-types'

import { ResizeMode, greenBackArrowIcon } from '../../../../constants/common-constants'
import { reflectionBackgroundImage } from '../../../../constants/reflection-constants'

import { styles } from './reflection-styles'
import ASLoader from '../../../../components/loader/ASLoader'

const Reflection = () => {
  const dispatch = useAppDispatch()

  const { reflectionData, loading } = useAppSelector(getReflectionData)

  useEffect(() => {
    dispatch(fetchReflectionData())
  }, [])

  if (loading) return <ASLoader />
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={reflectionBackgroundImage}
        style={styles.image}
        resizeMode={ResizeMode.Stretch}>
        <ASHeader
          headerTitle="My Reflections"
          backButtonIcon={greenBackArrowIcon}
          canGoToPreviousScreen={true}
        />
        <FlatList
          data={reflectionData}
          renderItem={({ item }: { item: IReflectionDataType }) => <ASReflectionCard {...item} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
          ListEmptyComponent={() => <Text>Loading...</Text>}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Reflection
