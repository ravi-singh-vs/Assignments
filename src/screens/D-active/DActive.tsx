import {FlatList, Image, Text, View} from 'react-native';
import DActiveCard from '../../components/D-active-card/DActiveCard';
import { styles } from './D-active-styles';
import { useEffect, useState } from 'react';
import { getData } from '../../services/get-data';
import Loader from '../../components/loader/Loader';
import Error from '../../components/error/Error';
import { DActiveDataType } from '../../types/general-types';


const arrowIcon= require('../../assets/icons/arrow.png');

const DActive = () => {
  const [DActiveData ,setDActiveData] = useState<DActiveDataType[]>([]);
  const [loading,setLoading] = useState<boolean>(true);
  const [error,setError] = useState<string>('');

  const getDActiveData  = async()=>{
    
    const res = await getData('https://ravi-singh-vs.github.io/api/dactive.json');
    if(res.success){
      setDActiveData(res.data);
    }
    else{
      setError('Some error occured')
    }
    setLoading(false)
  }
  useEffect(()=>{
    getDActiveData();
  },[])
  return (
    <>
      <View style={styles.header}>
        <Image source={arrowIcon} style={styles.icon} />
        <Text style={styles.title}>D-active</Text>
        <Image source={arrowIcon} style={styles.icon} />
      </View>
      <View style={styles.container}>
        { 
          loading  ? <Loader/>: 
          (
            error ? <Error error={error}/> :
            (
              <FlatList
              showsVerticalScrollIndicator={false}
              data={DActiveData}
              renderItem={({item} : {item :DActiveDataType})=><DActiveCard {...item}/>}
              keyExtractor={(item : DActiveDataType)=> item.id}
              /> 
            )
          )
        }
        
      </View>
    </>
  );
};


export default DActive;
