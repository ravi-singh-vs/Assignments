
import { IProgressDataType } from "../types/activity-types"

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

export const progressData : IProgressDataType[] = [
  {
    id: '1',
    title: 'Overthinker',
    progress: '82',
    description:
      'Mind with a tangled web of possibilities, perpetually seeking clarity amidst the chaos of thought',
  },
  {
    id: '2',
    title: 'Courage',
    progress: '62',
    description:
      'An unwavering beacon of courage, lighting the path for others with bold steps and unyielding determination',
  },
  {
    id: '3',
    title: 'Compassion',
    progress: '57',
    description:
      "A compassionate heart, the gentle force that soothes wounds and brightens souls with empathy's touch.",
  },
  {
    id: '4',
    title: 'Curiosity',
    progress: '34',
    description:
      'A curious mind, forever reaching beyond the known, seeking wisdom in the uncharted realms of knowledge.',
  },
  {
    id: '5',
    title: 'Procrastinator',
    progress: '80',
    description:
      "Delaying today's tasks for tomorrow's uncertainties, while time silently slips away.",
  },
  {
    id: '6',
    title: 'Distractor',
    progress: '50',
    description:
      'An enigmatic fusion of thoughts, emotions, and experiences, painting the canvas of existence with infinite shades of being.',
  },
]

export const PROGRESS_CARD_IMAGE_SOURCE: { [key: string]: number } = {
  Procrastinator: procrastinator,
  Overthinker: overthinker,
  Courage: courage,
  Compassion: compassion,
  Curiosity: curiosity,
  Distractor: distractor,
}

export const DACTIVE_CARD_BUTTON_TIME_DATA: number[] = [2, 4, 8]

export enum WreckerImage {
  Procrastinator= procrastinator,
  Overthinker= overthinkerGrey,
  Courage= courage,
  Compassion= compassion,
  Curiosity= curiosity,
  Distractor= distractor,
}

export enum ScoreCardIcons{
  Surviving=Survivng,
  Thriving=thriving,
}

export enum ViewAllWreckers{
  ArrowRight=arrowRight,
  Distractor=distractor
}
