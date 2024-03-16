import React from 'react'
import { Alert, FlatList, Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import arrowLeft from '../../assets/icons/arrow-left.png'
import arrowRight from '../../assets/icons/arrow-right.png'
import profileImage from '../../assets/images/profile-hero.png'
import ASProfileNavigation from './profile-components/ASProfileNavigation'

import { styles } from './profile-styles'

const Profile = () => {
  const data = ['Notification settings', 'Support', 'Terms & Conditions', 'Privacy Policy', 'FAQ']

  const handleBackArrowOnPress = () => {
    Alert.alert('Back Button Functionality !')
  }
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
            <ASProfileNavigation title={item} arrowRight={arrowRight}></ASProfileNavigation>
          )}
        />
      </View>
    </View>
  )
}

export default Profile
