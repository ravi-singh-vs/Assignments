import { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'

import Header from '../../components/header/ASHeader'
import ASDActiveCard from '../../components/dactive-card/ASDactiveCard'
import { getNotificationsDativeData } from '../../services/api/get-notifications-dactive-data'
import { IDactiveDataType } from '../../types/dactive-types'

import { API_ENDPOINTS } from '../../constants/api-constants'

import { styles } from './dactive-styles'

const Dactive = () => {
  const [DActiveData, setDActiveData] = useState<IDactiveDataType[]>([])

  const getDActiveData = async () => {
    const res = await getNotificationsDativeData(API_ENDPOINTS.DACTIVE_API_ENDPOINT)
    if (res.success) {
      setDActiveData(res.data)
    } else {
      console.error(res.error)
    }
  }
  useEffect(() => {
    getDActiveData()
  }, [])
  return (
    <View style={styles.container}>
      <Header headerTitle="D-active" />
      <View style={styles.subContainer}>
        {
          <FlatList
            showsVerticalScrollIndicator={false}
            data={DActiveData}
            renderItem={({ item }: { item: IDactiveDataType }) => <ASDActiveCard {...item} />}
            keyExtractor={(item: IDactiveDataType) => item.id}
          />
        }
      </View>
    </View>
  )
}

export default Dactive
