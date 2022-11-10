import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListServersComponent } from './list-servers/list-servers.component';
import { InfoServerComponent } from './info-server/info-server.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { SUB_ROUTING } from './sub.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListServersComponent,
    InfoServerComponent,
    EditServerComponent,
  ],
  imports: [SUB_ROUTING, CommonModule, FormsModule],
})
export class SubModule {}
