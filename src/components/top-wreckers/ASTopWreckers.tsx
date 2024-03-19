import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { IWreckerDataType } from '../../types/activity-types'
import ASLoader from '../loader/ASLoader'
import ASModal from '../modal/ASModal'
import ASTopWreckerCard from '../top-wrecker-card/ASTopWreckerCard'

import { ViewAllWreckers } from '../../constants/activity-constants'
import { ResizeMode } from '../../constants/common-constants'

import { styles } from './asTopWreckers-styles'

interface IASTopWreckersProps {
  wreckers: IWreckerDataType[]
}
const ASTopWreckers = (props: IASTopWreckersProps) => {
  const { wreckers } = props
  const [visible, setVisible] = useState<boolean>(false)

  const handleAllWreckerPress = () => {
    setVisible(true)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Top Wreckers</Text>
      <View style={styles.wreckerContainer}>
        {wreckers.length ? (
          wreckers.map(item => {
            return (
              <ASTopWreckerCard
                key={item.id}
                image={item.title}
                percent={item.progress}
                title={item.title}
                description={item.description}
              />
            )
          })
        ) : (
          <ASLoader />
        )}
      </View>
      <TouchableOpacity style={styles.subContainer} onPress={handleAllWreckerPress}>
        <ASModal
          showModal={visible}
          setShowModal={setVisible}
          icon={ViewAllWreckers['Distractor']}
          title="Coming Soon...."
          description="All Wreckers will be updated !"
        />
        <Text style={styles.allWreckerText}>View All Wreckers</Text>
        <Image
          style={styles.icon}
          source={ViewAllWreckers['ArrowRight']}
          resizeMode={ResizeMode.Contain}
        />
      </TouchableOpacity>
    </View>
  )
}

export default ASTopWreckers
