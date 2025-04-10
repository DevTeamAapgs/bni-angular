type RelatedVideoType = {
  image: string
  duration: string
  time_posted: string
  avatar: string
  uploader: string
  uploader_verified?: boolean
  views: string
  title: string
  link: string
}

export const reletedVideo: RelatedVideoType[] = [
  {
    image: 'assets/images/post/16by9/large/11.jpg',
    duration: '10:20',
    time_posted: '1 min ago',
    avatar: 'assets/images/avatar/01.jpg',
    uploader: 'Frances Guerrero',
    uploader_verified: true,
    views: '156.9K',
    title: '8 shocking bitcoin crypto predictions for 2022',
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
    title: 'A trading platform - an easy start in trading',
    link: '/pages/post-video-details',
  },
  {
    image: 'assets/images/post/16by9/large/13.jpg',
    duration: '03:40',
    time_posted: '50 min ago',
    avatar: 'assets/images/avatar/03.jpg',
    uploader: 'Louis Crawford',
    views: '156.9K',
    title: 'One of the greatest speeches ever | Steve Jobs',
    link: '/pages/post-video-details',
  },
  {
    image: 'assets/images/post/16by9/large/14.jpg',
    duration: '06:12',
    time_posted: '1 week ago',
    avatar: 'assets/images/avatar/04.jpg',
    uploader: 'Larry Lawson',
    views: '156.9K',
    title: 'A trading platform - an easy start in trading',
    link: '/pages/post-video-details',
  },
]
