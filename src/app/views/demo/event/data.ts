type EventType = {
  title: string
  imageUrl: string
}

type DiscoverDataType = {
  id: string
  imageUrl: string
  badge?: string
  tag: string
  title: string
  date: string
  location: string
  attendees: string[]
  count?: string
}

type DestinationType = {
  title: string
  category: string
  image: string
}

type ExploreGroupDataType = {
  title: string
  type: string
  image_background: string
  avatar: string
  members: string
  posts_per_day: number
  avatars: string[]
}
export const events: EventType[] = [
  {
    title: 'Arts & Entertainment',
    imageUrl: 'assets/images/icon/badge-outline-filled.svg',
  },
  {
    title: 'Business & Conferences',
    imageUrl: 'assets/images/icon/clipboard-outline-filled.svg',
  },
  {
    title: 'PNY E-Gaming Fest',
    imageUrl: 'assets/images/icon/home-outline-filled.svg',
  },
  {
    title: 'Events & Parties',
    imageUrl: 'assets/images/icon/clock-outline-filled.svg',
  },
  {
    title: 'Sports & Wellness',
    imageUrl: 'assets/images/icon/imac-outline-filled.svg',
  },
]

export const discoverData: DiscoverDataType[] = [
  {
    id: 'intesrest1',
    imageUrl: 'assets/images/events/01.jpg',
    badge: 'Online',
    tag: 'Spa training',
    title: 'Bone thugs-n-harmony',
    date: 'Mon, Sep 25, 2020 at 9:30 AM',
    location: 'San Francisco',
    count: '+78',
    attendees: [
      'assets/images/avatar/01.jpg',
      'assets/images/avatar/03.jpg',
      'assets/images/avatar/04.jpg',
    ],
  },
  {
    id: 'intesrest2',
    imageUrl: 'assets/images/events/02.jpg',
    badge: 'Hotel',
    tag: 'Photography Workshop',
    title: 'Decibel magazine',
    date: 'Mon, Aug 10, 2022 at 9:30 AM',
    location: 'London',
    count: '+34',
    attendees: ['assets/images/avatar/05.jpg', 'assets/images/avatar/06.jpg'],
  },
  {
    id: 'intesrest3',
    imageUrl: 'assets/images/events/03.jpg',
    badge: 'Online',
    tag: 'Conference',
    title: 'Illenium: fallen embers tour',
    date: 'Sun, Sep 23, 2022 at 12:00 PM',
    location: 'Mumbai',
    count: '+65',
    attendees: [
      'assets/images/avatar/06.jpg',
      'assets/images/avatar/07.jpeg',
      'assets/images/avatar/08.jpg',
      'assets/images/avatar/09.jpg',
    ],
  },
  {
    id: 'intesrest4',
    imageUrl: 'assets/images/events/04.jpg',
    tag: 'Live show',
    title: 'Comedy on the green',
    date: 'Fri, Oct 05, 2022 at 1:00 AM',
    location: 'Miami',
    count: '+56',
    attendees: [
      'assets/images/avatar/06.jpg',
      'assets/images/avatar/02.jpg',
      'assets/images/avatar/04.jpg',
    ],
  },
]

export const destinationData: DestinationType[] = [
  {
    title: 'California',
    category: 'Business & Conferences',
    image: 'assets/images/albums/02.jpg',
  },
  {
    title: 'Los Angeles',
    category: 'Events & Parties',
    image: 'assets/images/albums/04.jpg',
  },
  {
    title: 'London',
    category: 'Arts & Entertainment',
    image: 'assets/images/albums/05.jpg',
  },
  {
    title: 'London',
    category: 'Arts & Entertainment',
    image: 'assets/images/albums/01.jpg',
  },
]

export const exploregroupData: ExploreGroupDataType[] = [
  {
    title: 'All in the Mind',
    type: 'Private Group',
    image_background: 'assets/images/bg/01.jpg',
    avatar: 'assets/images/logo/08.svg',
    members: '32k',
    posts_per_day: 20,
    avatars: [
      'assets/images/avatar/02.jpg',
      'assets/images/avatar/03.jpg',
      'assets/images/avatar/04.jpg',
      'assets/images/avatar/05.jpg',
    ],
  },
  {
    title: 'Beauty queens',
    type: 'Public Group',
    image_background: 'assets/images/bg/02.jpg',
    avatar: 'assets/images/logo/02.svg',
    members: '23k',
    posts_per_day: 12,
    avatars: [
      'assets/images/avatar/06.jpg',
      'assets/images/avatar/07.jpeg',
      'assets/images/avatar/09.jpg',
    ],
  },
  {
    title: 'Eternal triangle',
    type: 'Public Group',
    image_background: 'assets/images/bg/03.jpg',
    avatar: 'assets/images/logo/09.svg',
    members: '45k',
    posts_per_day: 16,
    avatars: ['assets/images/avatar/11.jpg', 'assets/images/avatar/10.jpg'],
  },
]
