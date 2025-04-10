export type ChatMessage = {
  id: number
  msg: {
    isEmoji?: boolean
    text?: string
    emoji?: string
    img?: string
    isTyping?: boolean
  }
  isRead?: boolean
  isSender: boolean
  sendAt?: string
  timeStamp?: string
}

export type Chat = {
  name: string
  status?: 'online' | 'offline' | 'typing'
  statusText?: string
  image: string
  isStory: boolean
  messages: ChatMessage[]
}

export const chatMessages1: ChatMessage[] = [
  {
    id: 1,
    msg: {
      text: 'Applauded no discovery in newspaper allowance am northward😊',
    },
    sendAt: 'Jul 16, 2022, 06:15 am',
    timeStamp: '6:15 AM',
    isSender: false,
  },
  {
    id: 2,
    msg: {
      text: 'With pleasure',
    },

    isSender: true,
  },
  {
    id: 3,
    msg: {
      text: 'No visited raising gravity outward subject my cottage Mr be.',
    },
    timeStamp: '6:20 AM',
    isSender: true,
    isRead: true,
  },
  {
    id: 4,
    msg: {
      text: 'Please find the attached updated files',
    },
    timeStamp: '12:16 PM',
    isSender: false,
  },
  {
    id: 5,
    msg: {
      text: 'How promotion excellent curiosity yet attempted happiness Gay prosperous impression😮',
    },
    timeStamp: '3:22 PM',
    isSender: false,
  },

  {
    id: 6,
    msg: {
      isEmoji: true,
      text: 'Congratulations:)',
      emoji: 'assets/images/elements/14.svg',
    },
    timeStamp: '3:22 PM',
    isSender: false,
  },
  {
    id: 7,
    msg: {
      text: 'And sir dare view but over man So at within mr to simple assure Mr disposing.',
    },
    timeStamp: '5:35 PM',
    isSender: true,
    isRead: false,
  },
  {
    id: 8,
    msg: {
      img: 'assets/images/avatar/05.jpg',
    },
    timeStamp: '5:36 PM',
    isSender: true,
  },
  {
    id: 9,
    msg: {
      text: 'Traveling alteration impression 🤐 six all uncommonly Chamber hearing inhabit joy highest private.',
    },
    isSender: false,
  },
]

export const chatMessages2: ChatMessage[] = [
  {
    id: 1,
    msg: {
      text: 'Night signs creeping yielding green Seasons.',
    },
    sendAt: 'Jul 16, 2022, 06:15 am',
    timeStamp: '12:16 PM',
    isSender: false,
  },
  {
    id: 2,
    msg: {
      text: 'Creeping earth under was You are without which image.',
    },
    timeStamp: '3:22 PM',
    isSender: true,
    isRead: true,
  },
  {
    id: 3,
    msg: {
      text: 'Thank you for prompt response',
    },
    timeStamp: '3:22 PM',
    isSender: false,
  },
  {
    id: 4,
    msg: {
      text: `Won't that fish him whose won't also.`,
    },
    timeStamp: '5:37 PM',
    isSender: false,
  },
  {
    id: 5,
    msg: {
      text: 'Moving living second beast Over fish place beast.',
    },
    timeStamp: '5:36 PM',
    isSender: true,
  },
  {
    id: 7,
    msg: {
      text: `Thing they're fruit together forth day.`,
    },

    isSender: false,
  },
  {
    id: 8,
    msg: {
      text: 'Fly replenish third to said void life night yielding for heaven give blessed spirit',
    },
    timeStamp: '5:37 PM',
    isSender: false,
  },
]

export const chatMessages3: ChatMessage[] = [
  {
    id: 1,
    msg: {
      text: 'Hello',
    },
    sendAt: 'Jul 16, 2022, 06:15 am',
    isSender: false,
  },
  {
    id: 2,
    msg: {
      text: 'Made and For saw Creepeth place shall Moving.',
    },
    isSender: true,
    isRead: true,
  },
  {
    id: 3,
    msg: {
      text: 'Thank you for prompt response',
    },
    isSender: false,
  },
]

export const chats: Chat[] = [
  {
    name: 'Frances Guerrero',
    image: 'assets/images/avatar/10.jpg',
    status: 'online',
    isStory: true,
    messages: chatMessages1,
  },
  {
    name: 'Carolyn Ortiz',
    image: 'assets/images/avatar/11.jpg',
    status: 'offline',
    isStory: false,
    messages: chatMessages2,
  },
  {
    name: 'Billy Vasquez',
    image: 'assets/images/avatar/12.jpg',
    isStory: true,
    statusText: 'Last active 2 days',
    messages: chatMessages3,
  },
  {
    name: 'Arthur Tyson',
    image: 'assets/images/avatar/13.jpg',
    isStory: true,
    statusText: 'Last active a month',
    messages: chatMessages2.splice(0, 2),
  },
  {
    name: 'Terry Small',
    image: 'assets/images/avatar/14.jpg',
    status: 'typing',
    isStory: true,
    messages: chatMessages1.splice(0, 5),
  },
  {
    name: 'Jessie Dominguez',
    image: 'assets/images/avatar/09.jpg',
    status: 'offline',
    isStory: false,
    messages: chatMessages3.splice(0, 2),
  },
]
