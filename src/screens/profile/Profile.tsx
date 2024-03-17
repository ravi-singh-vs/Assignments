import WebView from 'react-native-webview'

import React, { useEffect, useState } from 'react'
import {
  Alert,
  BackHandler,
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import ASProfileNavigation from './profile-navigations/ASProfileNavigation'
import arrowLeft from '../../assets/icons/arrow-left.png'
import arrowRight from '../../assets/icons/arrow-right.png'
import profileImage from '../../assets/images/profile-hero.png'

import { styles } from './profile-styles'


const MyWebViewComponent = () => {
  return <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} />
}

const Profile = () => {
  const [showWebView, setShowWebView] = useState(false)
  const data = ['Notification settings', 'Support', 'Terms & Conditions', 'Privacy Policy', 'FAQ']

  const handleBackArrowOnPress = () => {
    Alert.alert('Back Button Functionality !')
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
      <ImageBackground source={profileImage} style={styles.background} resizeMode="cover">
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBackArrowOnPress}>
            <Image style={styles.icon} source={arrowLeft} />
          </TouchableOpacity>
          <Text style={styles.text}>Profile</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Rohan Sharma</Text>
          <Text style={styles.data}>rohan@gmail.com</Text>
          <Text style={styles.data}>+91 0987654321</Text>
        </View>
      </ImageBackground>

      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ASProfileNavigation
              title={item}
              setShowWebView={setShowWebView}
              arrowRight={arrowRight}></ASProfileNavigation>
          )}
        />
      </View>
    </View>
  )
}

export default Profile
