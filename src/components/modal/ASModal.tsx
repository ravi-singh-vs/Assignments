import React from 'react'
import { Modal, StyleSheet, View, Image, TouchableOpacity, Text, ImageSourcePropType } from 'react-native'
import ASLoadingBar from '../loading-bar/ASLoadingBar'


interface IASModalProps {
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  icon:ImageSourcePropType|null
  description:string 
  progress:string|null
  title:string
}

const ASModal = ({ showModal, setShowModal,icon,description,progress,title }: IASModalProps) => {
  const handleOnPress = () => {
    setShowModal(false)
  }
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(!showModal)
        }}>
        <TouchableOpacity style={styles.overlay} onPress={handleOnPress}></TouchableOpacity>
        <View style={styles.container}>
          {/* <Image style={styles.icon} source={icon?icon:{}} /> */}
          {icon?<Image style={styles.icon} source={icon} />:""}
          <View style={styles.subContainer}>
            <View style={styles.wrecker}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.message}>
                {description}
              </Text>
            </View>
            <View style={styles.loading}>
              <Text style={styles.percentage}>{progress?progress+"%":""}</Text>
              <ASLoadingBar loadingLevel={progress} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  container: {
    shadowColor: 'black',
    width: 325,
    height: 465,
    borderRadius: 24,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 142,
    left: 38,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 32,
    fontFamily: 'Fraunces_72pt-Bold',
    color: '#292F36',
    marginBottom: 5,
  },
  message: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 14,
    fontFamily: 'Quicksand-Medium',
    color: '#292F36',
  },
  percentage: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Fraunces_72pt-Bold',
    color: '#292F36',
  },
  subContainer: {
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  wrecker: {
    paddingVertical: 8,
  },
  loading: {
    marginHorizontal: 76,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  icon:{
    width:200,
    height:200,
    borderWidth:1
  }
})

export default ASModal
