import { Route } from '@angular/router'
import { NotificationComponent } from './notification/notification.component'
import { Error404Component } from './error404/error404.component'
import { PrivacyComponent } from './privacy/privacy.component'
import { BlogComponent } from './blog/blog.component'
import { BlogDetailComponent } from './blog-detail/blog-detail.component'
import { PostDetailComponent } from './post-detail/post-detail.component'
import { SettingsComponent } from './settings/settings.component'
import { Events2Component } from './events2/events2.component'

export const DEFAULT_ROUTES: Route[] = [
  { path: 'notifications', component: NotificationComponent },
  { path: 'error-404', component: Error404Component },
  { path: 'privacy-and-terms', component: PrivacyComponent },
  { path: 'pages/blog', component: BlogComponent },
  { path: 'pages/blog-details', component: BlogDetailComponent },
  { path: 'pages/post-details', component: PostDetailComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'pages/events-2', component: Events2Component },
]
