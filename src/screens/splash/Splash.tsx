import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Logo } from '../../assets'
import { readDataInAsyncStorage } from '../../utils'
import { StackNavigatorParams } from '../../types'

import { Screens } from '../../constants'

import { styles } from './splash-styles'

const Splash = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorParams>>()

  const getDataFromAsyncStorage = async () => {
    try {
      setTimeout(async () => {
        const check = await readDataInAsyncStorage('IS_ONBOARDED')
        if (check === 'true') {
          navigation.navigate(Screens.Login)
        } else {
          navigation.navigate(Screens.Onboarding)
        }
      }, 3000)
    } catch (error) {
      console.error('Error', error)
    }
  }

  useEffect(() => {
    getDataFromAsyncStorage()
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Logo />
        <Text style={styles.title}>COVSTATS</Text>
      </View>
      <Text style={styles.text}>&copy; Copyright COVSTATS 2020. All rights reserved</Text>
    </View>
  )
}

export default Splash
