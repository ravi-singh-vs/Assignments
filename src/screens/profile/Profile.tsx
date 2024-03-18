import React, { useEffect, useState } from 'react'
import {
  BackHandler,
  FlatList,
  ImageBackground,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import WebView from 'react-native-webview'

import ASProfileNavigation from '../../components/profile-navigations/ASProfileNavigation'

import ASHeader from '../../components/header/ASHeader'
import { COLORS } from '../../theme/colors'
import { ResizeMode, whiteBackButtonIcon } from '../../constants/common-constants'
import { PROFILE_NAVIGATION_DATA, ProfileIcons } from '../../constants/profile-constants'

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
    <SafeAreaView>
      <ImageBackground
        source={ProfileIcons['ProfileImage']}
        style={styles.image}
        resizeMode={ResizeMode.Cover}>
        <ASHeader
          headerTitle="Profile"
          backgroundColor="transparent"
          color={COLORS.white}
          backButtonIcon={whiteBackButtonIcon}
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
          ListEmptyComponent={() => <Text>Loading...</Text>}
        />
      </View>
    </SafeAreaView>
  )
}

export default Profile
