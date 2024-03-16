import React from 'react'
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native'
import profileImage from '../../assets/images/profile-hero.png'
import ASProfileNavigation from './profile-components/ASProfileNavigation'
import arrowRight from '../../assets/icons/arrow-right.png'
import arrowLeft from '../../assets/icons/arrow-left.png'
import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'
import { COLORS } from '../../theme/colors'

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
            <Text style={styles.text} >Profile</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>Rohan Sharma</Text>
          <Text style={styles.data}>rohan@gmail.com</Text>
          <Text style={styles.data}>+91 0987654321</Text>
        </View>
      </ImageBackground>

      <View style={styles.subContainer}>
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
const styles = StyleSheet.create({
  background: {
    paddingBottom: Spacing.space_24,
    width: '100%',
  },
  subContainer: {
    // borderWidth: 0.2,
    marginHorizontal: Spacing.space_20,
    marginTop: Spacing.space_28,
  },
  icon: {
    height: Spacing.space_24,
    width: Spacing.space_24,
  },
  header: {
    // borderWidth:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 40,
    paddingVertical: Spacing.space_8,
  },
  text: {
      fontFamily: Typography.secondary['bold'],
      fontSize: Spacing.space_18,
      color: COLORS.white,
    lineHeight: Spacing.space_24,
    paddingHorizontal: Spacing.space_76,
    marginRight:Spacing.space_48,
  },
  info: {
    // borderWidth:1,
    marginLeft: Spacing.space_24,
    marginTop: Spacing.space_48,
  },
  name: {
    color: COLORS.white,
    fontFamily: Typography.primary['bold'],
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_28,
  },
  data: {
    color: COLORS.white,
    fontFamily: 'Quicksand-medium',
    fontSize: Spacing.space_14,
    lineHeight: Spacing.space_24,
  },
})

export default Profile
