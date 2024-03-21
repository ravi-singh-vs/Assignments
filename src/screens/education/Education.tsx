import React from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import { WebView } from 'react-native-webview'

import { ASHeader } from '../../components'
import { Spacing } from '../../theme'

import { EDUCATION_WEBVIEW_URL } from '../../constants'

const Education = () => {
  return (
    <>
      <ASHeader title="Education" />
      <WebView
        source={{
          uri: EDUCATION_WEBVIEW_URL,
        }}
        style={styles.container}
      />
    </>
  )
}

interface IStyles {
  container: ViewStyle
}

const styles: IStyles = StyleSheet.create({
  container: {
    flex: Spacing.space_1,
  },
})
export default Education
