import WebView from 'react-native-webview'

import React, { useEffect, useState } from 'react'
import {
  BackHandler,
  FlatList,
  ImageBackground,
  Modal,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import ASHeader from '../../components/header/ASHeader'
import ASLoader from '../../components/loader/ASLoader'
import ASProfileNavigation from '../../components/profile-navigations/ASProfileNavigation'
import { ProfileIcons, ResizeMode, whiteBackArrowIcon } from '../../constants/common-constants'
import { PROFILE_NAVIGATION_DATA } from '../../constants/profile-constants'
import { COLORS } from '../../theme/colors'


import { styles } from './profile-styles'

const Profile = () => {
  const [showWebView, setShowWebView] = useState<boolean>(false)

  const MyWebViewComponent = () => {
    return (
      <Modal visible={true} transparent animationType="slide">
        <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }}></WebView>
        <TouchableOpacity onPress={() => setShowWebView(false)} style={styles.closeButton}>
          <Text style={styles.text}>Close</Text>
        </TouchableOpacity>
      </Modal>
    )
  }
  const handleBackButtonClick = () => {
    setShowWebView(false)
    return true
  }
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick)
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick)
    }
  }, [])

  if (showWebView) return <MyWebViewComponent />

  return (
    <View>
      <StatusBar backgroundColor={'transparent'} translucent barStyle={'light-content'} />
      <ImageBackground
        source={ProfileIcons['ProfileImage']}
        style={styles.image}
        resizeMode={ResizeMode.Cover}>
        <ASHeader
          headerTitle="Profile"
          backgroundColor="transparent"
          color={COLORS.white}
          backButtonIcon={whiteBackArrowIcon}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Rohan Sharma</Text>
          <Text style={styles.data}>rohan@gmail.com</Text>
          <Text style={styles.data}>+91 0987654321</Text>
        </View>
      </ImageBackground>

      <View style={styles.container}>
        <FlatList
          data={PROFILE_NAVIGATION_DATA}
          renderItem={({ item }) => (
            <ASProfileNavigation
              title={item}
              setShowWebView={setShowWebView}
              arrowRight={ProfileIcons['ArrowRight']}
            />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item}
          ListEmptyComponent={() => <ASLoader />}
        />
      </View>
    </View>
  )
}

export default Profile
