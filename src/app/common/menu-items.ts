export type MenuItemType = {
  key: string
  label: string
  isTitle?: boolean
  isSection?: boolean
  isCollapsed?: boolean
  url?: string
  divider?: boolean
  icon?: string
  target?: any
  children?: MenuItemType[]
  parentKey?: string
}

export const MENU_ITEMS: MenuItemType[] = [
  {
    key: 'demo',
    label: 'Demo',
    children: [
      {
        key: 'default-demo',
        label: 'Home default',
        url: '/landing/default',
        parentKey: 'demo',
      },
      {
        key: 'classic-demo',
        label: 'Home classic',
        url: '/landing/classic',
        parentKey: 'demo',
      },
      {
        key: 'post-demo',
        label: 'Home post',
        url: '/landing/post',
        parentKey: 'demo',
      },
      {
        key: 'video-demo',
        label: 'Home video',
        url: '/landing/video',
        parentKey: 'demo',
      },
      {
        key: 'event-demo',
        label: 'Home event',
        url: '/landing/event',
        parentKey: 'demo',
      },
      {
        key: 'Landing Page',
        label: 'Landing page',
        url: '/landing',
        parentKey: 'demo',
      },
      {
        key: 'download-app',
        label: 'App download',
        divider: true,
        url: '/app-download',
        parentKey: 'demo',
      },
      {
        key: 'buy-social',
        icon: 'bi bi-cloud-download-fill',
        url: 'https://stackbros.in/',
        label: 'Buy Social',
        parentKey: 'demo',
      },
    ],
  },
  {
    key: 'pages',
    label: 'Pages',
    children: [
      {
        key: 'pages-albums',
        label: 'Albums',
        url: '/pages/albums',
        parentKey: 'pages',
      },
      {
        key: 'pages-celebration',
        label: 'Celebration',
        url: '/pages/celebration',
        parentKey: 'pages',
      },
      {
        key: 'pages-messaging',
        label: 'Messaging',
        url: '/pages/messaging',
        parentKey: 'pages',
      },
      {
        key: 'pages-profile',
        label: 'Profile',
        parentKey: 'pages',
        children: [
          {
            key: 'profile',
            label: 'Feed',
            url: '/profile/feed',
            parentKey: 'pages-profile',
          },
          {
            key: 'profile-about',
            label: 'About',
            url: '/profile/about',
            parentKey: 'pages-profile',
          },
          {
            key: 'profile-connections',
            label: 'Connections',
            url: '/profile/connections',
            parentKey: 'pages-profile',
          },
          {
            key: 'profile-media',
            label: 'Media',
            url: '/profile/media',
            parentKey: 'pages-profile',
          },
          {
            key: 'profile-videos',
            label: 'Videos',
            url: '/profile/videos',
            parentKey: 'pages-profile',
          },
          {
            key: 'profile-events',
            label: 'Events',
            url: '/profile/events',
            parentKey: 'pages-profile',
          },
          {
            key: 'profile-activity',
            label: 'Activity',
            url: '/profile/activity',
            parentKey: 'pages-profile',
          },
        ],
      },
      {
        key: 'events',
        label: 'Events',
        url: '/pages/events',
        parentKey: 'pages',
      },
      {
        key: 'events-2',
        label: 'Events 2',
        url: '/pages/events-2',
        parentKey: 'pages',
      },
      {
        key: 'event-details',
        label: 'Event details',
        url: '/pages/event-details',
        parentKey: 'pages',
      },
      {
        key: 'event-details-2',
        label: 'Event details 2',
        url: '/pages/event-details-2',
        parentKey: 'pages',
      },
      {
        key: 'groups',
        label: 'Groups',
        url: '/pages/groups',
        parentKey: 'pages',
      },
      {
        key: 'group-details',
        label: 'Group details',
        url: '/pages/group-details',
        parentKey: 'pages',
      },
      {
        key: 'post-videos',
        label: 'Post videos',
        url: '/pages/post-videos',
        parentKey: 'pages',
      },
      {
        key: 'post-video-details',
        label: 'Post video details',
        url: '/pages/post-video-details',
        parentKey: 'pages',
      },
      {
        key: 'post-details',
        label: 'Post details',
        url: '/pages/post-details',
        parentKey: 'pages',
      },
      {
        key: 'video-details',
        label: 'Video details',
        url: '/pages/video-details',
        parentKey: 'pages',
      },
      {
        key: 'blog',
        label: 'Blog',
        url: '/pages/blog',
        parentKey: 'pages',
      },
      {
        key: 'blog-details',
        label: 'Blog details',
        url: '/pages/blog-details',
        parentKey: 'pages',
        divider: true,
      },
      {
        key: 'dropdown-levels',
        label: 'Dropdown levels',
        parentKey: 'pages',
        children: [
          {
            key: 'dropdown-item',
            label: 'Dropdown item',
            parentKey: 'dropdown-levels',
          },
          {
            key: 'dropdown-item',
            label: 'Dropdown item',
            parentKey: 'dropdown-levels',
          },
          {
            key: 'dropdown-item',
            label: 'Dropdown (start)',
            parentKey: 'dropdown-levels',
            children: [
              {
                key: 'dropdown-subitem',
                label: 'Dropdown item',
                parentKey: 'dropdown-item',
              },
              {
                key: 'dropdown-subitem',
                label: 'Dropdown item',
                parentKey: 'dropdown-item',
              },
            ],
          },
          {
            key: 'profile',
            label: 'Dropdown item',
            parentKey: 'dropdown-levels',
          },
        ],
      },
    ],
  },
  {
    key: 'accounts',
    label: 'Account',
    children: [
      {
        key: 'create-page',
        label: 'Create a page',
        url: '/create-page',
        parentKey: 'accounts',
      },
      {
        key: 'settings',
        label: 'Settings',
        url: '/settings',
        parentKey: 'accounts',
      },
      {
        key: 'notifications',
        label: 'Notifications',
        url: '/notifications',
        parentKey: 'accounts',
      },
      {
        key: 'help',
        label: 'Help center',
        url: '/help',
        parentKey: 'accounts',
      },
      {
        key: 'help-details',
        label: 'Help details',
        url: '/help-details',
        parentKey: 'accounts',
      },
      {
        key: 'auth',
        label: 'Authentication',
        parentKey: 'accounts',
        children: [
          {
            key: 'sign-in',
            label: 'Sign in',
            url: '/auth/sign-in',
            parentKey: 'auth',
          },
          {
            key: 'sign-up',
            label: 'Sign up',
            url: '/auth/sign-up',
            parentKey: 'auth',
          },
          {
            key: 'forgot-password',
            label: 'Forgot password',
            url: '/auth/forgot-password',
            parentKey: 'auth',
            divider: true,
          },
          {
            key: 'sign-in-advance',
            label: 'Sign in advance',
            url: '/auth/sign-in-advance',
            parentKey: 'auth',
          },
          {
            key: 'sign-up-advance',
            label: 'Sign up advance',
            url: '/auth/sign-up-advance',
            parentKey: 'auth',
          },
          {
            key: 'forgot-password-advance',
            label: 'Forgot password advance',
            url: '/auth/forgot-password-advance',
            parentKey: 'auth',
          },
        ],
      },
      {
        key: 'error',
        label: 'Error 404',
        url: '/error-404',
        parentKey: 'accounts',
      },
      {
        key: 'offline',
        label: 'Offline',
        url: '/offline',
        parentKey: 'accounts',
      },
      {
        key: 'help-details',
        label: 'Privacy & Terms',
        url: '/privacy-and-terms',
        parentKey: 'accounts',
      },
    ],
  },
  {
    key: 'network',
    label: 'My network',
    url: '/profile/connections',
  },
]
