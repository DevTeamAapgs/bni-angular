type ProfileInfoType = {
  type: string
  icon: string
  label: string
  value: string
}

type InterestDataType = {
  title: string
  avatar: string
  followers: string
  description?: string
}

export const profileInfo: ProfileInfoType[] = [
  {
    type: 'Birthday',
    icon: 'bi bi-calendar-date',
    label: 'Born',
    value: 'October 20, 1990',
  },
  {
    type: 'Designation',
    icon: 'bi bi-briefcase',
    label: 'Designation',
    value: 'Lead Developer',
  },
  {
    type: 'Lives',
    icon: 'bi bi-geo-alt',
    label: 'Lives in',
    value: 'New Hampshire',
  },
  {
    type: 'Joined on',
    icon: 'bi bi-geo-alt',
    label: 'Joined on',
    value: 'Nov 26, 2019',
  },
  {
    type: 'Email',
    icon: 'bi bi-envelope',
    label: 'Email',
    value: 'techzaa@gmail.com',
  },
]

export const interestData: InterestDataType[] = [
  {
    title: 'Oracle',
    avatar: 'assets/images/logo/04.svg',
    followers: '7546224',
  },
  {
    title: 'Apple',
    avatar: 'assets/images/logo/13.svg',
    followers: '102B',
  },
  {
    title: 'Elon Musk',
    avatar: 'assets/images/avatar/placeholder.jpg',
    followers: '41B',
    description: 'CEO and Product Architect of Tesla, Inc',
  },
  {
    title: 'The X Factor',
    avatar: 'assets/images/events/04.jpg',
    followers: '9654',
  },
  {
    title: 'Getbootstrap',
    avatar: 'assets/images/logo/12.svg',
    followers: '8457224',
  },
]
