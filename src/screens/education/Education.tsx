import React from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import { WebView } from 'react-native-webview'

import { ASHeader, ASLoader } from '../../components'
import { Spacing } from '../../theme'

import { EDUCATION_WEBVIEW_URL } from '../../constants'

const Education = () => {
  return (
    <>
      <ASHeader title="Education" />
      <WebView
        startInLoadingState
        source={{
          uri: EDUCATION_WEBVIEW_URL,
        }}
        style={styles.container}
        renderLoading={ASLoader}
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
