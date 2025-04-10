type NavItemType = {
  title: string
  routerLink: string
  badge?: {
    class: string
    count: number
  }
}

type ProfileDataType = {
  icon: string
  text: string
}

type AboutDetailType = {
  icon: string
  label: string
  value: string
}

type ExperienceType = {
  company: string
  logo: string
  email: string
  contact: string
}

type FriendDataType = {
  name: string
  avatar: string
  mutualConnections: number
  status?: boolean
}
export const navItems: NavItemType[] = [
  {
    title: 'Posts',
    routerLink: '/profile/feed',
  },
  {
    title: 'My Profile',
    routerLink: '/profile/about',
  },
  {
    title: 'Connections',
    routerLink: '/profile/connections',
    badge: {
      class: 'bg-success bg-opacity-10 text-success small',
      count: 230,
    },
  },
  {
    title: 'Company Profile',
    routerLink: '/profile/company-profile',
  },
  {
    title: 'Leads',
    routerLink: '/profile/leads',
  }
]

export const profileDetail: ProfileDataType[] = [
  {
    icon: 'bi bi-briefcase',
    text: 'Lead Developer',
  },
  {
    icon: 'bi bi-geo-alt',
    text: 'New Hampshire',
  },
  {
    icon: 'bi bi-calendar2-plus',
    text: 'Joined on Nov 26, 2019',
  },
]

export const aboutDetail: AboutDetailType[] = [
  {
    icon: 'calendar-date',
    label: 'Born',
    value: 'October 20, 1990',
  },
  {
    icon: 'building',
    label: 'Company',
    value: 'Emerald',
  },
  {
    icon: 'envelope',
    label: 'Email',
    value: 'techzaa@gmail.com',
  },
]

export const experienceItems: ExperienceType[] = [
  {
    company: 'Apple Computer, Inc.',
    logo: 'assets/images/logo/08.svg',
    email: 'apple@gmail.com',
    contact: "8874555012"
  },
  {
    company: 'Microsoft Corporation',
    logo: 'assets/images/logo/09.svg',
    email: 'microsoftcorpo@gmail.com',
    contact: "8874555012"
  },
  {
    company: 'Tata Consultancy Services',
    logo: 'assets/images/logo/10.svg',
    email: 'tcs@gmail.com',
    contact: "55587456923"
  }
]

export const friendsData: FriendDataType[] = [
  {
    name: 'Amanda Reed',
    avatar: 'assets/images/avatar/02.jpg',
    mutualConnections: 16,
    status: true,
  },
  {
    name: 'Samuel Bishop',
    avatar: 'assets/images/avatar/03.jpg',
    mutualConnections: 22,
  },
  {
    name: 'Bryan Knight',
    avatar: 'assets/images/avatar/04.jpg',
    mutualConnections: 1,
  },
  {
    name: 'Amanda Reed',
    avatar: 'assets/images/avatar/05.jpg',
    mutualConnections: 15,
  },
]
