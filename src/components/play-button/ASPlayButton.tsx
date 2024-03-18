import React, { useState } from 'react'
import { Button, Image, Modal, TouchableOpacity, Text } from 'react-native'
import WebView from 'react-native-webview'

import { playButtonIcon } from '../../constants/common-constants'

import { styles } from './asPlayButton-styles'

const ASPlayButton = () => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <TouchableOpacity style={styles.container} onPress={() => setModalVisible(true)}>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
        transparent={true}>
        <WebView source={{ uri: 'https://youtu.be/iYM2zFP3Zn0?feature=shared' }} />
        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
          <Text style={styles.text}>Close</Text>
        </TouchableOpacity>
      </Modal>
      <Image source={playButtonIcon} style={styles.image} />
    </TouchableOpacity>
  )
}

export default ASPlayButton
