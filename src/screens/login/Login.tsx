import React, { useState } from 'react'
import { View, Text, TextInput, ScrollView, Alert, TouchableOpacity } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

import { Logo } from '../../assets'
import { COLORS } from '../../theme'
import { StackNavigatorParams } from '../../types'

import { Screens } from '../../constants'

import { styles } from './login-styles'

interface ILoginFormDataType {
  mobileNumber: string
  password: string
}
interface ILoginFormError {
  mobileNumberError: boolean
  passwordError: boolean
}
const Login = () => {
  const [loginFormData, setLoginFormData] = useState<ILoginFormDataType>({
    mobileNumber: '',
    password: '',
  })
  const [error, setError] = useState<ILoginFormError>({
    mobileNumberError: false,
    passwordError: false,
  })

  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorParams>>()
  const submitHandler = () => {
    const { mobileNumber, password } = loginFormData
    const numberRegex = /^[789]\d{9}$/

    let isError = false
    if (!numberRegex.test(mobileNumber)) {
      isError = true
      setError(error => ({ ...error, mobileNumberError: true }))
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*[^A-Za-z0-9]).+$/
    if (!passwordRegex.test(password)) {
      isError = true
      console.log('hererereerer')
      setError(error => ({ ...error, passwordError: true }))
    }
    if (isError) return

    Alert.alert('Submitted!!')
    navigation.navigate(Screens.TabNavigator)
    setLoginFormData({ ...loginFormData, mobileNumber: '', password: '' })
  }

  const handlePasswordChange = (password: string) => {
    setError(error => ({ ...error, passwordError: false }))
    setLoginFormData(data => ({ ...data, password: password }))
  }
  const handleMobileNumberChange = (mobileNumber: string) => {
    setError(error => ({ ...error, mobileNumberError: false }))
    setLoginFormData(data => ({ ...data, mobileNumber: mobileNumber }))
  }

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.subContainer}>
        <Logo />
        <Text style={styles.title}>COVSTATS</Text>
      </View>
      <View style={styles.loginForm}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputFieldLabel}>
            Mobile Number <Text style={styles.mandatoryLabel}>*</Text>
          </Text>
          <TextInput
            onChangeText={mobileNumber => handleMobileNumberChange(mobileNumber)}
            value={String(loginFormData.mobileNumber)}
            keyboardType="phone-pad"
            placeholder="Enter your mobile number"
            placeholderTextColor={COLORS.neutral[100]}
            style={styles.inputField}
          />
          <Text style={styles.errorText}>
            {error.mobileNumberError ? 'Invalid Mobile Number' : ' '}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputFieldLabel}>
            Password <Text style={styles.mandatoryLabel}>*</Text>
          </Text>
          <TextInput
            onChangeText={password => handlePasswordChange(password)}
            value={String(loginFormData.password)}
            secureTextEntry
            placeholder="Enter your password"
            placeholderTextColor={COLORS.neutral[100]}
            style={styles.inputField}
          />
          <Text style={styles.errorText}>{error.passwordError ? 'Invalid Password' : ' '}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={submitHandler}>
          <Text style={styles.label}>
            {loginFormData.mobileNumber.trim() && loginFormData.password.trim()
              ? 'Submit'
              : 'Sign in with Google'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Login
