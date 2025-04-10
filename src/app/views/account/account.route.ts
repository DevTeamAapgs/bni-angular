import { Route } from '@angular/router'
import { Error404Component } from '../default/error404/error404.component'
import { NotificationComponent } from '../default/notification/notification.component'
import { CreatePageComponent } from '../profile2/create-page/create-page.component'
import { OfflineComponent } from './offline/offline.component'
import { PrivacyComponent } from '../default/privacy/privacy.component'
import { SettingsComponent } from '../default/settings/settings.component'

export const ACCOUNT_ROUTES: Route[] = [
  {
    path: 'create-page',
    component: CreatePageComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'notifications',
    component: NotificationComponent,
  },
  {
    path: 'error-404',
    component: Error404Component,
  },
  {
    path: 'offline',
    component: OfflineComponent,
  },
  {
    path: 'privacy-and-terms',
    component: PrivacyComponent,
  },
]
