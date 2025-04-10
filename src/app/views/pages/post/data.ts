type CovidDataType = {
  image: string
  link: string
  description: string
  likes: number
  comments: number
  shares: number
}

type PostDataType = {
  content: string
  reactions: {
    thumbs_up: number
    comments: number
    shares: number
  }
  avatar?: string
  type?: string
}

export const covidData: CovidDataType[] = [
  {
    image: 'assets/images/post/16by9/09.jpg',
    link: '/pages/post-details',
    description:
      'Speedily say has suitable disposal add boy. On forth doubt miles of child.',
    likes: 58,
    comments: 23,
    shares: 15,
  },
  {
    image: 'assets/images/post/16by9/10.jpg',
    link: '/pages/post-details',
    description:
      'Passage its ten led hearted removal cordial. Preference any astonished.',
    likes: 69,
    comments: 45,
    shares: 23,
  },
  {
    image: 'assets/images/post/16by9/11.jpg',
    link: '/pages/post-details',
    description:
      'Exercise joy man children rejoiced. Yet uncommonly his ten who.',
    likes: 100,
    comments: 65,
    shares: 47,
  },
  {
    image: 'assets/images/post/16by9/12.jpg',
    link: '/pages/post-details',
    description:
      'Departure defective arranging rapturous did believe him all had supported.',
    likes: 58,
    comments: 23,
    shares: 45,
  },
]

export const postData: PostDataType[] = [
  {
    content:
      'Speedily say has suitable disposal add boy. On forth doubt miles of child.',
    reactions: {
      thumbs_up: 56,
      comments: 12,
      shares: 3,
    },
    avatar: 'assets/images/post/16by9/01.jpg',
  },
  {
    content:
      'Passage its ten led hearted removal cordial. Preference any astonished.',
    reactions: {
      thumbs_up: 23,
      comments: 10,
      shares: 2,
    },
    type: 'swiper',
  },
  {
    content: 'Exercise joy man children rejoiced. Yet uncommonly his ten who.',
    reactions: {
      thumbs_up: 102,
      comments: 65,
      shares: 40,
    },
    avatar: 'assets/images/post/16by9/03.jpg',
  },
  {
    content:
      'Luckily cheered colonel I do we attack highest enabled tried law yet.',
    reactions: {
      thumbs_up: 89,
      comments: 56,
      shares: 30,
    },
    avatar: 'assets/images/post/16by9/04.jpg',
    type: 'video',
  },
  {
    content:
      'She new course gets living within Elinor joy. she rapturous suffering concealed.',
    reactions: {
      thumbs_up: 78,
      comments: 32,
      shares: 23,
    },
    avatar: 'assets/images/post/16by9/05.jpg',
  },
  {
    content:
      'Water timed folly right aware if oh truth. imprudence attachment.',
    reactions: {
      thumbs_up: 78,
      comments: 35,
      shares: 40,
    },
    type: 'youtube',
  },
  {
    content:
      'Water timed folly right aware if oh truth. imprudence attachment.',
    reactions: {
      thumbs_up: 78,
      comments: 35,
      shares: 40,
    },
    avatar: 'assets/images/post/16by9/06.jpg',
  },
  {
    content:
      'Match way these she avoids seeing death. She who drift their fat off.',
    reactions: {
      thumbs_up: 89,
      comments: 20,
      shares: 23,
    },
    type: 'videofeed',
  },
  {
    content:
      'Ecstatic followed handsome drawings entirely Mrs one yet outweigh.',
    reactions: {
      thumbs_up: 78,
      comments: 23,
      shares: 12,
    },
    avatar: 'assets/images/post/16by9/08.jpg',
  },
  {
    content: 'Handsome met debating sir dwelling age material he worse dried.',
    reactions: {
      thumbs_up: 45,
      comments: 36,
      shares: 56,
    },
    avatar: 'assets/images/post/16by9/07.jpeg',
    type: 'audio',
  },
  {
    content:
      'Departure defective arranging rapturous did believe him all had supported. ',
    reactions: {
      thumbs_up: 88,
      comments: 25,
      shares: 30,
    },
    avatar: 'assets/images/post/16by9/14.jpg',
  },
]
