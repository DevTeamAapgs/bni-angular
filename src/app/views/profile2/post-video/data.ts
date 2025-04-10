type PostVideoType = {
  image: string
  duration: string
  time_posted: string
  avatar: string
  uploader: string
  views: string
  title: string
  link: string
  uploader_verified?: boolean
}

export const postVideoData: PostVideoType[] = [
  {
    image: 'assets/images/post/16by9/large/11.jpg',
    duration: '10:20',
    time_posted: '1 min ago',
    avatar: 'assets/images/avatar/01.jpg',
    uploader: 'Frances Guerrero',
    views: '156.9K',
    title: 'New movie trailers (2021 - 2022) September',
    link: '/pages/post-video-details',
  },
  {
    image: 'assets/images/post/16by9/large/12.jpg',
    duration: '05:10',
    time_posted: '25 min ago',
    avatar: 'assets/images/avatar/02.jpg',
    uploader: 'Lori Ferguson',
    uploader_verified: true,
    views: '156.9K',
    title: 'Learn web development as an absolute beginner',
    link: '/pages/post-video-details',
  },
  {
    image: 'assets/images/post/16by9/large/13.jpg',
    duration: '03:40',
    time_posted: '50 min ago',
    avatar: 'assets/images/avatar/03.jpg',
    uploader: 'Louis Crawford',
    views: '156.9K',
    title: 'Python tutorial - Python for beginners [full course]',
    link: '/pages/post-video-details',
  },
  {
    image: 'assets/images/post/16by9/large/14.jpg',
    duration: '06:12',
    time_posted: '1 week ago',
    avatar: 'assets/images/avatar/04.jpg',
    uploader: 'Larry Lawson',
    views: '156.9K',
    title: 'One of the greatest speeches ever | Steve Jobs',
    link: '/pages/post-video-details',
  },
  {
    image: 'assets/images/post/16by9/large/15.jpg',
    duration: '03:45',
    time_posted: '2 week ago',
    avatar: 'assets/images/avatar/05.jpg',
    uploader: 'Joan Wallace',
    views: '156.9K',
    title: 'A trading platform - an easy start in trading',
    link: '/pages/post-video-details',
  },
]
