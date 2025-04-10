import { Route } from '@angular/router'
import { AlbumsComponent } from '../profile2/albums/albums.component'
import { EventDetailComponent } from '../profile2/event-detail/event-detail.component'
import { GroupDetailComponent } from '../profile2/group-detail/group-detail.component'
import { GroupComponent } from '../profile2/group/group.component'
import { PostVideoDetailComponent } from '../profile2/post-video-detail/post-video-detail.component'
import { PostVideoComponent } from '../profile2/post-video/post-video.component'
import { EventsComponent } from './events/events.component'
import { CreatePageComponent } from './create-page/create-page.component'

export const PROFILE2_ROUTES: Route[] = [
  {
    path: 'pages/albums',
    component: AlbumsComponent,
  },

  {
    path: 'pages/events',
    component: EventsComponent,
  },

  {
    path: 'pages/event-details',
    component: EventDetailComponent,
  },

  {
    path: 'pages/groups',
    component: GroupComponent,
  },
  {
    path: 'pages/group-details',
    component: GroupDetailComponent,
  },
  {
    path: 'pages/post-videos',
    component: PostVideoComponent,
  },
  {
    path: 'pages/post-video-details',
    component: PostVideoDetailComponent,
  },
  {
    path: 'create-page',
    component: CreatePageComponent,
  },
]
