import React from 'react'
import {StyleSheet, View} from 'react-native'

const ASLoadingBar=({loadingLevel})=>{
    return (
        <View style={styles.outerContainer}>
            <View style={[styles.innerContainer,{width:`${loadingLevel}%`}]}></View>
        </View>
    )
}

const styles=StyleSheet.create({
    outerContainer:{
        width:48,
        height:12,
        borderRadius:2,
        backgroundColor:'#F7AACE',

    },
    innerContainer:{
        height:12,
        borderRadius:2,
        backgroundColor:'#E84C8D',
    }
})

export default ASLoadingBar