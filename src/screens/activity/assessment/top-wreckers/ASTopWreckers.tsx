import React, { useState } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Typography } from '../../../../theme/typography'
import ASTopWreckerCard from '../../../../components/top-wrecker-card/ASTopWreckerCard'
import arrowRight from '../../../../assets/icons/arrow-right.png'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ASModal from '../../../../components/modal/ASModal'

interface IWrecker {
  id: string
  title: string
  progress: string,
  description:string
}

interface IASTopWreckersProps {
  wreckers: IWrecker[]
}

const ASTopWreckers = ({ wreckers}: IASTopWreckersProps) => {
  // const [showModal,setShowModal]=useState(false);

  const handleAllWreckerPress=()=>{
    // setShowModal(true);
    // alert("mnbcdjksb")
  }
  return (
    <View style={styles.container}>
      {/* <ASModal showModal={true} setShowModal={setShowModal} icon={null} progress={null} description="description" title="title"/> */}
      <Text style={styles.text}>Your Top Wreckers</Text>
      <View style={styles.wreckerContainer}>
        {wreckers.map(item => {
          return (
            <ASTopWreckerCard
            key={item.id}
            image={item.title}
            percent={item.progress}
            title={item.title}
            description={item.description}
            />
            )
          })}
      </View>
      <TouchableOpacity style={styles.subContainer} onPress={handleAllWreckerPress}>
        <Text style={styles.allWreckerText}>View All Wreckers</Text>
        <Image style={styles.icon} source={arrowRight} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    marginVertical: 28,
    backgroundColor: '#176E6D',
  },

  wreckerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 18,
  },
  text: {
    fontFamily: Typography.secondary['bold'],
    fontSize: 20,
    lineHeight: 25.2,
    textAlign: 'center',
    color: 'white',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 12,
    height: 12,
    marginHorizontal: 4,
    marginTop: 2,
  },
  allWreckerText: {
    fontFamily: Typography.primary['bold'],
    fontSize: 14,
    color: 'white',
  },
})

export default ASTopWreckers
