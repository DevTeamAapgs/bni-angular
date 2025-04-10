type SuggestStoryType = {
  image: string
  name: string
}
type MessageType = {
  id: string
  avatar: string | string[]
  status?: 'online' | 'offline'
  name: string
  message: string
  time: string
  story?: boolean
}
export const suggestStories: SuggestStoryType[] = [
  {
    image: 'assets/images/post/1by1/02.jpg',
    name: 'Judy Nguyen',
  },
  {
    image: 'assets/images/post/1by1/03.jpg',
    name: 'Samuel Bishop',
  },
  {
    image: 'assets/images/post/1by1/04.jpg',
    name: 'Carolyn Ortiz',
  },
  {
    image: 'assets/images/post/1by1/05.jpg',
    name: 'Amanda Reed',
  },
  {
    image: 'assets/images/post/1by1/01.jpg',
    name: 'Lori Stevens',
  },
  {
    image: 'assets/images/post/1by1/06.jpg',
    name: 'Joan Wallace',
  },
]

export const messageData: MessageType[] = [
  {
    id: '1',
    avatar: 'assets/images/avatar/01.jpg',
    status: 'online',
    name: 'Frances Guerrero',
    message: 'Frances sent a photo.',
    time: 'Just now',
  },
  {
    id: '2',
    avatar: 'assets/images/avatar/02.jpg',
    status: 'online',
    name: 'Lori Ferguson',
    message: 'You missed a call form Carolyn🤙',
    time: '1min',
  },
  {
    id: '3',
    avatar: 'assets/images/avatar/placeholder.jpg',
    status: 'offline',
    name: 'Samuel Bishop',
    message: 'Day sweetness why cordially 😊',
    time: '2min',
  },
  {
    id: '4',
    avatar: 'assets/images/avatar/04.jpg',
    name: 'Dennis Barrett',
    message: 'Happy birthday🎂',
    time: '10min',
  },
  {
    id: '5',
    avatar: 'assets/images/avatar/05.jpg',
    status: 'online',
    name: 'Judy Nguyen',
    message: 'Thank you!',
    time: '2hrs',
    story: true,
  },
  {
    id: '6',
    avatar: 'assets/images/avatar/06.jpg',
    status: 'online',
    name: 'Carolyn Ortiz',
    message: 'Greetings from Techzaa.',
    time: '1 day',
  },
  {
    id: '7',
    avatar: [
      'assets/images/avatar/06.jpg',
      'assets/images/avatar/07.jpeg',
      'assets/images/avatar/08.jpg',
      'assets/images/avatar/09.jpg',
    ],
    name: 'Frances, Lori, Amanda, Lawson',
    message: 'Btw are you looking for job change?',
    time: '4 day',
  },
  {
    id: '8',
    avatar: 'assets/images/avatar/08.jpg',
    status: 'offline',
    name: 'Bryan Knight',
    message: 'if you are available to discuss🙄',
    time: '6 day',
  },
  {
    id: '9',
    avatar: 'assets/images/avatar/09.jpg',
    name: 'Louis Crawford',
    message: '🙌Congrats on your work anniversary!',
    time: '1 day',
  },
  {
    id: '10',
    avatar: 'assets/images/avatar/10.jpg',
    status: 'online',
    name: 'Jacqueline Miller',
    message: 'No sorry, Thanks.',
    time: '15, dec',
  },
  {
    id: '11',
    avatar: 'assets/images/avatar/11.jpg',
    name: 'Amanda Reed',
    message: 'Interested can share CV at.',
    time: '18, dec',
  },
  {
    id: '12',
    avatar: 'assets/images/avatar/12.jpg',
    status: 'online',
    name: 'Larry Lawson',
    message: "Hope you're doing well and Safe.",
    time: '20, dec',
  },
]
