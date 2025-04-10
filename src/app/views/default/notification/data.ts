interface Actions {
  accept?: string
  delete?: string
  wish?: string
  review?: string
  congratulate?: string
}

interface NotificationType {
  avatar?: string
  text?: string
  name?: string
  message: string
  actions?: Actions
  time: string
  active?: boolean
}

interface Notifications {
  notifications: Notification[]
}

export const notifications: NotificationType[] = [
  {
    avatar: 'assets/images/avatar/01.jpg',
    name: 'Judy Nguyen',
    message: 'sent you a friend request.',
    actions: {
      accept: 'Accept',
      delete: 'Delete',
    },
    time: 'Just now',
  },
  {
    avatar: 'assets/images/avatar/02.jpg',
    name: 'Amanda Reed',
    message: 'Wish Amanda Reed a happy birthday (Nov 12)',
    actions: {
      wish: 'Say happy birthday 🎂',
    },
    time: 'Just now',
  },
  {
    text: 'WB',
    message: 'Techzaa has 15 likes and 1 new activity',
    time: '2 min',
  },
  {
    text: 'WB',
    message:
      'Bootstrap in the news: The search giant’s parent company, Alphabet, just joined an exclusive club of tech stocks.',
    time: '8 min',
  },
  {
    avatar: 'assets/images/avatar/03.jpg',
    name: 'Samuel Bishop',
    message:
      'You have a Connection! Samuel Bishop joined project Blogzine blog theme',
    time: '20 min',
  },
  {
    avatar: 'assets/images/avatar/04.jpg',
    message: 'You have a Payout! Techzaa LLC has sent you $1205 USD',
    time: '3 hrs',
    active: true,
  },
  {
    avatar: 'assets/images/logo/08.svg',
    message:
      'Order cancelled: #23685. Order #23685 belonging to Amanda Reed has been cancelled',
    actions: {
      review: 'Review order',
    },
    time: '5 hrs',
    active: true,
  },
  {
    avatar: 'assets/images/avatar/07.jpeg',
    message:
      'Congratulate Joan Wallace for graduating from Microverse university',
    actions: {
      congratulate: 'Say congrats',
    },
    time: '5 hrs',
    active: true,
  },
]
