import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { HeroRoutes } from './hero/index';
import { DashboardComponent } from './dashboard/dashboard.component'

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...HeroRoutes,
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];
