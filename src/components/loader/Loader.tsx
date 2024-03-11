import { ActivityIndicator, Platform } from 'react-native'
import React from 'react'

const Loader = () => {
  return (
    <ActivityIndicator size={Platform.OS==="android" ? 60 : 'large'}/>
  )
}

export default Loader
