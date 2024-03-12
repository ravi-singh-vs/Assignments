export const getTimeInfo = (timeOfCreation: number): string => {
  const currentTimestamp = Date.now();
  const difference = currentTimestamp - timeOfCreation;

  const SECONDS_IN_MINUTE = 60;
  const SECONDS_IN_HOUR = 3600;
  const SECONDS_IN_DAY = 86400;
  const SECONDS_IN_WEEK = 604800;
  const SECONDS_IN_MONTH = 2592000;
  const SECONDS_IN_YEAR = 31536000;

  const secondsDifference = Math.floor(difference / 1000);
  let timeInfo: string = '';

  if (secondsDifference < SECONDS_IN_MINUTE) {
    timeInfo = `${secondsDifference}s`;
  } else if (secondsDifference < SECONDS_IN_HOUR) {
    timeInfo = `${Math.floor(secondsDifference / SECONDS_IN_MINUTE)}min`;
  } else if (secondsDifference < SECONDS_IN_DAY) {
    timeInfo = `${Math.floor(secondsDifference / SECONDS_IN_HOUR)}h`;
  } else if (secondsDifference < SECONDS_IN_WEEK) {
    timeInfo = `${Math.floor(secondsDifference / SECONDS_IN_DAY)}d`;
  } else if (secondsDifference < SECONDS_IN_MONTH) {
    timeInfo = `${Math.floor(secondsDifference / SECONDS_IN_WEEK)}w`;
  } else if (secondsDifference < SECONDS_IN_YEAR) {
    timeInfo = `${Math.floor(secondsDifference / SECONDS_IN_MONTH)}mo`;
  } else {
    timeInfo = `${Math.floor(secondsDifference / SECONDS_IN_YEAR)}y`;
  }
  return timeInfo;
};
