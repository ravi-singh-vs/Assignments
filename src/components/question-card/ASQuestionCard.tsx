import React, { Dispatch } from 'react'
import { View, Text, TextInput, ViewStyle, TouchableOpacity } from 'react-native'

import { QUESTIONS_DATA } from '../../constants/activity-constants'

import { styles } from './asQuestionCard-styles'

interface IASQuestionCardProps {
  input: string
  setInput: Dispatch<React.SetStateAction<string>>
  currentQuestionNumber: number
  handleNext: () => void
  handlePrevious: () => void
  handleSubmit: () => void
}

const ASQuestionCard = (props: IASQuestionCardProps) => {
  const { input, setInput, currentQuestionNumber, handleNext, handlePrevious, handleSubmit } = props

  const renderButton = (style: ViewStyle, onPress: () => void, label: string) => {
    return (
      <TouchableOpacity
        style={[style, { opacity: label !== 'Previous' && !input?.trim() ? 0.3 : 1 }]}
        disabled={label !== 'Previous' && !input?.trim()}
        onPress={onPress}>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>{QUESTIONS_DATA[currentQuestionNumber]}</Text>
        <TextInput
          onChangeText={text => setInput(text)}
          value={input}
          style={styles.inputField}
          multiline
          numberOfLines={15}
          placeholder="Enter your response ..."
        />
      </View>
      <View style={styles.buttonContainer}>
        {currentQuestionNumber > 0 &&
          renderButton(styles.previousButton, handlePrevious, 'Previous')}
        {currentQuestionNumber < QUESTIONS_DATA.length - 1
          ? renderButton(styles.nextButton, handleNext, 'Next')
          : renderButton(styles.submitButton, handleSubmit, 'Submit')}
      </View>
    </View>
  )
}

export default ASQuestionCard
