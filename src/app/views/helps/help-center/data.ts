type QuestionDataType = {
  text: string
}

type RecommendedToicsDataType = {
  title: string
  icon: string
  items: QuestionDataType[]
}

type ArticlesType = {
  title: string
  description: string
  votes: {
    upvotes: number
    downvotes: number
  }
}

export const questionsData: QuestionDataType[] = [
  {
    text: 'How can we help?',
  },
  {
    text: 'How to edit my Profile?',
  },
  {
    text: 'How much should I offer the sellers?',
  },
  {
    text: 'Installation Guide?',
  },
  {
    text: 'Additional Options and Services?',
  },
  {
    text: "What's are the difference between a social?",
  },
]

export const recommededTopics: RecommendedToicsDataType[] = [
  {
    title: 'Get started',
    icon: 'bi bi-emoji-smile fs-1 text-success',
    items: [
      {
        text: 'Gulp and Customization',
      },
      {
        text: 'Color Scheme and Logo Settings',
      },
      {
        text: 'Dark mode, RTL Version and Lazy Load',
      },
      {
        text: 'Sources, Credits and Changelog',
      },
      {
        text: 'Updates and Support',
      },
    ],
  },
  {
    title: 'Account Setup',
    icon: 'bi bi-layers fs-1 text-warning',
    items: [
      {
        text: 'Connecting to your Account',
      },
      {
        text: 'Edit your profile information',
      },
      {
        text: 'Connecting to other Social Media Accounts',
      },
      {
        text: 'Adding your profile picture',
      },
      {
        text: 'Describing your store',
      },
    ],
  },
  {
    title: 'Other Topics',
    icon: 'bi bi-info-circle fs-1 text-primary',
    items: [
      {
        text: 'Security & Privacy',
      },
      {
        text: 'Author, Publisher & Admin Guides',
      },
      {
        text: 'Pricing plans',
      },
      {
        text: 'Sales Tax & Regulatory Fees',
      },
      {
        text: 'Promotions & Deals',
      },
    ],
  },
]

export const articles: ArticlesType[] = [
  {
    title: 'Get started with node.js',
    description:
      'Satisfied conveying a dependent contented he gentleman agreeable do be.',
    votes: {
      upvotes: 457,
      downvotes: 1,
    },
  },
  {
    title: 'Upgrade Gulp 3 to Gulp 4 the gulpfile.js workflow',
    description: 'Required his you put the outlived answered position.',
    votes: {
      upvotes: 256,
      downvotes: 2,
    },
  },
  {
    title: '6 Reasons to use Bootstrap 5 for better UI development',
    description:
      'As it so contrasted oh estimating instrument. Size like body some one had.',
    votes: {
      upvotes: 675,
      downvotes: 10,
    },
  },
  {
    title: "A beginner's guide to browser-sync",
    description: 'Started several mistake joy say painful removed reached end.',
    votes: {
      upvotes: 325,
      downvotes: 6,
    },
  },
]
