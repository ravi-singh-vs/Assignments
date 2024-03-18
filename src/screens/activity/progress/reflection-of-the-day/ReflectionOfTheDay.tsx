import React, { useState, useEffect } from 'react'
import { Text, View, Alert, ScrollView, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as Progress from 'react-native-progress'

import ASHeader from '../../../../components/header/ASHeader'
import ASQuestionCard from '../../../../components/question-card/ASQuestionCard'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { COLORS } from '../../../../theme/colors'
import { Spacing } from '../../../../theme/spacing'
import { TabNavigatorParams } from '../../../../types/tabNavigator-types'

import { QUESTIONS_DATA } from '../../../../constants/activity-constants'
import { whiteBackButtonIcon } from '../../../../constants/common-constants'

import { styles } from './relectionOfTheDay-styles'

const ReflectionOfTheDay = () => {
  const [answers, setAnswers] = useState<string[]>([])
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0)
  const [input, setInput] = useState<string>('')
  const navigation = useNavigation<BottomTabNavigationProp<TabNavigatorParams>>()

  useEffect(() => {
    if (currentQuestionNumber < answers.length) {
      setInput(answers[currentQuestionNumber])
    } else {
      setInput('')
    }
  }, [currentQuestionNumber, answers])

  const handleNext = () => {
    if (currentQuestionNumber < QUESTIONS_DATA.length - 1) {
      setAnswers(prevAnswers => {
        const newAnswers = [...prevAnswers]
        newAnswers[currentQuestionNumber] = input
        return newAnswers
      })
      setCurrentQuestionNumber(prevQuestionNumber => prevQuestionNumber + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionNumber > 0) {
      setAnswers(prevAnswers => {
        const newAnswers = [...prevAnswers]
        newAnswers[currentQuestionNumber] = input
        return newAnswers
      })
      setCurrentQuestionNumber(prevQuestionNumber => prevQuestionNumber - 1)
    }
  }

  const handleSubmit = () => {
    const newAnswers = [...answers]
    newAnswers[currentQuestionNumber] = input
    setAnswers(newAnswers)
    QUESTIONS_DATA.forEach((question, index) => {
      console.log(`Question ${index + 1}: ${question}`)
      console.log(`Answer ${index + 1}: ${newAnswers[index] || ''}`)
    })
    Alert.alert('Responses Submitted Successfully')
    navigation.goBack()
  }
  return (
    <SafeAreaView style={styles.container}>
      <ASHeader
        headerTitle="Day1"
        backButtonIcon={whiteBackButtonIcon}
        backgroundColor={COLORS.primary[600]}
        color={COLORS.white}
        canGoToPreviousScreen={true}
      />
      <KeyboardAvoidingView
        style={styles.subContainer}
        behavior="padding"
        keyboardVerticalOffset={10}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.questionBarContainer}>
            <Text style={styles.questionNumberText}>
              {currentQuestionNumber + 1} / {QUESTIONS_DATA.length}
            </Text>
            <Progress.Bar
              progress={(currentQuestionNumber + 1) / QUESTIONS_DATA.length}
              width={Spacing.space_300}
              height={Spacing.space_8}
              color={COLORS.primary[300]}
            />
          </View>
          <ASQuestionCard
            currentQuestionNumber={currentQuestionNumber}
            input={input}
            setInput={setInput}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            handleSubmit={handleSubmit}
          />
          <View style={[styles.bottomBar, styles.bottomBar1]} />
          <View style={[styles.bottomBar, styles.bottomBar2]} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ReflectionOfTheDay
