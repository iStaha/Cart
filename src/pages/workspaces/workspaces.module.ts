import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkspacesPage } from './workspaces';

@NgModule({
  declarations: [
    WorkspacesPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkspacesPage),
  ],
})
export class WorkspacesPageModule {}
