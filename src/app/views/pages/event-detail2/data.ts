type FAQDataType = {
  id: string
  header: string
  body: string[]
}

type ScheduleDataType = {
  id: string
  date: string
  time: string
  title: string
  description: string[]
  speakers: [
    {
      name: string
      position: string
      image: string
    },
    {
      name: string
      position: string
      image: string
    },
  ]
}

export const FAQsData: FAQDataType[] = [
  {
    id: 'faqOne',
    header: 'How does it work? You can buy as much or as little as you like!',
    body: [
      'For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do.',
      'Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but. Drawings offended yet answered Jennings perceive laughing six did far.',
    ],
  },
  {
    id: 'faqTwo',
    header: 'Do I need to book an early slot to find the best clothes?',
    body: [
      'The furnished she concluded depending procuring concealed.',
      'Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal. Frequently sufficient to be unaffected.',
    ],
  },
  {
    id: 'faqThree',
    header: 'Can I buy tickets at the event?',
    body: [
      'Match way these she avoids seeing death. She who drift their fat off.',
      'Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had. Under folly balls, death own point now men.',
    ],
  },
]

export const scheduleData: ScheduleDataType[] = [
  {
    id: 'scheduleOne',
    date: 'November 17, 2022',
    time: '12:00',
    title: 'Express besides it present',
    description: [
      'Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but. Drawings offended yet answered Jennings perceive laughing six did far.',
    ],
    speakers: [
      {
        name: 'Bryan Knight',
        position: 'Founder',
        image: 'assets/images/avatar/01.jpg',
      },
      {
        name: 'Bryan Knight',
        position: 'Founder',
        image: 'assets/images/avatar/02.jpg',
      },
    ],
  },
  {
    id: 'scheduleTwo',
    date: 'February 05, 2023',
    time: '07:00',
    title: 'Making it over 2000 years',
    description: [
      'Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but. Drawings offended yet answered Jennings perceive laughing six did far.',
    ],
    speakers: [
      {
        name: 'Bryan Knight',
        position: 'Founder',
        image: 'assets/images/avatar/03.jpg',
      },
      {
        name: 'Bryan Knight',
        position: 'Founder',
        image: 'assets/images/avatar/04.jpg',
      },
    ],
  },
  {
    id: 'scheduleThree',
    date: 'December 15, 2022',
    time: '8:00PM',
    title: 'The furnished she concluded depending',
    description: [
      'Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but. Drawings offended yet answered Jennings perceive laughing six did far.',
    ],
    speakers: [
      {
        name: 'Bryan Knight',
        position: 'Founder',
        image: 'assets/images/avatar/05.jpg',
      },
      {
        name: 'Bryan Knight',
        position: 'Founder',
        image: 'assets/images/avatar/06.jpg',
      },
    ],
  },
  {
    id: 'scheduleFour',
    date: 'March 17, 2022',
    time: '2:00PM',
    title: 'Particular way thoroughly',
    description: [
      'Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but. Drawings offended yet answered Jennings perceive laughing six did far.',
    ],
    speakers: [
      {
        name: 'Bryan Knight',
        position: 'Founder',
        image: 'assets/images/avatar/07.jpeg',
      },
      {
        name: 'Bryan Knight',
        position: 'Founder',
        image: 'assets/images/avatar/08.jpg',
      },
    ],
  },
]
