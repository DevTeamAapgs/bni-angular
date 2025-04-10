type ConnectionDataType = {
  name: string
  title: string
  avatar: string
  type?:Number,
  sharedConnections?: string[]
  sharedConnectionsSummary: string
}
export const connectionsData: ConnectionDataType[] = [
  {
    name: 'Lori Ferguson',
    title: 'Full Stack Web Developer',
    type : 1,
    avatar: 'assets/images/avatar/01.jpg',
    sharedConnections: [
      'assets/images/avatar/01.jpg',
      'assets/images/avatar/02.jpg',
      'assets/images/avatar/03.jpg',
      'assets/images/avatar/04.jpg',
      'assets/images/avatar/04.jpg',
    ],
    sharedConnectionsSummary:
      'Carolyn Ortiz, Frances Guerrero, and 20 other shared connections',
  },
  {
    name: 'Carolyn Ortiz',
    type:2,
    title: 'Web Developer | Freelancer',
    avatar: 'assets/images/avatar/02.jpg',
    sharedConnections: [
      'assets/images/avatar/04.jpg',
      'assets/images/avatar/06.jpg',
      'assets/images/avatar/07.jpeg',
      'assets/images/avatar/01.jpg',
      'assets/images/avatar/02.jpg',
      'assets/images/avatar/03.jpg',
      'assets/images/avatar/04.jpg',
      'assets/images/avatar/04.jpg',
    ],
    sharedConnectionsSummary:
      'Amanda Reed, Lori Stevens, and 10 other shared connections',
  },
  {
    name: 'Lori Ferguson',
    type:3,
    title: 'Full Stack Web Developer',
    avatar: 'assets/images/avatar/03.jpg',
    sharedConnectionsSummary:
      'Joan Wallace and Larry Lawson shared connections',
  },
  {
    name: 'Lori Ferguson',
    type:4,
    title: 'Full Stack Web Developer',
    avatar: 'assets/images/avatar/04.jpg',
    sharedConnectionsSummary:
      'Samuel Bishop, Judy Nguyen, and 115 other shared connections',
  },
  {
    name: 'Lori Ferguson',
    type:1,
    title: 'Full Stack Web Developer',
    avatar: 'assets/images/avatar/05.jpg',
    sharedConnectionsSummary:
      'Bryan Knight and Billy Vasquez shared connections',
  },
]
