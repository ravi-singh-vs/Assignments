import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MenuIcon from 'react-native-vector-icons/Ionicons'
import UserIcon from 'react-native-vector-icons/Feather'

import ASModal from '../modal/ASModal'
import { Spacing } from '../../theme'

import { styles } from './asHeader-styles'

interface IASHeaderProps {
  title: string
}
const ASHeader = (props: IASHeaderProps) => {
  const { title } = props
  const [modalVisible, setShowModalVisible] = useState<boolean>(false)
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
          <MenuIcon name="menu-outline" size={Spacing.space_28} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={() => setShowModalVisible(!modalVisible)}>
          <UserIcon name="user-check" size={Spacing.space_28} />
        </TouchableOpacity>
      </View>
      <ASModal modalVisible={modalVisible} 
        setModalVisible={setShowModalVisible}/>
    </>
  )
}

export default ASHeader
