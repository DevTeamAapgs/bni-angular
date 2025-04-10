type BlogDataType = {
  image: string
  category: {
    name: string
    class: string
  }
  title: string
  link: string
  description: string
  date: string
  date_icon_class: string
}

type RecentPostType = {
  time: string
  title: string
}

type FollowDataType = {
  avatar: string
  name: string
  title: string
  icon_class: string
}

export const blogsData: BlogDataType[] = [
  {
    image: 'assets/images/post/4by3/03.jpg',
    category: {
      name: 'Lifestyle',
      class: 'danger',
    },
    title: 'Social guides the way in 2022 app performance report',
    link: '/pages/blog-details',
    description:
      'Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.',
    date: 'Jan 22, 2022',
    date_icon_class: 'bi bi-calendar-date pe-1',
  },
  {
    image: 'assets/images/post/4by3/04.jpg',
    category: {
      name: 'Sports',
      class: 'info',
    },
    title: 'Upcoming live video feed may not work how you expect',
    link: '/pages/blog-details',
    description:
      'Under folly balls, death own point now men. Match way these she avoids seeing death.',
    date: 'Mar 07, 2022',
    date_icon_class: 'bi-calendar-date',
  },
  {
    image: 'assets/images/post/4by3/05.jpg',
    category: {
      name: 'Business',
      class: 'success',
    },
    title: 'Google shares top search trends of 2022',
    link: '/pages/blog-details',
    description:
      'I think on style child of. Servants moreover in sensible it ye possible six say his.',
    date: 'Jun 17, 2022',
    date_icon_class: 'bi bi-calendar-date pe-1',
  },
  {
    image: 'assets/images/post/4by3/06.jpg',
    category: {
      name: 'Technology',
      class: 'warning',
    },
    title: 'Counts reels replies, delivering another way to tap into the video',
    link: '/pages/blog-details',
    description:
      'Placing forming nay looking old married few has. Margaret disposed of add screened rendered.',
    date: 'Nov 11, 2022',
    date_icon_class: 'bi bi-calendar-date pe-1',
  },
]

export const recentPost: RecentPostType[] = [
  {
    title: 'Ten questions you should answer truthfully',
    time: '2hr',
  },
  {
    title: 'Five unbelievable facts about money',
    time: '3hr',
  },
  {
    title: 'Best Pinterest Boards for learning about business',
    time: '4hr',
  },
  {
    title: 'Skills that you can learn from business',
    time: '6hr',
  },
]

export const followData: FollowDataType[] = [
  {
    avatar: 'assets/images/avatar/11.jpg',
    name: 'Billy Vasquez',
    title: 'News anchor',
    icon_class: 'bi bi-person-check-fill',
  },
  {
    avatar: 'assets/images/avatar/01.jpg',
    name: 'Lori Ferguson',
    title: 'Web Developer at Techzaa',
    icon_class: 'fa-solid fa-plus',
  },
  {
    avatar: 'assets/images/avatar/placeholder.jpg',
    name: 'Carolyn Ortiz',
    title: 'News anchor',
    icon_class: 'fa-solid fa-plus',
  },
]
