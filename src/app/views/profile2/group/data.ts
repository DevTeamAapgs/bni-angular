type GroupDataType = {
  background_image: string
  avatar_image: string
  group_name: string
  group_link: string
  privacy: string
  icon: string
  members: string
  posts_per_day: string
  avatars: string[]
  join_grp: boolean
}

export const groupsData: GroupDataType[] = [
  {
    background_image: 'assets/images/bg/01.jpg',
    avatar_image: 'assets/images/logo/08.svg',
    group_name: 'All in the Mind',
    group_link: '/pages/group-details',
    privacy: 'Private Group',
    icon: 'bi-lock',
    members: '32k',
    posts_per_day: '20',
    avatars: [
      'assets/images/avatar/02.jpg',
      'assets/images/avatar/03.jpg',
      'assets/images/avatar/04.jpg',
      'assets/images/avatar/05.jpg',
      'assets/images/avatar/05.jpg',
    ],
    join_grp: true,
  },
  {
    background_image: 'assets/images/bg/02.jpg',
    avatar_image: 'assets/images/logo/02.svg',
    group_name: 'Beauty queens',
    group_link: '/pages/group-details',
    privacy: 'Public Group',
    icon: 'bi-globe',
    members: '23k',
    posts_per_day: '12',
    avatars: [
      'assets/images/avatar/06.jpg',
      'assets/images/avatar/09.jpg',
      'assets/images/avatar/07.jpeg',
      'assets/images/avatar/07.jpeg',
      'assets/images/avatar/07.jpeg',
    ],
    join_grp: true,
  },
  {
    background_image: 'assets/images/bg/03.jpg',
    avatar_image: 'assets/images/logo/09.svg',
    group_name: 'Eternal triangle',
    group_link: '/pages/group-details',
    privacy: 'Public Group',
    icon: 'bi-globe',
    members: '45k',
    posts_per_day: '16',
    avatars: [
      'assets/images/avatar/11.jpg',
      'assets/images/avatar/10.jpg',
      'assets/images/avatar/10.jpg',
    ],
    join_grp: false,
  },
  {
    background_image: 'assets/images/bg/04.jpg',
    avatar_image: 'assets/images/logo/10.svg',
    group_name: 'Mountain movers',
    group_link: '/pages/group-details',
    privacy: 'Private Group',
    icon: 'bi-lock',
    members: '32k',
    posts_per_day: '05',
    avatars: [
      'assets/images/avatar/10.jpg',
      'assets/images/avatar/14.jpg',
      'assets/images/avatar/13.jpg',
      'assets/images/avatar/12.jpg',
      'assets/images/avatar/11.jpg',
    ],
    join_grp: false,
  },
  {
    background_image: 'assets/images/bg/05.jpg',
    avatar_image: 'assets/images/logo/12.svg',
    group_name: 'Hard workers',
    group_link: '/pages/group-details',
    privacy: 'Private Group',
    icon: 'bi-lock',
    members: '12k',
    posts_per_day: '05',
    avatars: [
      'assets/images/avatar/08.jpg',
      'assets/images/avatar/04.jpg',
      'assets/images/avatar/01.jpg',
      'assets/images/avatar/06.jpg',
      'assets/images/avatar/06.jpg',
    ],
    join_grp: true,
  },
]
