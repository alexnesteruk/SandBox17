import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'tee-times', loadComponent: () => import('./tee-times/tee-times.component').then(m => m.TeeTimesComponent)}
];
