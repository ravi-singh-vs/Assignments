import React, { useEffect, useState } from 'react'
import { View, ImageBackground, FlatList } from 'react-native'

import ASHeader from '../../../../components/header/ASHeader'
import ASReflectionCard from '../../../../components/reflection-card/ASReflectionCard'

import { getReflectionsData } from '../../../../services/api/get-reflections-data'
import { IReflectionCard } from '../../../../types/reflection-types'
import { ResizeMode, backButtonGreenIcon } from '../../../../constants/common-constants'
import { reflectionBackgroundImage } from '../../../../constants/reflection-constants'
import { styles } from './reflection-styles'

const renderFunction = (item: IReflectionCard): JSX.Element => {
  return <ASReflectionCard item={item} />
}
const Reflection = () => {
  const [reflectionData, setReflectionData] = useState([])

  const fetchReflectionData = async () => {
    const res = await getReflectionsData()
    if (res.success) setReflectionData(res.data)
    else console.error(res.error)
  }
  useEffect(() => {
    fetchReflectionData()
  }, [])
  return (
    <View style={styles.container}>
      <ImageBackground
        source={reflectionBackgroundImage}
        style={styles.subContainer}
        resizeMode={ResizeMode.Stretch}>
        <ASHeader
          headerTitle="My Reflections"
          backButtonImage={backButtonGreenIcon}
          canGoToPreviousScreen={true}
        />
        <FlatList
          data={reflectionData}
          renderItem={({ item }) => renderFunction(item)}
          showsVerticalScrollIndicator={false}
        />
      </ImageBackground>
    </View>
  )
}

export default Reflection
