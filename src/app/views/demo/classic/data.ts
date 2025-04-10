type lefSidebarDataType = {
  name: string
  url: string
  icon: string
}

type ContactDataType = {
  avatar: string
  name: string
  status: string
  lastSeen?: string
}

type ClassicHeaderType = {
  class: string
  icon: string
  text: string
  badge?: boolean
}

type PollOptionType = {
  id: string
  text: string
}

type PeopleDataType = {
  name: string
  avatar: string
  mutualConnections: number
}

export const lefSidebarData: lefSidebarDataType[] = [
  {
    name: 'Feed',
    url: '/profile/feed',
    icon: 'bi bi-card-checklist',
  },
  {
    name: 'Connections',
    url: '/profile/connections',
    icon: 'bi bi-people',
  },
  {
    name: 'Latest News',
    url: '/blog',
    icon: 'bi bi-newspaper',
  },
  {
    name: 'Events',
    url: '/events',
    icon: 'bi bi-calendar-event-fill',
  },
  {
    name: 'Groups',
    url: '/groups',
    icon: 'bi bi-collection-fill',
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'bi bi-bell-fill',
  },
  {
    name: 'Settings',
    url: '/settings',
    icon: 'bi bi-gear-wide-connected',
  },
  {
    name: 'Photos',
    url: '/albums',
    icon: 'bi bi-images',
  },
  {
    name: 'Celebration',
    url: '/celebration.',
    icon: 'bi bi-bookmark-heart-fill',
  },
  {
    name: 'Video',
    url: '/post-videos',
    icon: 'bi bi-camera-reels',
  },
  {
    name: 'Messaging',
    url: '/messaging',
    icon: 'bi bi-chat-left-text',
  },
]

export const contactData: ContactDataType[] = [
  {
    avatar: 'assets/images/avatar/01.jpg',
    name: 'Frances Guerrero',
    status: 'online',
  },
  {
    avatar: 'assets/images/avatar/02.jpg',
    name: 'Lori Ferguson',
    status: 'online',
  },
  {
    avatar: 'assets/images/avatar/placeholder.jpg',
    name: 'Samuel Bishop',
    status: 'offline',
  },
  {
    avatar: 'assets/images/avatar/09.jpg',
    name: 'Louis Crawford',
    status: 'online',
    lastSeen: '20sec',
  },
  {
    avatar: 'assets/images/avatar/04.jpg',
    name: 'Dennis Barrett',
    status: 'online',
  },
  {
    avatar: 'assets/images/avatar/05.jpg',
    name: 'Judy Nguyen',
    status: 'online',
  },
  {
    avatar: 'assets/images/avatar/08.jpg',
    name: 'Bryan Knight',
    status: 'offline',
  },
  {
    avatar: 'assets/images/avatar/10.jpg',
    name: 'Jacqueline Miller',
    status: 'online',
    lastSeen: '1min',
  },
  {
    avatar: 'assets/images/avatar/11.jpg',
    name: 'Amanda Reed',
    status: 'online',
    lastSeen: '3min',
  },
  {
    avatar: 'assets/images/avatar/12.jpg',
    name: 'Larry Lawson',
    status: 'online',
    lastSeen: '1hrs',
  },
]

export const classicHeader: ClassicHeaderType[] = [
  {
    class: 'nav-item',
    icon: 'bi bi-house',
    text: 'Home',
  },
  {
    class: 'nav-item dropdown',
    icon: 'bi bi-folder',
    text: 'Albums',
  },
  {
    class: 'nav-item dropdown',
    icon: 'bi bi-people',
    text: 'Groups',
  },
  {
    class: 'nav-item',
    icon: 'bi bi-chat-left',
    text: 'Messaging',
    badge: true,
  },
  {
    class: 'nav-item',
    icon: 'bi bi-bell',
    text: 'Notifications',
    badge: true,
  },
  {
    class: 'nav-item',
    icon: 'bi bi-ui-radios-grid',
    text: 'My network',
  },
]

export const pollOptions: PollOptionType[] = [
  {
    id: 'option',
    text: 'We have cybersecurity insurance coverage',
  },
  {
    id: 'option2',
    text: 'Our dedicated staff will protect us',
  },
  {
    id: 'option3',
    text: 'We give regular training for best practices',
  },
  {
    id: 'option4',
    text: 'Third-party vendor protection',
  },
]

export const peopleInfo: PeopleDataType[] = [
  {
    name: 'Amanda Reed',
    avatar: 'assets/images/avatar/09.jpg',
    mutualConnections: 50,
  },
  {
    name: 'Larry Lawson',
    avatar: 'assets/images/avatar/10.jpg',
    mutualConnections: 33,
  },
  {
    name: 'Louis Crawford',
    avatar: 'assets/images/avatar/11.jpg',
    mutualConnections: 45,
  },
  {
    name: 'Dennis Barrett',
    avatar: 'assets/images/avatar/12.jpg',
    mutualConnections: 21,
  },
]
