import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { InfosComponent } from './infos/infos.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

const myRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cv',
    //component: CvComponent,
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddComponent },
      { path: 'infos/:myid', component: InfosComponent },
      { path: 'edit/:myid', component: UpdateComponent },
      //   { path: '**', component: NotFoundComponent },
    ],
  },
  // { path: '', redirectTo: 'cv', pathMatch: 'full' },
  { path: 'servers', component: ManageServersComponent },
  // {
  //   path: 'serveurs',
  //   loadChildren: () => import('./sub/sub.module').then((m) => m.SubModule),
  // },
  { path: 'ms-word', component: MsWordComponent },
  { path: 'login', component: LoginComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

export const LAPOSTE_ROUTING = RouterModule.forRoot(myRoutes);
