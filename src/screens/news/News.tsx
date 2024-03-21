import React from 'react'
import { StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

import { ASHeader, ASLoader } from '../../components'

import { NEWS_WEBVIEW_URL } from '../../constants'

const News = () => {
  return (
    <>
      <ASHeader title="Education" />
      <WebView
        startInLoadingState
        source={{
          uri: NEWS_WEBVIEW_URL,
        }}
        style={styles.container}
        renderLoading={ASLoader}
      />
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
export default News
