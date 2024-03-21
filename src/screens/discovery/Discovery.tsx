import React from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import WebView from 'react-native-webview'

import { ASHeader } from '../../components'
import { Spacing } from '../../theme'

import { DISCOVERY_WEBVIEW_URL } from '../../constants'

const Discovery = () => {
  return (
    <>
      <ASHeader title="Discovery" />
      <WebView
        source={{
          uri: DISCOVERY_WEBVIEW_URL,
        }}
        style={styles.container}
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
