import { Route } from '@angular/router'
import { CelebrationComponent } from './celebration/celebration.component'
import { DefaultComponent } from './default/default.component'
import { EventDetail2Component } from './event-detail2/event-detail2.component'
import { PostComponent } from './post/post.component'

export const PAGES_ROUTES: Route[] = [
  { path: 'landing/default', component: DefaultComponent },
  {
    path: 'pages/celebration',
    component: CelebrationComponent,
  },
  {
    path: 'pages/event-details-2',
    component: EventDetail2Component,
  },

  {
    path: 'landing/post',
    component: PostComponent,
  },
]
