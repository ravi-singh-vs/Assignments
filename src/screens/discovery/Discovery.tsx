import React from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import WebView from 'react-native-webview'

import { ASHeader, ASLoader } from '../../components'
import { Spacing } from '../../theme'

import { DISCOVERY_WEBVIEW_URL } from '../../constants'

const Discovery = () => {
  return (
    <>
      <ASHeader title="Discovery" />
      <WebView
        startInLoadingState
        source={{
          uri: DISCOVERY_WEBVIEW_URL,
        }}
        style={styles.container}
        renderLoading={ASLoader}
      />
    </>
  )
}
export default Discovery

interface IStyles {
  container: ViewStyle
}

const styles: IStyles = StyleSheet.create({
  container: {
    flex: Spacing.space_1,
  },
})
