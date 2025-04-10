import { Route } from '@angular/router'
import { HelpCenterComponent } from './help-center/help-center.component'
import { HelpDetailComponent } from './help-detail/help-detail.component'

export const HELPS_ROUTES: Route[] = [
  { path: 'help', component: HelpCenterComponent },
  { path: 'help-details', component: HelpDetailComponent },
]
