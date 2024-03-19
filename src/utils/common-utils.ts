import {
  SECONDS_IN_DAY,
  SECONDS_IN_HOUR,
  SECONDS_IN_MINUTE,
  SECONDS_IN_MONTH,
  SECONDS_IN_WEEK,
  SECONDS_IN_YEAR,
} from '../constants/common-constants'

export const getTimeInfo = (timestamp: number) => {
  const currentTime = new Date().getTime()
  const difference = currentTime - timestamp
  const secondsDifference = Math.floor(difference / 1000)
  let timeAgo = ''

  if (secondsDifference < SECONDS_IN_MINUTE) {
    timeAgo = `${secondsDifference}s`
  } else if (secondsDifference < SECONDS_IN_HOUR) {
    timeAgo = `${Math.floor(secondsDifference / SECONDS_IN_MINUTE)}mn ago`
  } else if (secondsDifference < SECONDS_IN_DAY) {
    timeAgo = `${Math.floor(secondsDifference / SECONDS_IN_HOUR)}hr ago`
  } else if (secondsDifference < SECONDS_IN_WEEK) {
    timeAgo = `${Math.floor(secondsDifference / SECONDS_IN_DAY)}d ago`
  } else if (secondsDifference < SECONDS_IN_MONTH) {
    timeAgo = `${Math.floor(secondsDifference / SECONDS_IN_WEEK)}w ago`
  } else if (secondsDifference < SECONDS_IN_YEAR) {
    timeAgo = `${Math.floor(secondsDifference / SECONDS_IN_MONTH)}mo ago`
  } else {
    timeAgo = `${Math.floor(secondsDifference / SECONDS_IN_YEAR)}y ago`
  }
  return timeAgo
}

export const getCurrentDate = () =>{
  const date = new Date()
  const formattedDate = date
    .toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
    .replace(/ /g, '-')
  return formattedDate
}
