import { Dispatch } from 'react'
import { View, Text, Modal, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { StackNavigatorParams } from '../../types'

import { Screens } from '../../constants'

import { styles } from './asModal-styles'

interface IASModalProps {
  modalVisible: boolean
  setModalVisible: Dispatch<React.SetStateAction<boolean>>
}
const ASModal = (props: IASModalProps) => {
  const { modalVisible, setModalVisible } = props

  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorParams>>()

  const handleOnPress = () => {
    setModalVisible(false)
  }
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible)
      }}>
      <TouchableOpacity style={styles.overlay} onPress={handleOnPress} />
      <View style={styles.container}>
        <Text style={styles.text}>Do you want to Logout ?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(Screens.Login)}>
            <Text style={styles.label}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleOnPress}>
            <Text style={styles.label}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default ASModal
