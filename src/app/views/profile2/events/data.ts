type EventDataType = {
  image: string
  badge?: string
  tag: string
  title: string
  date: string
  location: string
  attendees: string[]
  interested: boolean
}

export const eventsData: EventDataType[] = [
  {
    image: 'assets/images/events/01.jpg',
    badge: 'Online',
    tag: 'Spa training',
    title: 'Bone thugs-n-harmony',
    date: 'Mon, Sep 25, 2020 at 9:30 AM',
    location: 'San Francisco',
    attendees: [
      'assets/images/avatar/01.jpg',
      'assets/images/avatar/03.jpg',
      'assets/images/avatar/04.jpg',
    ],
    interested: false,
  },
  {
    image: 'assets/images/events/02.jpg',
    badge: 'Hotel',
    tag: 'Photography Workshop',
    title: 'Decibel magazine',
    date: 'Mon, Aug 10, 2022 at 9:30 AM',
    location: 'London',
    attendees: ['assets/images/avatar/05.jpg', 'assets/images/avatar/06.jpg'],
    interested: true,
  },
  {
    image: 'assets/images/events/03.jpg',
    badge: 'Online',
    tag: 'Conference',
    title: 'Illenium: fallen embers tour',
    date: 'Sun, Sep 23, 2022 at 12:00 PM',
    location: 'Mumbai',
    attendees: [
      'assets/images/avatar/06.jpg',
      'assets/images/avatar/07.jpeg',
      'assets/images/avatar/08.jpg',
      'assets/images/avatar/09.jpg',
    ],
    interested: false,
  },
  {
    image: 'assets/images/events/04.jpg',
    tag: 'Live show',
    title: 'Comedy on the green',
    date: 'Fri, Oct 05, 2022 at 1:00 AM',
    location: 'Miami',
    attendees: [
      'assets/images/avatar/06.jpg',
      'assets/images/avatar/02.jpg',
      'assets/images/avatar/04.jpg',
    ],
    interested: true,
  },
  {
    image: 'assets/images/events/05.jpg',
    badge: 'Beach',
    tag: 'Meeting',
    title: 'Beach event',
    date: 'Wen, Dec 16, 2022 at 5:00 AM',
    location: 'London',
    attendees: ['assets/images/avatar/05.jpg', 'assets/images/avatar/06.jpg'],
    interested: false,
  },
]
