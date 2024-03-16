import React, { useState } from 'react'
import { View,Text, StyleSheet ,Image, Pressable, ImageSourcePropType} from 'react-native'

import ASLoadingBar from '../loading-bar/ASLoadingBar'
import { Typography } from '../../theme/typography'

import procrastinator from '../../assets/icons/procrastinator.png'
import overthinker from '../../assets/icons/overthinker-grey.png'
import courage from '../../assets/icons/courage.png'
import compassion from '../../assets/icons/compassion.png'
import curiosity from '../../assets/icons/curiosity.png'
import distractor from '../../assets/icons/distractor.png'
import ASModal from '../modal/ASModal'


interface IASTopWreckerCardProps {
    image: string;
    percent: string;
    title: string;
    description:string
  }


const ASTopWreckerCard = ({image,percent,title,description}:IASTopWreckerCardProps) => {

    const [showModal,setShowModal]=useState(false);
    
    const wreckerImage:any={
        Procrastinator:procrastinator,
        Overthinker:overthinker,
        Courage:courage,
        Compassion:compassion,
        Curiosity:curiosity,
        Distractor:distractor
        
    }
    const handleCardPress=()=>{
        setShowModal(true);
    }
    
  return (
    <Pressable style={styles.container} onPress={handleCardPress}>
        <ASModal showModal={showModal} setShowModal={setShowModal} icon={wreckerImage[image]} progress={percent} description={description} title={title}/>
        <Image style={styles.icon} source={wreckerImage[image]}/>
        <Text style={[styles.text,{fontFamily:Typography.secondary['bold']}]}>{percent}%</Text>
        <ASLoadingBar loadingLevel={percent}/>
        <Text style={[styles.text,{fontFamily:Typography.primary['bold']}]}>{title}</Text>
    </Pressable>
  )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'space-between',
        height:150
    },
    icon:{
        width:75,
        height:75,
        borderRadius:60,
        backgroundColor:'white',
    },
    text:{
        fontSize:14,
        lineHeight:21,
        color:'white'
    }
})

export default ASTopWreckerCard