import { RedirectCommand, Router, Routes, UrlTree } from '@angular/router'
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component'
import { HelpLayoutComponent } from './layouts/help-layout/help-layout.component'
import { ProfileLayoutComponent } from './layouts/profile-layout/profile-layout.component'
import { Profile2LayoutComponent } from './layouts/profile2-layout/profile2-layout.component'
import { OfflineComponent } from './views/account/offline/offline.component'
import { ClassicComponent } from './views/demo/classic/classic.component'
import { EventComponent } from './views/demo/event/event.component'
import { LandingPageComponent } from './views/demo/landing-page/landing-page.component'
import { MessageComponent } from './views/pages/message/message.component'
import { DownloadComponent } from './views/demo/download/download.component'
import { EventDetail2Component } from './views/pages/event-detail2/event-detail2.component'
import { AuthAdvanceLayoutComponent } from './layouts/auth-advance-layout/auth-advance-layout.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing/default',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    loadChildren: () =>
      import('./views/default/default.route').then((mod) => mod.DEFAULT_ROUTES),
  },
  {
    path: '',
    component: HelpLayoutComponent,
    loadChildren: () =>
      import('./views/helps/helps.route').then((mod) => mod.HELPS_ROUTES),
  },
  {
    path: '',
    component: Profile2LayoutComponent,
    loadChildren: () =>
      import('./views/profile2/profile2.route').then(
        (mod) => mod.PROFILE2_ROUTES
      ),
  },
  {
    path: 'profile',
    component: ProfileLayoutComponent,
    loadChildren: () =>
      import('./views/profile/profile.route').then((mod) => mod.PROFILE_ROUTES),
  },
  {
    path: '',
    loadChildren: () =>
      import('./views/pages/pages.route').then((mod) => mod.PAGES_ROUTES),
  },


  {
    path: 'auth',
    loadChildren: () =>
      import('./views/auth/auth.route').then((mod) => mod.AUTH_ROUTES),
  },
  {
    path: 'auth',
    component: AuthAdvanceLayoutComponent,
    loadChildren: () =>
      import('./views/auth-advance/auth-advance.routes').then(
        (mod) => mod.AUTH_ADVANCE_ROUTES
      ),
  },
  {
    path: 'landing/classic',
    component: ClassicComponent,
  },
  {
    path: 'landing',
    component: LandingPageComponent,
  },
  {
    path: 'landing/event',
    component: EventComponent,
  },
  {
    path: 'pages/messaging',
    component: MessageComponent,
  },
  {
    path: 'offline',
    component: OfflineComponent,
  },
  {
    path: 'app-download',
    component: DownloadComponent,
  },
  {
    path: 'pages/event-detail-2',
    component: EventDetail2Component,
  },
]
