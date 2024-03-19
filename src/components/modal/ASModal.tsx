import * as Progress from 'react-native-progress'

import React from 'react'
import { Image, ImageSourcePropType, Modal, Text, TouchableOpacity, View } from 'react-native'

import { ResizeMode } from '../../constants/common-constants'
import { Spacing } from '../../theme/spacing'
import { COLORS } from '../../theme/colors'

import { styles } from './asModal-styles'

interface IASModalProps {
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  icon?: ImageSourcePropType
  description: string
  progress?: string | null
  title: string
}

const ASModal = (props: IASModalProps) => {
  const { showModal, setShowModal, icon, description, progress = null, title } = props
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
      <TouchableOpacity style={styles.overlay} onPress={handleOnPress} />
      <View style={styles.container}>
        <Image style={styles.image} source={icon} resizeMode={ResizeMode.Contain} />
        <View style={styles.subContainer}>
          <View style={styles.wreckerContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.message}>{description}</Text>
          </View>
          {progress && (
            <View style={styles.loadingContainer}>
              <Text style={styles.percentageText}>{progress}%</Text>
              <Progress.Bar
                progress={Number(progress) / 100}
                width={Spacing.space_50}
                height={Spacing.space_12}
                color={COLORS.secondary[500]}
                style={styles.progressBar}
              />
            </View>
          )}
        </View>
      </View>
    </Modal>
  )
}

export default ASModal
