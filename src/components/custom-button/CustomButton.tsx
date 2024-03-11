import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({time, style}: {time: number; style: any}) => {
  return (
    <TouchableOpacity>
      <Text style={style}>
        {time}min
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
