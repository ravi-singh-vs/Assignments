import { IProgressDataType } from "../types/activity-types"

export const PROGRESS_DATA: IProgressDataType[] = [
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
  Overthinker: require('../assets/icons/overthinker.png'),
  Courage: require('../assets/icons/courage.png'),
  Compassion: require('../assets/icons/compassion.png'),
  Curiosity: require('../assets/icons/curiosity.png'),
  Procrastinator: require('../assets/icons/procrastinator.png'),
  Distractor: require('../assets/icons/distractor.png'),
}

export const QUESTIONS_DATA =  [
  'Your Name ?',
  'Your Favorite Sports ? ',
  'Your Biggest Fear ?',
  'Your Biggest Strength ? ',
]

export const allReflectionsImage =require('../assets/images/all-reflections.png')


