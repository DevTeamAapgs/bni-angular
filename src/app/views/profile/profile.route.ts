import { Route } from '@angular/router'
import { ProfileComponent } from './profile/profile.component'
import { AboutComponent } from './about/about.component'
import { ConnectionComponent } from './connection/connection.component'
import { MediaComponent } from './media/media.component'
import { ActivityComponent } from './activity/activity.component'
import { VideoComponent } from './video/video.component'
import { EventComponent } from './event/event.component'
import { CompanyProfileComponent } from './company-profile/company-profile.component'
import { LeadsComponent } from './leads/leads.component'

export const PROFILE_ROUTES: Route[] = [
  {
    path: 'feed',
    component: ProfileComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'connections',
    component: ConnectionComponent,
  },
  {
    path: 'media',
    component: MediaComponent,
  },
  {
    path: 'videos',
    component: VideoComponent,
  },
  {
    path: 'events',
    component: EventComponent,
  },
  {
    path: 'activity',
    component: ActivityComponent,
  },
  {
    path: 'company-profile',
    component: CompanyProfileComponent,
  },
  {
    path: 'leads',
    component: LeadsComponent,
  },
]
