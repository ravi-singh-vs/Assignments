import React from 'react'
import {
    Image,
    ImageSourcePropType,
    Modal,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

import ASLoadingBar from '../loading-bar/ASLoadingBar'

import { styles } from './asModal-style'

interface IASModalProps {
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  icon?: ImageSourcePropType
  description: string
  progress?: string | null
  title: string
}

const ASModal = ({
  showModal,
  setShowModal,
  icon,
  description,
  progress = null,
  title,
}: IASModalProps) => {

  const handleOnPress = () => {
    setShowModal(false)
  }
  return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(!showModal)
        }}>
        <TouchableOpacity style={styles.overlay} onPress={handleOnPress}/>
        <View style={styles.container}>
          <Image style={styles.icon} source={icon} />
          <View style={styles.subContainer}>
            <View style={styles.wreckerContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.message}>{description}</Text>
            </View>
            {progress && (
              <View style={styles.loadingContainer}>
                <Text style={styles.percentageText}>{progress}%</Text>
                <ASLoadingBar loadingLevel={progress} />
              </View>
            )}
          </View>
        </View>
      </Modal>
  )
}

export default ASModal
