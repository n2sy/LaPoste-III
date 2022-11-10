import { RouterModule, Routes } from '@angular/router';
import { EditServerComponent } from './edit-server/edit-server.component';
import { InfoServerComponent } from './info-server/info-server.component';
import { ListServersComponent } from './list-servers/list-servers.component';

const subRoutes: Routes = [
  {
    path: 'serveurs',
    component: ListServersComponent,
    children: [
      { path: ':id', component: InfoServerComponent },
      { path: ':id/edit', component: EditServerComponent },
    ],
  },
];

export const SUB_ROUTING = RouterModule.forChild(subRoutes);
