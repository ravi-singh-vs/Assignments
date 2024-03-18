
import compassion from '../assets/icons/compassion.png'
import courage from '../assets/icons/courage.png'
import curiosity from '../assets/icons/curiosity.png'
import distractor from '../assets/icons/distractor.png'
import overthinkerGrey from '../assets/icons/overthinker-grey.png'
import overthinker from '../assets/icons/overthinker.png'
import procrastinator from '../assets/icons/procrastinator.png'
import arrowRight from '../assets/icons/arrow-right.png'
import Survivng from '../assets/icons/surviving.png'
import thriving from '../assets/icons/thriving.png'

export const PROGRESS_CARD_IMAGE_SOURCE: { [key: string]: number  } = {
  Procrastinator: procrastinator,
  Overthinker: overthinker,
  Courage: courage,
  Compassion: compassion,
  Curiosity: curiosity,
  Distractor: distractor,
}

export const QUESTIONS_DATA: string[] = [
  'Your Name ?',
  'Your Favorite Sports ? ',
  'Your Biggest Fear ?',
  'Your Biggest Strength ? ',
]

export const allReflectionsImage = require('../assets/images/all-reflections.png')

export const WreckerImage : { [key: string]: number }  = {
  Procrastinator  : procrastinator,
  Overthinker :  overthinkerGrey,
  Courage : courage,
  Compassion : compassion,
  Curiosity : curiosity,
  Distractor : distractor,
}

export enum ScoreCardIcons {
  Surviving = Survivng,
  Thriving = thriving,
}

export enum ViewAllWreckers {
  ArrowRight = arrowRight,
  Distractor = distractor,
}
