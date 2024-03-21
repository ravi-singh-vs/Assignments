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
  mobileNumberError: string
  passwordError: string
}
const Login = () => {
  const [loginFormData, setLoginFormData] = useState<ILoginFormDataType>({
    mobileNumber: '',
    password: '',
  })
  const [error, setError] = useState<ILoginFormError>({
    mobileNumberError: '',
    passwordError: '',
  })

  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorParams>>()
  const submitHandler = () => {
    const { mobileNumber, password } = loginFormData

    if (!mobileNumber) {
      setError(error => ({ ...error, mobileNumberError: 'Mobile Number is required' }))
    }
    if (!password) {
      setError(error => ({ ...error, passwordError: 'Password is required' }))
    } else {
      let isError = false
      const mobileNumberRegex = /^[789]\d{9}$/

      if (!mobileNumberRegex.test(mobileNumber)) {
        isError = true
        setError(error => ({ ...error, mobileNumberError: 'Invalid Mobile Number' }))
      }
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

      if (!passwordRegex.test(password)) {
        isError = true
        setError(error => ({ ...error, passwordError: 'Invalid Password' }))
      }
      if (isError) return
      Alert.alert('Submitted!!')
      setLoginFormData({ ...loginFormData, mobileNumber: '', password: '' })
      navigation.navigate(Screens.TabNavigator)
    }
  }

  const handlePasswordChange = (password: string) => {
    setError(error => ({ ...error, passwordError: ' ' }))
    setLoginFormData(data => ({ ...data, password: password }))
  }
  const handleMobileNumberChange = (mobileNumber: string) => {
    setError(error => ({ ...error, mobileNumberError: ' ' }))
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
          <Text style={styles.errorText}>{error.mobileNumberError}</Text>
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
          <Text style={styles.errorText}>{error.passwordError}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={submitHandler}>
          <Text style={styles.label}>
            {loginFormData.mobileNumber.trim() || loginFormData.password.trim()
              ? 'Submit'
              : 'Sign in with Google'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Login
