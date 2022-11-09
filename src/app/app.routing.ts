import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { InfosComponent } from './infos/infos.component';

const myRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/:myid', component: InfosComponent },
  { path: 'servers', component: ManageServersComponent },
  { path: 'ms-word', component: MsWordComponent },
];

export const LAPOSTE_ROUTING = RouterModule.forRoot(myRoutes);
