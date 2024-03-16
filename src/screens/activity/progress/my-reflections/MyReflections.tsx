import { ImageBackground, View } from 'react-native'
import { styles } from './my-reflections'
import ASHeader from '../../../../components/header/ASHeader'

const MyReflections = () => {
  return (
    <View>
      <ImageBackground source={require('../../../../assets/images/my-reflection.png')}>
        <ASHeader
          headerTitle="My Reflections"
          backButtonImage={require('../../../../assets/icons/backGreen.png')}
          canGoToPreviousScreen = {true}
        />
      </ImageBackground>
    </View>
  )
}

export default MyReflections
