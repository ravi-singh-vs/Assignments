import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import ASPlayButton from '../play-button/ASPlayButton'
import {
  IDashboardDataType as IASDashboardCardProps,
  TDashboardCardTitle,
} from '../../types/dashboard-types'

import { DASHBOARD_LIST_DATA } from '../../constants/dashboard-constants'
import {
  ResizeMode,
  completedTickIcon,
  favouriteIcon,
  notFavouriteIcon,
} from '../../constants/common-constants'

import { styles } from './asDashboardCard-styles'

const ASDashboardCard = (props: IASDashboardCardProps) => {
  const { id, title, startingTime, endingTime, isCompleted, isFav } = props
  const [isFavourite, setIsFavourite] = useState<boolean>(Boolean(isFav))

  let titleIndex = title as TDashboardCardTitle
  const imageSrc = DASHBOARD_LIST_DATA[titleIndex].image
  const backgroundColor = DASHBOARD_LIST_DATA[titleIndex].backgroundColor

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.subContainer}>
        <View style={styles.imageContainer}>
          <Image source={imageSrc} style={styles.image} />
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.headerSubContainer}>
              <View style={styles.headerSubContainerLeft}>
                <Text style={styles.challengeText}>Challenge {id}</Text>
                {JSON.parse(isCompleted) && (
                  <Image
                    source={completedTickIcon}
                    style={styles.tickIcon}
                    resizeMode={ResizeMode.Contain}
                  />
                )}
              </View>
              <TouchableOpacity onPress={() => setIsFavourite(prev => !prev)}>
                {isFavourite ? (
                  <Image
                    source={notFavouriteIcon}
                    style={styles.favouriteIcon}
                    resizeMode={ResizeMode.Contain}
                  />
                ) : (
                  <Image
                    source={favouriteIcon}
                    style={styles.notFavouriteIcon}
                    resizeMode={ResizeMode.Contain}
                  />
                )}
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.duration}>
              {startingTime} to {endingTime}
            </Text>
            <ASPlayButton />
          </View>
        </View>
      </View>
    </View>
  )
}

export default ASDashboardCard
