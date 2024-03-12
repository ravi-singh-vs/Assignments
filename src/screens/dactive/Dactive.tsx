import {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';

import DactiveCard from '../../components/dactive-card/DactiveCard';
import {getData} from '../../services/get-data';
import {DactiveDataType} from '../../types/dactive-types';

import {API} from '../../constants/api-constants';

import {styles} from './dactive-styles';

const Dactive = () => {
  const [DActiveData, setDActiveData] = useState<DactiveDataType[]>([]);

  const getDActiveData = async () => {
    const res = await getData(API.DACTIVE_API);
    if (res.success) {
      setDActiveData(res.data);
    } else {
      console.error(res.error);
    }
  };
  useEffect(() => {
    getDActiveData();
  }, []);
  return (
    <>
      <View style={styles.header}>
        <View style={styles.icon} />
        <Text style={styles.title}>D-active</Text>
        <View style={styles.icon} />
      </View>
      <View style={styles.container}>
        {
          <FlatList
            showsVerticalScrollIndicator={false}
            data={DActiveData}
            renderItem={({item}: {item: DactiveDataType}) => (
              <DactiveCard {...item} />
            )}
            keyExtractor={(item: DactiveDataType) => item.id}
          />
        }
      </View>
    </>
  );
};

export default Dactive;
