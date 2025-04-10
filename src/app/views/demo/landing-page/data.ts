type MessageDataType = {
  title: string
  image: string
  description: string
}

type VideoDataType = {
  avatar: string
  message: string
  emoji: string
}

export const landingMessageData: MessageDataType[] = [
  {
    title: 'Voice and video calls',
    image: 'assets/images/elements/02.svg',
    description:
      'Place voice no arises along to. Parlors waiting so against me no. Wishing calling is warrant settled was lucky.',
  },
  {
    title: 'Auto save contacts',
    image: 'assets/images/elements/07.svg',
    description:
      'Handsome met debating sir dwelling age material. As style lived he worse dried. visitors subjects distance.',
  },
  {
    title: 'End to end encryption',
    image: 'assets/images/elements/01.svg',
    description:
      'Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had.',
  },
]

export const features: MessageDataType[] = [
  {
    title: 'Safer communities',
    image: 'assets/images/elements/03.svg',
    description:
      'Departure defective arranging rapturous did believe him all had supported simple set nature.',
  },
  {
    title: 'Genuine users',
    image: 'assets/images/elements/09.svg',
    description:
      'Satisfied conveying a dependent contented he gentleman agreeable do be warrant removed.',
  },
  {
    title: 'Stronger communities',
    image: 'assets/images/elements/06.svg',
    description:
      'Meant balls it if up doubt small purse. Required his you put the outlived answered position.',
  },
]

export const videoData: VideoDataType[] = [
  {
    avatar: 'assets/images/avatar/12.jpg',
    message: 'Happy birthday',
    emoji: '🎂',
  },
  {
    avatar: 'assets/images/avatar/10.jpg',
    message: 'New connection request',
    emoji: '🤘',
  },
  {
    avatar: 'assets/images/avatar/09.jpg',
    message: 'Congratulations',
    emoji: '🎂',
  },
]
