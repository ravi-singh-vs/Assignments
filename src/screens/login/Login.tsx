import React, { useState } from 'react'
import { View, Text, TextInput, ScrollView, Alert, TouchableOpacity } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

import { Logo } from '../../assets'
import { COLORS } from '../../theme'
import { ILoginFormDataType, ILoginFormError, StackNavigatorParams } from '../../types'

import { Screens } from '../../constants'

import { styles } from './login-styles'

const Login = () => {
  const [loginFormData, setLoginFormData] = useState<ILoginFormDataType>({
    mobileNumber: '',
    password: '',
  })
  const [loginFormError, setLoginFormError] = useState<ILoginFormError>({
    mobileNumberError: '',
    passwordError: '',
  })

  const navigation = useNavigation<NativeStackNavigationProp<StackNavigatorParams>>()
  const submitHandler = () => {
    const { mobileNumber, password } = loginFormData

    if (!mobileNumber) {
      setLoginFormError(error => ({ ...error, mobileNumberError: 'Mobile Number is required' }))
    }
    if (!password) {
      setLoginFormError(error => ({ ...error, passwordError: 'Password is required' }))
    } else {
      let isError = false
      const mobileNumberRegex = /^[789]\d{9}$/

      if (!mobileNumberRegex.test(mobileNumber)) {
        isError = true
        setLoginFormError(error => ({ ...error, mobileNumberError: 'Invalid Mobile Number' }))
      }
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

      if (!passwordRegex.test(password)) {
        isError = true
        setLoginFormError(error => ({ ...error, passwordError: 'Invalid Password' }))
      }
      if (isError) return
      const log = Alert.alert('Logged In!!')
      setLoginFormData({ ...loginFormData, mobileNumber: '', password: '' })
      navigation.navigate(Screens.TabNavigator)
    }
  }

  const handlePasswordChange = (password: string) => {
    setLoginFormError(error => ({ ...error, passwordError: ' ' }))
    setLoginFormData(data => ({ ...data, password: password }))
  }
  const handleMobileNumberChange = (mobileNumber: string) => {
    setLoginFormError(error => ({ ...error, mobileNumberError: ' ' }))
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
          <Text style={styles.errorText}>{loginFormError.mobileNumberError}</Text>
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
          <Text style={styles.errorText}>{loginFormError.passwordError}</Text>
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
