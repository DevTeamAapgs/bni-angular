type NewsDataType = {
  time: string
  title: string
  link: string
}

type FollowType = {
  name: string
  profession: string
  avatar: string
  icon: string
  status?: boolean
}
export const newsData: NewsDataType[] = [
  {
    time: '2hr',
    title: 'Ten questions you should answer truthfully',
    link: '/pages/blog-details',
  },
  {
    time: '3hr',
    title: 'Five unbelievable facts about money',
    link: '/pages/blog-details',
  },
  {
    time: '4hr',
    title: 'Best Pinterest Boards for learning about business',
    link: '/pages/blog-details',
  },
  {
    time: '6hr',
    title: 'Skills that you can learn from business',
    link: '/pages/blog-details',
  },
]

export const followData: FollowType[] = [
  {
    name: 'Judy Nguyen',
    profession: 'News anchor',
    avatar: 'assets/images/avatar/04.jpg',
    icon: 'fa-solid fa-plus',
  },
  {
    name: 'Amanda Reed',
    profession: 'Web Developer',
    avatar: 'assets/images/avatar/05.jpg',
    icon: 'fa-solid fa-plus',
    status: true,
  },
  {
    name: 'Billy Vasquez',
    profession: 'News anchor',
    avatar: 'assets/images/avatar/11.jpg',
    icon: 'bi bi-person-check-fill',
  },
  {
    name: 'Lori Ferguson',
    profession: 'Web Developer at Techzaa',
    avatar: 'assets/images/avatar/01.jpg',
    icon: 'fa-solid fa-plus',
  },
  {
    name: 'Carolyn Ortiz',
    profession: 'News anchor',
    avatar: 'assets/images/avatar/placeholder.jpg',
    icon: 'fa-solid fa-plus',
  },
]
