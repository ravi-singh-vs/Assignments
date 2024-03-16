import React, { useState } from 'react'
import { Text, Image, ImageSourcePropType, StyleSheet,View, TouchableOpacity, Alert } from 'react-native'
import { Spacing } from '../../../theme/spacing'
import { Typography } from '../../../theme/typography'
import { COLORS } from '../../../theme/colors'
import ASModal from '../../../components/modal/ASModal'

interface IProfileNavigationProps {
  title: string
  arrowRight: ImageSourcePropType
}

const ASProfileNavigation = ({ title, arrowRight }: IProfileNavigationProps) => {
    const [showModal,setShowModal]=useState(false);

  const handleOnPress = () => {
    // Alert.alert('onPress:-use WebView')
    setShowModal(true);
  }

  

  return (
    <View>
    <ASModal showModal={showModal} setShowModal={setShowModal}/>
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <Text style={styles.text}>{title}</Text>
      <Image style={styles.icon} source={arrowRight} />
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderColor: COLORS.primary['100'],
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.space_8,
    paddingVertical: Spacing.space_20,
  },
  icon: {
    height: Spacing.space_16,
    width: Spacing.space_16,
  },
  text: {
    color: COLORS.neutral['700'],
    fontFamily: Typography.primary['bold'],
    fontSize: Spacing.space_16,
    lineHeight: Spacing.space_24,
  },
})

export default ASProfileNavigation
