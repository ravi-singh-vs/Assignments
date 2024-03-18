import { useEffect } from 'react'
import { FlatList, View, Text, SafeAreaView } from 'react-native'

import Header from '../../components/header/ASHeader'
import ASDActiveCard from '../../components/dactive-card/ASDactiveCard'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { fetchDactiveData, getDactiveData } from '../../redux/slices/dactive-slice'
import { IDactiveDataType } from '../../types/dactive-types'

import { greenBackButtonIcon } from '../../constants/common-constants'

import { styles } from './dactive-styles'

const Dactive = () => {
  const dispatch = useAppDispatch()
  const { dactiveData } = useAppSelector(getDactiveData)

  useEffect(() => {
    dispatch(fetchDactiveData())
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Header headerTitle="D-active" backButtonIcon={greenBackButtonIcon} />
      <View style={styles.subContainer}>
        {
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dactiveData}
            renderItem={({ item }: { item: IDactiveDataType }) => <ASDActiveCard {...item} />}
            keyExtractor={(item: IDactiveDataType) => item?.id}
            ListEmptyComponent={() => <Text>Loading...</Text>}
          />
        }
      </View>
    </SafeAreaView>
  )
}

export default Dactive
