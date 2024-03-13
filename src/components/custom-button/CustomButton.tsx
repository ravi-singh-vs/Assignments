import { Text, TextStyle, TouchableOpacity } from 'react-native'

interface ICustomButtonProps {
  time: string
  style: TextStyle
}
const CustomButton = (props: ICustomButtonProps) => {
  const { time, style } = props
  return (
    <TouchableOpacity>
      <Text style={style}>{time}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
