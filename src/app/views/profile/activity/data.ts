type TimelineDataType = {
  user: string
  avatar?: string
  action?: string
  visibility?: string
  visibility_icon?: string
  timestamp?: string
  comment?: string
  reply?: string
  avatar_bg?: string
  avatar_text?: string
}

export const timelineData: TimelineDataType[] = [
  {
    user: 'Rakesh Babu',
    avatar: 'assets/images/avatar/07.jpeg',
    action: 'update a playlist on Techzaa.',
    visibility: 'Public',
    visibility_icon: 'bi bi-unlock-fill',
    timestamp: 'Just now',
  },
  {
    user: 'Billy Vasquez',
    avatar: 'assets/images/avatar/01.jpg',
    action: 'save a <a href="#">link.</a>',
    visibility: 'only me',
    visibility_icon: 'bi bi-lock-fill',
    timestamp: '2min',
  },
  {
    user: 'Rakesh Babu',
    action: "liked Frances Guerrero's add comment.",
    comment: 'This is the best picture I have come across today....',
    avatar_bg: 'bg-success',
    avatar_text: 'SM',
    timestamp: '1hr',
  },
  {
    user: 'Judy Nguyen',
    avatar: 'assets/images/avatar/02.jpg',
    action: 'likes Jacqueline Miller Photos.',
    comment: '✌️👌👍',
    timestamp: '4hr',
  },
  {
    user: 'Larry Lawson',
    avatar: 'assets/images/avatar/03.jpg',
    comment: 'Replied to your comment on Blogzine blog theme',
    reply: 'Yes, I am so excited to see it live. 👍',
    timestamp: '10hr',
  },
]
