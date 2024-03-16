import React from 'react'
import { Modal, Alert, StyleSheet ,View,Image,TouchableOpacity,Text} from 'react-native'
import distractor from '../../assets/icons/distractor.png'

const ASModal = ({ showModal, setShowModal }) => {

  const handleOnPress=()=>{
        setShowModal(false);
  }
  return (
  <View>
          <Modal
            
            animationType="fade"
            transparent={true}
            visible={showModal}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.')
              setShowModal(!showModal)
            }}
          >
            <TouchableOpacity style={styles.container} onPress={handleOnPress} >
            <View style={styles.subContainer}>
                <Image source={distractor}/>
                <View style={styles.wrecker}>
                    <View style={styles.wreckerData}>
                        <Text style={styles.title}>Distractor</Text>
                        <Text style={styles.message}>This is the message !</Text>
                    </View>
                    <View>
                        <Text style={styles.percentage}>78%</Text>
                        <Text>Loading.....</Text>
                    </View>
                </View>
            </View>
            </TouchableOpacity>

        </Modal>  

  </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"rgba(0, 0, 0, 0.4)",
        justifyContent:'center',
        alignItems:'center'
    },
    subContainer:{
        shadowColor:'black',
        width:325,
        height:465,
        borderRadius:24,
        backgroundColor:'white',
        justifyContent:'space-evenly',
        alignItems:'center'

    },
    title:{
        textAlign:'center',
        fontSize:24,
        lineHeight:32,
        fontFamily:"Fraunces_72pt-Bold",
        color:'#292F36'
    },
    message:{
        textAlign:'center',
        fontSize:14,
        lineHeight:16,
        fontFamily:"Quicksand-Medium",
        color:'#292F36'
    },
    percentage:{
        textAlign:'center',
        fontSize:14,
        lineHeight:21,
        fontFamily:"Fraunces_72pt-Bold",
        color:'#292F36'
    },
    wrecker:{
        justifyContent:'space-between',
        borderWidth:3,
        paddingVertical:10,
        paddingHorizontal:0
    },
    wreckerData:{
        borderWidth:1,
        paddingHorizontal:75,
    }
})

export default ASModal
