import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { setDataInAsyncStorage } from '../../utils'
import { COLORS, Spacing } from '../../theme'
import { StackNavigatorParams } from '../../types'

import { ONBOARDING_SCREEN_DATA, Screens } from '../../constants'

import { styles } from './onboarding-styles'

const Onboarding = () => {
  const [currentScreen, setCurrentScreen] = useState<number>(0)
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorParams>>()

  const Image = ONBOARDING_SCREEN_DATA[currentScreen].image

  const noOfOnboardingScreens = ONBOARDING_SCREEN_DATA.length

  const skipHandler = () => {
    setDataInAsyncStorage('IS_ONBOARDED', 'true')
    navigation.navigate(Screens.Login)
  }

  const nextHandler = () => {
    if (currentScreen === noOfOnboardingScreens - 1) {
      setDataInAsyncStorage('IS_ONBOARDED', 'true')
      navigation.navigate(Screens.Login)
    } else {
      setCurrentScreen(currentScreen => currentScreen + 1)
    }
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image width={Spacing.space_150} height={Spacing.space_235} />
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.title}>{ONBOARDING_SCREEN_DATA[currentScreen].title}</Text>
          <Text style={styles.description}>
            {ONBOARDING_SCREEN_DATA[currentScreen].description}
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={skipHandler}>
          <Text style={styles.label}>Skip</Text>
        </TouchableOpacity>
        <View style={[styles.activeScreenIndicatorContainer]}>
          {[...Array(noOfOnboardingScreens)].map((e, screenNumber) => {
            return (
              <View
                key={screenNumber}
                style={[
                  styles.activeScreenIndicator,
                  {
                    backgroundColor:
                      currentScreen === screenNumber ? COLORS.primary[50] : COLORS.neutral[10],
                  },
                ]}
              />
            )
          })}
        </View>
        <TouchableOpacity onPress={nextHandler}>
          <Text style={styles.label}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Onboarding
