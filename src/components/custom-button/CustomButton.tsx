import {Text, TouchableOpacity, ViewStyle} from 'react-native';

const CustomButton = ({time, style}: {time: string; style: ViewStyle}) => {
  return (
    <TouchableOpacity>
      <Text style={style}>{time}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
