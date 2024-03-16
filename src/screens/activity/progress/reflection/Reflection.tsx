import React, { useEffect, useState } from 'react'
import { View, ImageBackground, FlatList } from 'react-native'

import ASHeader from '../../../../components/header/ASHeader'
import ASReflectionCard from '../../../../components/reflection-card/ASReflectionCard'
import { getReflectionsData } from '../../../../services/api/get-reflections-data'

const renderFunction = (item: any): JSX.Element => {
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
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../../../assets/images/my-reflection.png')}
        style={{ flex: 1 }}
        resizeMode="stretch">
        <ASHeader
          headerTitle="My Reflections"
          backButtonImage={require('../../../../assets/icons/backGreen.png')}
          canGoToPreviousScreen={true}
        />
        <FlatList data={reflectionData} renderItem={({ item }) => renderFunction(item)} />
      </ImageBackground>
    </View>
  )
}

export default Reflection
