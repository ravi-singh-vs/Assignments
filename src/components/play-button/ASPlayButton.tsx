import { Image, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import WebView from 'react-native-webview'

import { styles } from './asPlayButton-styles'

const ASPlayButton = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const PLAY_BUTTON = require('../../assets/icons/audio.png')
  return (
    <TouchableOpacity style={styles.container} onPress={() => setModalVisible(true)}>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
        transparent={true}>
        <WebView source={{ uri: 'https://youtu.be/iYM2zFP3Zn0?feature=shared' }} />
      </Modal>
      <Image source={PLAY_BUTTON} style={styles.image} />
    </TouchableOpacity>
  )
}

export default ASPlayButton
