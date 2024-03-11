
export const getTimeInfo = (timeOfCreation: number): string => {
  const currentTimestamp = Date.now();
  const difference = currentTimestamp - timeOfCreation;

  const secondsDifference = Math.floor(difference / 1000);
  let timeInfo:string = ''

  if (secondsDifference < 60) {
    timeInfo =  `${secondsDifference}s`;
  } else if (secondsDifference < 3600) {
    timeInfo  = `${Math.floor(secondsDifference / 60)}min`;
  } else if (secondsDifference < 86400) {
    timeInfo =`${Math.floor(secondsDifference / 3600)}h`;
  } else if (secondsDifference < 604800) {
    timeInfo = `${Math.floor(secondsDifference / 86400)}d`;
  } else if (secondsDifference < 2592000) {
    timeInfo = `${Math.floor(secondsDifference / 604800)}w`;
  } else if (secondsDifference < 31536000) {
    timeInfo = `${Math.floor(secondsDifference / 2592000)}mo`;
  } else {
    timeInfo = `${Math.floor(secondsDifference / 31536000)}y`;
  }
  return timeInfo
};